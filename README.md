# Sliding Panel Container

A responsive React component that provides a flexible three-panel layout with smooth transitions and mobile-first design. Built with Material-UI and TypeScript.

## Features

- 🖥️ **Responsive Design**: Adapts to both desktop and mobile views
- 📱 **Mobile-First**: Optimized for touch interactions on mobile devices
- 🎯 **Three-Panel Layout**: Supports left, middle, and right panels
- 🔄 **Smooth Transitions**: Animated panel transitions
- ♿ **Accessibility**: Built with accessibility in mind
- 📦 **TypeScript Support**: Full TypeScript support with proper type definitions
- 🎨 **Material-UI Integration**: Seamless integration with Material-UI components
- 🧪 **Test Coverage**: Comprehensive test suite
- 📚 **Storybook Documentation**: Interactive examples and documentation

## Installation

```bash
npm install sliding-panel-container
# or
yarn add sliding-panel-container
```

## Usage

```tsx
import { SlidingPanelContainer } from "sliding-panel-container";

function MyComponent() {
  return (
    <SlidingPanelContainer
      leftPanelContent={<YourLeftPanel />}
      middlePanelContent={<YourMiddlePanel />}
      rightPanelContent={<YourRightPanel />}
      onLeftPanelItemClick={handleLeftItemClick}
      onMiddlePanelItemClick={handleMiddleItemClick}
      selectedLeftItem={selectedLeft}
      selectedMiddleItem={selectedMiddle}
    />
  );
}
```

## Props

| Prop                     | Type                  | Default             | Description                                |
| ------------------------ | --------------------- | ------------------- | ------------------------------------------ |
| `leftPanelContent`       | `React.ReactNode`     | Required            | Content for the left panel                 |
| `middlePanelContent`     | `React.ReactNode`     | Required            | Content for the middle panel               |
| `rightPanelContent`      | `React.ReactNode`     | Optional            | Content for the right panel                |
| `onLeftPanelItemClick`   | `(item: any) => void` | Optional            | Callback when left panel item is clicked   |
| `onMiddlePanelItemClick` | `(item: any) => void` | Optional            | Callback when middle panel item is clicked |
| `selectedLeftItem`       | `any`                 | Optional            | Currently selected left panel item         |
| `selectedMiddleItem`     | `any`                 | Optional            | Currently selected middle panel item       |
| `leftPanelWidth`         | `number`              | 320                 | Width of the left panel in pixels          |
| `rightPanelWidth`        | `number`              | 320                 | Width of the right panel in pixels         |
| `disabled`               | `boolean`             | false               | Disables all interactions                  |
| `isLoading`              | `boolean`             | false               | Shows loading state                        |
| `hasError`               | `boolean`             | false               | Shows error state                          |
| `errorMessage`           | `string`              | "An error occurred" | Custom error message                       |
| `sx`                     | `object`              | {}                  | Custom styles for the container            |
| `panelSx`                | `object`              | {}                  | Custom styles for the panels               |

## Mobile Behavior

On mobile devices, the component transforms into a full-screen experience:

- Left panel becomes the initial view
- Middle panel slides in from the right
- Right panel appears as a bottom sheet/drawer

## Desktop Behavior

On desktop:

- All panels are visible simultaneously
- Panels slide horizontally
- Smooth transitions between states
- Responsive width adjustments

## Examples

### Basic Usage

```tsx
<SlidingPanelContainer
  leftPanelContent={<CategoriesList />}
  middlePanelContent={<ProductsList />}
  rightPanelContent={<ProductDetails />}
/>
```

### With Selection Handling

```tsx
const [selectedCategory, setSelectedCategory] = useState(null);
const [selectedProduct, setSelectedProduct] = useState(null);

<SlidingPanelContainer
  leftPanelContent={<CategoriesList />}
  middlePanelContent={<ProductsList />}
  rightPanelContent={<ProductDetails />}
  selectedLeftItem={selectedCategory}
  selectedMiddleItem={selectedProduct}
  onLeftPanelItemClick={setSelectedCategory}
  onMiddlePanelItemClick={setSelectedProduct}
/>;
```

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Run tests
yarn test

# Start Storybook
yarn storybook
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Your Name]

## Dependencies

- React 19.1.0
- Material-UI 6.1.1
- TypeScript 4.9.5
- Heroicons 2.1.5

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
