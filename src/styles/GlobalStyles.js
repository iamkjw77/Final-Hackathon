import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const a11yHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
  clip: rect(0 0 0 0);
  clip: rect(0, 0, 0, 0);
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

export default GlobalStyles;
