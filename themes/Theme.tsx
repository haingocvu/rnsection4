import {createContext} from 'react';
import {ITheme} from '../models/ThemeConfig';

export const themeConfig: ITheme = {
  color: {
    primary500: '',
    primary600: '',
    primary700: '',
    secondary500: '#ddb52f',
    secondary600: '',
  },
};

const themeContext = createContext<ITheme>(themeConfig);

const ThemProvider = themeContext.Provider;

export {ThemProvider, themeContext};
