import createTheme from 'styled-components-theme'
import colors from './colors';

// Now to use this just import theme and do ${theme.color} you want to use
const theme = createTheme(...Object.keys(colors));
export default theme;