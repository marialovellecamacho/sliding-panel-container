export const MuiCardStyles = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      backgroundColor: "#ffffff",

      "& .MuiCardContent-root": {
        padding: "0px",

        "& > :last-child": {
          paddingBottom: 0,
        },
      },
    },
  },
};
