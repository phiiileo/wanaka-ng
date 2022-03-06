import React, { useEffect, useState } from 'react';
import { theme } from './../theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { IComponent } from '../interfaces';

const defaultContextData = {
  dark: false,
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
  const [themeState, setThemeState]: [any, any] = useState({
    dark: false,
    hasThemeMounted: false,
  });
  useEffect(() => {
    let dark = false;
    const lsDark = !!localStorage.getItem('dark');
    if (lsDark) {
      dark = lsDark;
    }
    setThemeState((v: any) => ({ ...v, dark, hasThemeMounted: true }));
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = (props: IComponent) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  // const toggle = () => {
  //     const dark = !themeState.dark;
  //     localStorage.setItem('dark', JSON.stringify(dark));
  //     setThemeState((v: any) => ({ ...v, dark }));
  //     return null;
  // };
  const computedTheme = themeState.dark ? theme('dark') : theme('light');

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: false,
          // toggle,
        }}
      >
        {props.children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
