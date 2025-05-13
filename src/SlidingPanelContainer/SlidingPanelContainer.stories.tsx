import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SlidingPanelContainer } from "./index";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  Button,
} from "@mui/material";

const meta: Meta<typeof SlidingPanelContainer> = {
  title: "Components/Molecules/SlidingPanelContainer",
  component: SlidingPanelContainer,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component:
          "A responsive sliding panel container that can display up to three panels of content. On desktop, panels slide horizontally. On mobile, panels are displayed as full-screen views with the third panel appearing as an action sheet over the second panel.",
      },
    },
  },
  argTypes: {
    leftPanelContent: {
      control: false,
      description: "Content for the left panel",
    },
    middlePanelContent: {
      control: false,
      description: "Content for the middle panel",
    },
    rightPanelContent: {
      control: false,
      description: "Content for the right panel",
    },
    selectedLeftItem: {
      control: false,
      description: "The currently selected item from the left panel",
    },
    selectedMiddleItem: {
      control: false,
      description: "The currently selected item from the middle panel",
    },
    onLeftPanelItemClick: {
      action: "leftPanelItemClicked",
      description: "Callback when an item in the left panel is clicked",
    },
    onMiddlePanelItemClick: {
      action: "middlePanelItemClicked",
      description: "Callback when an item in the middle panel is clicked",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "600px", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SlidingPanelContainer>;

// Sample data for the stories
const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home & Kitchen" },
  { id: 4, name: "Books" },
  { id: 5, name: "Sports" },
];

const products = {
  1: [
    {
      id: 101,
      name: "Smartphone",
      price: 699,
      description: "Latest model with advanced features",
    },
    {
      id: 102,
      name: "Laptop",
      price: 1299,
      description: "Powerful performance for work and play",
    },
    {
      id: 103,
      name: "Headphones",
      price: 199,
      description: "Noise-cancelling with premium sound",
    },
  ],
  2: [
    {
      id: 201,
      name: "T-Shirt",
      price: 29,
      description: "Comfortable cotton t-shirt",
    },
    {
      id: 202,
      name: "Jeans",
      price: 59,
      description: "Classic fit denim jeans",
    },
    {
      id: 203,
      name: "Jacket",
      price: 89,
      description: "Lightweight all-season jacket",
    },
  ],
  3: [
    {
      id: 301,
      name: "Coffee Maker",
      price: 79,
      description: "Programmable coffee maker",
    },
    {
      id: 302,
      name: "Blender",
      price: 49,
      description: "High-speed blender for smoothies",
    },
    {
      id: 303,
      name: "Toaster",
      price: 39,
      description: "2-slice toaster with multiple settings",
    },
  ],
  4: [
    {
      id: 401,
      name: "Fiction Novel",
      price: 15,
      description: "Bestselling fiction novel",
    },
    {
      id: 402,
      name: "Cookbook",
      price: 25,
      description: "Collection of gourmet recipes",
    },
    {
      id: 403,
      name: "Biography",
      price: 20,
      description: "Inspiring life story",
    },
  ],
  5: [
    {
      id: 501,
      name: "Tennis Racket",
      price: 89,
      description: "Professional tennis racket",
    },
    {
      id: 502,
      name: "Basketball",
      price: 29,
      description: "Official size basketball",
    },
    {
      id: 503,
      name: "Yoga Mat",
      price: 39,
      description: "Non-slip exercise yoga mat",
    },
  ],
};

const productDetails = {
  101: {
    specs: ['6.7" display', "128GB storage", "12MP camera"],
    colors: ["Black", "Silver", "Gold"],
    inStock: true,
  },
  102: {
    specs: ['15.6" display', "512GB SSD", "16GB RAM"],
    colors: ["Silver", "Space Gray"],
    inStock: true,
  },
  103: {
    specs: ["20Hz-20kHz frequency", "Bluetooth 5.0", "30-hour battery"],
    colors: ["Black", "White"],
    inStock: false,
  },
  201: {
    specs: ["100% cotton", "Machine washable", "Regular fit"],
    colors: ["White", "Black", "Blue", "Red"],
    inStock: true,
  },
  202: {
    specs: ["Cotton blend", "Straight leg", "Button closure"],
    colors: ["Blue", "Black", "Gray"],
    inStock: true,
  },
  203: {
    specs: ["Polyester", "Water-resistant", "Zippered pockets"],
    colors: ["Black", "Navy", "Olive"],
    inStock: true,
  },
  301: {
    specs: ["12-cup capacity", "Programmable timer", "Auto shut-off"],
    colors: ["Black", "Silver"],
    inStock: true,
  },
  302: {
    specs: ["700W motor", "48oz container", "3 speed settings"],
    colors: ["White", "Black"],
    inStock: true,
  },
  303: {
    specs: ["7 toast settings", "Defrost function", "Removable crumb tray"],
    colors: ["Silver", "Black", "Red"],
    inStock: false,
  },
  401: {
    specs: ["Paperback", "320 pages", "Award-winning author"],
    formats: ["Paperback", "Hardcover", "E-book"],
    inStock: true,
  },
  402: {
    specs: ["Hardcover", "150 recipes", "Full-color photos"],
    formats: ["Hardcover", "E-book"],
    inStock: true,
  },
  403: {
    specs: ["Paperback", "280 pages", "Includes photos"],
    formats: ["Paperback", "Hardcover", "Audiobook"],
    inStock: true,
  },
  501: {
    specs: ['27" length', "Graphite frame", "Includes cover"],
    colors: ["Blue/White", "Black/Red"],
    inStock: true,
  },
  502: {
    specs: ["Size 7", "Synthetic leather", "Official weight"],
    colors: ["Orange", "Brown"],
    inStock: true,
  },
  503: {
    specs: ['72" x 24"', "5mm thickness", "Non-slip surface"],
    colors: ["Purple", "Blue", "Black"],
    inStock: true,
  },
};

// Chip component for displaying tags
const Chip = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.action.selected,
  marginRight: theme.spacing(1),
  fontSize: "0.875rem",
}));

// Interactive story with working panels
const InteractiveTemplate = (args) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const leftPanelContent = (
    <Box>
      <Typography
        variant="h6"
        sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}
      >
        Categories
      </Typography>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id} disablePadding>
            <ListItemButton
              selected={selectedCategory?.id === category.id}
              onClick={() => handleCategoryClick(category)}
            >
              <ListItemText primary={category.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const middlePanelContent = selectedCategory ? (
    <Box>
      <Typography
        variant="h6"
        sx={{
          p: 2,
          borderBottom: 1,
          borderColor: "divider",
          marginLeft: !selectedProduct ? "0px" : "48px",
        }}
      >
        {selectedCategory.name} Products
      </Typography>
      <List>
        {products[selectedCategory.id].map((product) => (
          <ListItem key={product.id} disablePadding>
            <ListItemButton
              selected={selectedProduct?.id === product.id}
              onClick={() => handleProductClick(product)}
            >
              <ListItemText
                primary={product.name}
                secondary={`$${product.price}`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography variant="body1" color="text.secondary">
        Select a category to view products
      </Typography>
    </Box>
  );

  const rightPanelContent = selectedProduct ? (
    <Box sx={{ p: 2, pt: 7 }}>
      <Card>
        <CardHeader
          title={selectedProduct.name}
          subheader={`$${selectedProduct.price}`}
        />
        <CardContent>
          <Box sx={{ p: 2 }}>
            <Typography variant="body1" paragraph>
              {selectedProduct.description}
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Specifications:
            </Typography>
            <List dense>
              {productDetails[selectedProduct.id].specs.map((spec, index) => (
                <ListItem key={index}>
                  <ListItemText primary={spec} />
                </ListItem>
              ))}
            </List>

            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
              Available Colors:
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {productDetails[selectedProduct.id].colors?.map(
                (color, index) => (
                  <Chip key={index} label={color} />
                )
              )}
              {productDetails[selectedProduct.id].formats?.map(
                (format, index) => (
                  <Chip key={index} label={format} />
                )
              )}
            </Box>

            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color={
                  productDetails[selectedProduct.id].inStock
                    ? "primary"
                    : "error"
                }
                fullWidth
              >
                {productDetails[selectedProduct.id].inStock
                  ? "Add to Cart"
                  : "Out of Stock"}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography variant="body1" color="text.secondary">
        Select a product to view details
      </Typography>
    </Box>
  );

  return (
    <SlidingPanelContainer
      {...args}
      leftPanelContent={leftPanelContent}
      middlePanelContent={middlePanelContent}
      rightPanelContent={rightPanelContent}
      selectedLeftItem={selectedCategory}
      selectedMiddleItem={selectedProduct}
      onLeftPanelItemClick={handleCategoryClick}
      onMiddlePanelItemClick={handleProductClick}
    />
  );
};

export const Interactive: Story = {
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example showing a product catalog with categories, products, and product details across three panels. On mobile, the third panel appears as an action sheet over the second panel.",
      },
    },
  },
};

// Mobile view example
export const MobileView: Story = {
  ...Interactive,
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
    docs: {
      description: {
        story:
          "Mobile view example showing how the panels adapt to smaller screens. On mobile, panels are displayed full-screen with the third panel appearing as an action sheet over the second panel.",
      },
    },
  },
};

// Mobile view with action sheet example
export const MobileActionSheet: Story = {
  // ...Interactive,
  args: {
    selectedLeftItem: { id: 1, name: "Home & Kitchen" },
    selectedMiddleItem: { id: 101 },
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
    docs: {
      description: {
        story:
          "Mobile view example showing the third panel as an action sheet over the second panel.",
      },
    },
  },
};

// Example with loading state
export const LoadingState: Story = {
  ...Interactive,
  args: {
    ...Interactive.args,
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Example showing the component in a loading state.",
      },
    },
  },
};

// Example with empty state
export const EmptyState: Story = {
  args: {
    leftPanelContent: (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="body1" color="text.secondary">
          No categories available
        </Typography>
      </Box>
    ),
    middlePanelContent: (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="body1" color="text.secondary">
          No items available
        </Typography>
      </Box>
    ),
    rightPanelContent: (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="body1" color="text.secondary">
          No details available
        </Typography>
      </Box>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing the component with empty state messaging in all panels.",
      },
    },
  },
};
