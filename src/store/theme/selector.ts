import { useAppSelector } from 'store';

export const getTheme = (): 'dark' | 'light' => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useAppSelector((state) => state.theme);

  return theme;
};
