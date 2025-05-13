import React from "react";
import {
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  styled,
  Typography,
  Drawer,
} from "@mui/material";
import { ArrowLeftIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useSlidingPanelContainer } from "./useSlidingPanelContainer";

type SlidingPanelContainerProps = {
  leftPanelContent: React.ReactNode;
  middlePanelContent: React.ReactNode;
  rightPanelContent?: React.ReactNode;
  onLeftPanelItemClick?: (item: any) => void;
  onMiddlePanelItemClick?: (item: any) => void;
  selectedLeftItem?: any;
  selectedMiddleItem?: any;
  leftPanelWidth?: number;
  rightPanelWidth?: number;
  disabled?: boolean;
  isLoading?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  sx?: any;
  panelSx?: any;
};

export function SlidingPanelContainer({
  leftPanelContent,
  middlePanelContent,
  rightPanelContent,
  onLeftPanelItemClick,
  onMiddlePanelItemClick,
  selectedLeftItem,
  selectedMiddleItem,
  leftPanelWidth = 320,
  rightPanelWidth = 320,
  disabled = false,
  isLoading = false,
  hasError = false,
  errorMessage = "An error occurred",
  sx = {},
  panelSx = {},
  ...props
}: SlidingPanelContainerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { activePanel, handleBack } = useSlidingPanelContainer({
    selectedLeftItem,
    selectedMiddleItem,
    onLeftPanelItemClick,
    onMiddlePanelItemClick,
  });

  if (isLoading || hasError) {
    return (
      <Container sx={{ ...sx, justifyContent: "center", alignItems: "center" }} {...props}>
        <Typography variant="body1" color={hasError ? "error" : "inherit"}>
          {hasError ? errorMessage : "Loading..."}
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={sx} {...props}>
      {isMobile ? (
        <>
          <MobileContainer>
            {activePanel === 0 && <Box>{leftPanelContent}</Box>}
            {activePanel >= 1 && (
              <Box>
                <MobileNavigation>
                  <IconButton onClick={handleBack} disabled={disabled}>
                    <ChevronLeftIcon width={24} height={24} />
                  </IconButton>
                </MobileNavigation>
                {middlePanelContent}
              </Box>
            )}
          </MobileContainer>

          <Drawer
            anchor="bottom"
            open={activePanel === 2}
            onClose={handleBack}
            sx={{
              "& .MuiDrawer-paper": {
                height: "90vh",
                borderTopLeftRadius: theme.shape.borderRadius * 2,
                borderTopRightRadius: theme.shape.borderRadius * 2,
                overflow: "visible",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: theme.spacing(1),
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 40,
                  height: 4,
                  backgroundColor: theme.palette.divider,
                  borderRadius: theme.shape.borderRadius,
                },
              },
            }}
          >
            <MobileNavigation>
              <IconButton onClick={handleBack} disabled={disabled}>
                <ChevronLeftIcon width={24} height={24} />
              </IconButton>
            </MobileNavigation>
            {rightPanelContent}
          </Drawer>
        </>
      ) : (
        <DesktopContainer>
          <Drawer
            variant="persistent"
            open={!selectedMiddleItem}
            anchor="left"
            sx={{
              width: selectedLeftItem ? 0 : leftPanelWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: leftPanelWidth,
                position: "relative",
                border: "none",
                borderRight: `1px solid ${theme.palette.divider}`,
              },
            }}
          >
            {leftPanelContent}
          </Drawer>

          <MainPanel
            sx={{
              width: selectedMiddleItem
                ? `calc(100% - ${rightPanelWidth}px)`
                : `calc(100% - ${leftPanelWidth}px)`,
              marginLeft:
                !selectedLeftItem || (selectedMiddleItem && selectedLeftItem)
                  ? 0
                  : `${leftPanelWidth}px`,
              transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              position: "relative",
            }}
          >
            {selectedMiddleItem && (
              <NavigationButton
                onClick={() => {
                  onLeftPanelItemClick?.(null);
                  onMiddlePanelItemClick?.(null);
                }}
                position="left"
                disabled={disabled}
                sx={{
                  top: theme.spacing(1),
                  left: theme.spacing(1),
                  display: selectedMiddleItem ? "flex" : "none",
                }}
              >
                <ArrowLeftIcon width={24} height={24} />
              </NavigationButton>
            )}
            {middlePanelContent}
          </MainPanel>

          <Drawer
            variant="persistent"
            open={selectedMiddleItem}
            anchor="right"
            sx={{
              width: selectedMiddleItem ? rightPanelWidth : 0,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: rightPanelWidth,
                position: "relative",
                border: "none",
                borderLeft: `1px solid ${theme.palette.divider}`,
              },
            }}
          >
            {rightPanelContent && (
              <>
                <NavigationButton onClick={handleBack} position="left" disabled={disabled}>
                  <ChevronLeftIcon width={24} height={24} />
                </NavigationButton>
                {rightPanelContent}
              </>
            )}
          </Drawer>
        </DesktopContainer>
      )}
    </Container>
  );
}

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

const MobileContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  backgroundColor: theme.palette.background.paper,
}));

const MainPanel = styled(Box)(({ theme }) => ({
  height: "100%",
  overflow: "auto",
  backgroundColor: theme.palette.background.paper,
  position: "relative",
}));

const MobileNavigation = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: "flex",
  alignItems: "center",
}));

const NavigationButton = styled(IconButton)<{ position: "left" | "right" }>(
  ({ theme, position }) => ({
    position: "absolute",
    top: theme.spacing(1),
    [position]: theme.spacing(1),
    zIndex: 10,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  })
);

const DesktopContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  position: "relative",
  backgroundColor: theme.palette.background.paper,
}));
