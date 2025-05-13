import { ColorPalette } from "../ColorPalette";

export const MuiCheckboxStyles = {
  styleOverrides: {
    root: {
      padding: 0,
      "& .MuiSvgIcon-root": {
        display: "none", // Hide the default checkbox icon
      },
      "&::before": {
        content: '""',
        display: "block",
        width: 16,
        height: 16,
        backgroundColor: "white",
        border: "1px solid #D0D5DD",
        borderRadius: "4px",
      },
      "&.Mui-checked::before": {
        backgroundColor: ColorPalette.purple[50],
        border: `1px solid ${ColorPalette.primary.main}`,
      },
      "&.Mui-checked::after": {
        content: '""',
        position: "absolute",
        left: 6,
        top: 2,
        width: 4,
        height: 10,
        border: `1px solid ${ColorPalette.primary.main}`,
        borderWidth: "0 2px 2px 0",
        transform: "rotate(45deg)",
      },
      "&.Mui-disabled::before": {
        backgroundColor: ColorPalette.slate[100],
        border: `1px solid ${ColorPalette.slate[200]}`,
      },
      "&.Mui-disabled.Mui-checked::before": {
        backgroundColor: ColorPalette.slate[100],
        border: `1px solid ${ColorPalette.slate[200]}`,
      },
      "&.Mui-disabled.Mui-checked::after": {
        borderColor: ColorPalette.slate[100],
      },
    },
  },
};
