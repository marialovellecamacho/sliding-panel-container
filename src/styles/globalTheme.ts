import { createTheme, ThemeOptions } from "@mui/material";
import { ExtendedTypographyOptions } from "./theme";
import { MuiTypographyStyles } from "./components/MuiTypographyStyles";
import { ColorPalette } from "./ColorPalette";
import { MuiButtonStyles } from "./components/MuiButtonStyles";
import { MuiCardStyles } from "./components/MuiCardStyles";
import { MuiOutlinedInputStyles } from "./components/MuiOutlinedInputStyles";
import { MuiTextFieldStyles } from "./components/MuiTextFieldStyles";
import { TypographyVariants } from "./Typography";
import { MuiCheckboxStyles } from "./components/MuiCheckboxStyles";

const spacing = {
  xs: 4, // 4px
  sm: 8, // 8px
  md: 16, // 16px
  lg: 24, // 24px
  xl: 32, // 32px
  xxl: 48, // 48px
};

const AppTheme = createTheme({
  breakpoints: {
    values: {
      xs: 320, // mobile
      sm: 576, // large mobile
      md: 768, // tablet
      lg: 1024, // desktop
      xl: 1280, // large desktop
    },
  },
  spacing: (factor: number) => `${spacing.sm * factor}px`, // Base spacing unit (16px)
  typography: TypographyVariants as ExtendedTypographyOptions,
  palette: ColorPalette,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTypography: MuiTypographyStyles,
    MuiButton: MuiButtonStyles,
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          color: ColorPalette.text.primary,
          fontWeight: 300,
        },
      },
    },
    MuiCard: MuiCardStyles,
    MuiOutlinedInput: MuiOutlinedInputStyles,
    MuiTextField: MuiTextFieldStyles,
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: ColorPalette.primary.main,
          lineHeight: "24px",
          "&:hover": {
            color: ColorPalette.primary.dark,
            cursor: "pointer",
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiCheckbox: MuiCheckboxStyles,
  },
} as ThemeOptions);

export default AppTheme;
