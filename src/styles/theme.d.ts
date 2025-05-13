type HexColorPalette = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

declare module "@mui/material/styles" {
  interface Palette {
    white: string;
    black: string;
    purple: HexColorPalette;
    slate: HexColorPalette;
    zinc: HexColorPalette;
    amber: HexColorPalette;
    yellow: HexColorPalette;
    green: HexColorPalette;
    blue: HexColorPalette;
    red: HexColorPalette;
    orange: HexColorPalette;
    sky: HexColorPalette;
  }

  interface TypographyVariants {
    h1Bold: React.CSSProperties;
    "large-semibold": React.CSSProperties;
    "subtle-semibold": React.CSSProperties;
    "body-medium": React.CSSProperties;
    "subtle-medium": React.CSSProperties;
    detail: React.CSSProperties;
    "detail-medium": React.CSSProperties;
    "lead-regular": React.CSSProperties;
    "subtle-regular": React.CSSProperties;
    "p-light": React.CSSProperties;
    "list-light": React.CSSProperties;
    "p-regular": React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1Bold?: React.CSSProperties;
    "large-semibold"?: React.CSSProperties;
    "subtle-semibold"?: React.CSSProperties;
    "body-medium"?: React.CSSProperties;
    "subtle-medium"?: React.CSSProperties;
    detail?: React.CSSProperties;
    "detail-medium"?: React.CSSProperties;
    "lead-regular"?: React.CSSProperties;
    "subtle-regular"?: React.CSSProperties;
    "p-light"?: React.CSSProperties;
    "list-light"?: React.CSSProperties;
    "p-regular"?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
    "large-semibold": true;
    "subtle-semibold": true;
    "body-medium": true;
    "subtle-medium": true;
    detail: true;
    "detail-medium": true;
    "lead-regular": true;
    "subtle-regular": true;
    "p-light": true;
    "p-ui": true;
    "list-light": true;
    "p-regular": true;
    "p-medium": true;
  }
}

export interface ExtendedTypographyOptions extends TypographyOptions {
  "large-semibold": React.CSSProperties;
  "subtle-semibold": React.CSSProperties;
  "body-medium": React.CSSProperties;
  "subtle-medium": React.CSSProperties;
  detail: React.CSSProperties;
  "detail-medium": React.CSSProperties;
  "lead-regular": React.CSSProperties;
  "subtle-regular": React.CSSProperties;
  "p-light": React.CSSProperties;
  "list-light": React.CSSProperties;
  "p-regular": React.CSSProperties;
  "p-medium": React.CSSProperties;
}
