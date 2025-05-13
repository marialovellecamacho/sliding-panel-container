import { useState, useEffect, useCallback } from "react";

export function useSlidingPanelContainer({
  selectedLeftItem,
  selectedMiddleItem,
  onLeftPanelItemClick,
  onMiddlePanelItemClick,
}: UseSlidingPanelContainerProps) {
  // 0 = showing left panel, 1 = showing middle panel, 2 = showing right panel
  const [activePanel, setActivePanel] = useState(0);

  // Update active panel based on selected items
  useEffect(() => {
    if (selectedMiddleItem) {
      setActivePanel(2);
    } else if (selectedLeftItem) {
      setActivePanel(1);
    } else {
      setActivePanel(0);
    }
  }, [selectedLeftItem, selectedMiddleItem]);

  const handlePanelChange = useCallback((panelIndex: number) => {
    setActivePanel(panelIndex);
  }, []);

  const handleBack = useCallback(() => {
    if (activePanel === 2) {
      setActivePanel(1);
      // Optional: Clear the selected middle item
      if (onMiddlePanelItemClick) {
        onMiddlePanelItemClick(null);
      }
    } else if (activePanel === 1) {
      setActivePanel(0);
      // Optional: Clear the selected left item
      if (onLeftPanelItemClick) {
        onLeftPanelItemClick(null);
      }
    }
  }, [activePanel, onLeftPanelItemClick, onMiddlePanelItemClick]);

  return {
    activePanel,
    handlePanelChange,
    handleBack,
  };
}

type UseSlidingPanelContainerProps = {
  selectedLeftItem?: any;
  selectedMiddleItem?: any;
  onLeftPanelItemClick?: (item: any) => void;
  onMiddlePanelItemClick?: (item: any) => void;
};
