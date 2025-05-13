import { ColorPalette } from "../ColorPalette";

export const MuiOutlinedInputStyles = {
  styleOverrides: {
    root: {
      color: ColorPalette.text.secondary,
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: ColorPalette.slate[300],
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: ColorPalette.primary.main,
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: ColorPalette.primary.main,
        },
      },
      "& .Mui-error .MuiOutlinedInput-notchedOutline": {
        color: ColorPalette.error.main,
        borderColor: ColorPalette.error.main, // Set error border color
      },
      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: ColorPalette.slate[300], // Set border color on hover to be the same as default
      },
    },
  },
};
