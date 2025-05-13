import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import type { Preview } from "@storybook/react";
import AppTheme from "../src/styles/globalTheme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { CssBaseline } from "@mui/material";

const WithProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      nextjs: {
        appDirectory: true,
        navigation: {
          pathname: "/shop",
        },
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
    globalTypes: {
      theme: {
        name: "Theme",
        description: "Global theme for components",
        defaultValue: AppTheme,
      },
    },
    staticDirs: [{ from: "../public", to: "/" }],
  },
  decorators: [
    (Story) => {
      const StoryComponent = React.memo(Story);

      return (
        <WithProviders>
          <StoryComponent />
        </WithProviders>
      );
    },
  ],
};

export default preview;
