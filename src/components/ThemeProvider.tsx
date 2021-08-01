import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { GridThemeProvider, BaseCSS } from 'styled-bootstrap-grid';
import GlobalStyles from './GlobalStyles';
import { theme } from './ThemeConfig';
import { Fragment } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

type GridTheme = { grid: any };

const themeProvider = theme as GridTheme;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <StyledComponentsProvider theme={themeProvider}>
    <GridThemeProvider gridTheme={themeProvider.grid}>
      <Fragment>
        <BaseCSS />
        <GlobalStyles />
        {children}
      </Fragment>
    </GridThemeProvider>
  </StyledComponentsProvider>
);

export default ThemeProvider;
