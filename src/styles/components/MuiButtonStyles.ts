import { ColorPalette } from "../ColorPalette";

export const MuiButtonStyles = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      textTransform: "none",
      borderRadius: 6,
      backgroundColor: ColorPalette.primary.main,
      padding: "8px 16px",
      "&.MuiButton-contained": {
        color: "#fff",
        "&:hover": {
          backgroundColor: ColorPalette.primary.dark,
        },
        "&:active": {
          backgroundColor: ColorPalette.primary.main,
        },
      },
    },
  },
};
