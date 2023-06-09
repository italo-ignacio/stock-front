// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import { RadioButtonCheckedTwoTone } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors } from 'presentation/style/palette';
import { outlinedInputClasses } from '@mui/material';
import { useTheme } from 'store/theme/selector';
import type { FC, ReactNode } from 'react';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}
declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    isSelect: true;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}
declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

interface Children {
  children: ReactNode;
}

// eslint-disable-next-line max-lines-per-function
export const MaterialUIProvider: FC<Children> = ({ children }: Children) => {
  const LightTheme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained'
        }
      },
      MuiRadio: {
        defaultProps: {
          checkedIcon: <RadioButtonCheckedTwoTone />,
          color: 'primary'
        },
        variants: [
          {
            props: { color: 'primary' },
            style: {
              svg: {
                circle: {
                  // eslint-disable-next-line id-length
                  r: 6.5
                }
              }
            }
          }
        ]
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& input:-webkit-autofill': {
              '-webkit-box-shadow': '0 0 0 1000px transparent inset !important',
              transition: 'background-color 10000s ease-in-out 0s'
            }
          }
        },
        variants: [
          {
            props: { color: 'isSelect' },
            style: {
              '.MuiButtonBase-root': {
                background: colors.primary,
                svg: {
                  color: colors.secondary
                }
              },
              '.MuiInputBase-root': {
                background: 'transparent !important',
                borderBottom: '0px !important',
                paddingRight: '8px !important',
                paddingTop: '12px'
              },
              '.MuiInputBase-root:before': {
                borderBottom: '0px !important'
              },
              input: {
                display: 'none'
              },
              paddingLeft: '0 !important'
            }
          }
        ]
      }
    },
    palette: {
      divider: colors.primary,
      error: { main: colors.red },
      grey: colors.gray,
      info: { main: colors.info },
      primary: { main: colors.primary },
      secondary: { main: colors.secondary },
      success: { main: colors.success },
      warning: { main: colors.warning }
    },
    typography: {
      fontFamily: 'Roboto'
    }
  });

  const DarkTheme = createTheme({
    components: {
      MuiAutocomplete: {
        styleOverrides: {
          noOptions: {
            backgroundColor: colors.gray[700],
            color: 'white !important'
          }
        }
      },
      MuiButton: {
        defaultProps: {
          variant: 'contained'
        },
        styleOverrides: {
          containedPrimary: {
            ':hover': {
              backgroundColor: colors.gray[700]
            },
            backgroundColor: colors.gray[700]
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)'
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)'
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)'
            },
            color: 'white'
          }
        }
      },
      MuiRadio: {
        defaultProps: {
          checkedIcon: <RadioButtonCheckedTwoTone />,
          color: 'primary'
        },
        variants: [
          {
            props: { color: 'primary' },
            style: {
              color: 'white !important',
              svg: {
                circle: {
                  // eslint-disable-next-line id-length
                  r: 6.5
                }
              }
            }
          }
        ]
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& input:-webkit-autofill': {
              '-webkit-box-shadow': `0 0 0 1000px ${colors.gray[700]} inset !important`,
              '-webkit-text-fill-color': 'var(--TextField-brandBorderFocusedColor) !important',
              transition: 'background-color 10000s ease-in-out 0s'
            },
            '& label': {
              color: 'var(--TextField-brandBorderFocusedColor)',
              zIndex: '100'
            },
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
              zIndex: '100'
            },
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderFocusedColor': '#eeeeee',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '.MuiAutocomplete-endAdornment': {
              '.MuiButtonBase-root': {
                color: 'white !important'
              }
            },
            backgroundColor: colors.gray[700],
            borderRadius: '6px',
            color: 'red'
          }
        },
        variants: [
          {
            props: { color: 'isSelect' },
            style: {
              '& label': {
                color: 'white !important',
                zIndex: '100'
              },
              '& label.Mui-focused': {
                color: 'white !important',
                zIndex: '100'
              },
              '.MuiButtonBase-root': {
                background: colors.gray[700],
                svg: {
                  color: colors.gray[700]
                }
              },
              '.MuiInputBase-root': {
                background: 'transparent !important',
                borderBottom: '0px !important',
                paddingRight: '8px !important',
                paddingTop: '12px'
              },
              '.MuiInputBase-root:before': {
                borderBottom: '0px !important'
              },
              background: 'transparent !important',
              color: 'white !important',
              input: {
                display: 'none'
              },
              paddingLeft: '0 !important'
            }
          }
        ]
      }
    },
    palette: {
      divider: colors.primary,
      error: { main: colors.red },
      grey: colors.gray,
      info: { main: colors.info },
      primary: { main: colors.primary },
      secondary: { main: colors.secondary },
      success: { main: colors.success },
      warning: { main: colors.warning }
    },
    typography: {
      fontFamily: 'Roboto'
    }
  });

  return (
    <ThemeProvider theme={useTheme() === 'dark' ? DarkTheme : LightTheme}>{children}</ThemeProvider>
  );
};
