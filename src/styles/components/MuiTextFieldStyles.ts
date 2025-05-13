import { ColorPalette } from "../ColorPalette";

export const MuiTextFieldStyles = {
  styleOverrides: {
    root: {
      marginBottom: "0px",
      marginTop: "16px",
      "& .MuiInputBase-root": {
        minHeight: 40,
        "&.MuiInputBase-multiline": {
          "& textarea": {
            padding: 0,
          },
        },
        "& .MuiInputBase-input": {
          fontWeight: 300,
          color: ColorPalette.text.primary,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: ColorPalette.primary.main,
        },

        "& .MuiInputAdornment-root": {
          color: ColorPalette.text.primary,
        },

        "& .MuiInputBase-inputAdornedStart": {
          padding: "10px 14px 10px 0px",
        },

        "& input[type=number]": {
          MozAppearance: "textfield", // For Firefox
        },
        "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
          {
            WebkitAppearance: "none", // For Chrome, Safari, Edge, Opera
            margin: 0,
          },

        // Override webkit autofill background color
        "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active":
          {
            WebkitBoxShadow: "0 0 0 30px white inset !important",
            WebkitTextFillColor: ColorPalette.text.primary,
          },
      },
      "& .MuiOutlinedInput-input": {
        padding: "10px 14px",
        borderColor: ColorPalette.slate[300], // Set default border color
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: ColorPalette.primary.main,
        },
      },
      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-input:not(.Mui-error)": {
        borderColor: ColorPalette.slate[300], // Set border color on hover to be the same as default
      },
      "& .MuiInputLabel-outlined": {
        transform: "translate(14px, 9px) scale(1)",
      },
      "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
        transform: "translate(14px, -6px) scale(0.75)",
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: 4,
      },
      "& .Mui-error": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: ColorPalette.error.main,
        },
        "& .MuiFormHelperText-root": {
          color: ColorPalette.error.main,
        },
        "& .MuiInputLabel-root": {
          color: ColorPalette.error.main,
        },
      },
    },
  },
  variants: [
    {
      props: { error: true },
      style: {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: ColorPalette.error.main,
        },
        "& .MuiFormHelperText-root": {
          color: ColorPalette.error.main,
        },
        "& .MuiInputLabel-root": {
          color: ColorPalette.error.main,
        },
      },
    },
  ],
};
