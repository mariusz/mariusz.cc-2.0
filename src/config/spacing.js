import measure from './measure'

// Spacing array
const spacing = {
  regular: measure,
  large: 2 * measure,
  xl: 3 * measure,
  xxl: 4 * measure
};

const theme = {
  spacing: {
    regular: `${spacing.regular}px`,
    large: `${spacing.large}px`,
    xl: `${spacing.xl}px`,
    xxl: `${spacing.xxl}px`
  }
};

export default theme;
