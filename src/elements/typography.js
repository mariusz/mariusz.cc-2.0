import styled from 'styled-components/primitives'
import theme from '../config/theme'

const Typography = {
  h1: styled.Text`
    display: block;
    font-family: ${theme.typography.font.family};
    font-size: ${theme.typography.font.sizes.h1};
  `,
  p: styled.Text`
    display: block;
    font-family: ${theme.typography.font.family};
    font-size: ${theme.typography.font.sizes.p}; 
  `
};

export default Typography;