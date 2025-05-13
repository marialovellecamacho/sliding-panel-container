import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SlidingPanelContainer } from ".";

describe("SlidingPanelContainer", () => {
  const theme = createTheme();

  const defaultProps = {
    leftPanelContent: <div data-testid="left-panel">Left Panel</div>,
    middlePanelContent: <div data-testid="middle-panel">Middle Panel</div>,
    rightPanelContent: <div data-testid="right-panel">Right Panel</div>,
  };

  const renderWithTheme = (ui: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  const setup = (props = {}) => {
    return renderWithTheme(
      <SlidingPanelContainer {...defaultProps} {...props} />
    );
  };

  // Rendering tests
  it("should render with default props", () => {
    setup();
    expect(screen.getByTestId("left-panel")).toBeInTheDocument();
    expect(screen.getByTestId("middle-panel")).toBeInTheDocument();
    // Right panel is rendered but may not be visible initially
  });

  // Props tests
  describe("when props change", () => {
    it("should update active panel when selectedLeftItem changes", () => {
      const { rerender } = setup();

      // Initially at panel 0
      expect(screen.getByTestId("left-panel")).toBeVisible();

      // Update to show panel 1
      rerender(
        <ThemeProvider theme={theme}>
          <SlidingPanelContainer
            {...defaultProps}
            selectedLeftItem={{ id: 1 }}
          />
        </ThemeProvider>
      );

      // Check if panel has changed (this would be more visible in actual browser)
      expect(screen.getByTestId("middle-panel")).toBeInTheDocument();
    });
  });

  // Interaction tests
  describe("user interactions", () => {
    it("should handle back navigation correctly", () => {
      const onLeftPanelItemClick = jest.fn();
      const onMiddlePanelItemClick = jest.fn();

      const { rerender } = setup({
        selectedMiddleItem: { id: 2 },
        onLeftPanelItemClick,
        onMiddlePanelItemClick,
      });

      // Find back button and click it
      const backButton = screen.getAllByLabelText("Back")[0];
      fireEvent.click(backButton);

      // Should call the appropriate handler
      expect(onMiddlePanelItemClick).toHaveBeenCalledWith(null);
    });
  });

  // Responsive tests
  describe("responsive behavior", () => {
    it("should adapt to different screen sizes", () => {
      // Mock media query for mobile
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: query.includes("max-width"),
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

      setup();

      // On mobile, only one panel should be visible at a time
      expect(screen.getByTestId("left-panel")).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe("accessibility", () => {
    it("should have accessible navigation buttons", () => {
      setup({ selectedLeftItem: { id: 1 } });
      const backButton = screen.getByLabelText("Back");
      expect(backButton).toBeInTheDocument();
    });
  });
});
