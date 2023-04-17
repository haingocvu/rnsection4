import {useContext} from 'react';
import {ITheme} from '../models/ThemeConfig';
import {themeContext} from '../themes/Theme';

export const useTheme = () => {
  const themeConfig = useContext<ITheme>(themeContext);
  return themeConfig;
};
