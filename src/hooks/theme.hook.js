import { createMuiTheme } from '@material-ui/core/styles'

import { Colors } from 'common/colors'
import { Fonts, FontSizes } from 'common/fonts'
import { pxToRem } from 'utils/styles'

function useCustomTheme() {
  const {
    body1,
    body2,
    button,
    caption,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    overline,
    subtitle1,
    subtitle2,
  } = FontSizes

  const currentTheme = {
    spacing: 4,
    palette: {
      background: {
        default: Colors.mercury,
      },
      primary: {
        dark: Colors.dustyGray,
        light: Colors.stormGray,
        main: Colors.regalBlue,
      },
      text: {
        disabled: Colors.nobel,
        primary: Colors.tundora,
        secondary: Colors.black,
      },
      common: {
        black: Colors.black,
      },
      type: 'light',
    },
    typography: {
      fontFamily: Fonts.rubik,
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'initial',
        },
      },
      MuiTableCell: {
        root: {
          padding: `${pxToRem(16)} ${pxToRem(10)}`,
        },
        body: {
          color: Colors.gray,
        },
      },
      MuiTypography: {
        gutterBottom: {
          marginBottom: pxToRem(16),
        },
        h1: {
          color: Colors.black,
          fontSize: pxToRem(h1),
          fontWeight: 'normal',
          letterSpacing: 0,
          lineHeight: 1.2,
        },
        h2: {
          color: Colors.black,
          fontSize: pxToRem(h2),
          fontWeight: 'normal',
          letterSpacing: '0.25px',
        },
        h3: {
          color: Colors.black,
          fontSize: pxToRem(h3),
          fontWeight: 'normal',
          letterSpacing: 0,
          lineHeight: 1.17,
        },
        h4: {
          color: Colors.black,
          fontSize: pxToRem(h4),
          fontWeight: 'normal',
          lineHeight: 1.2,
        },
        h5: {
          color: Colors.black,
          fontSize: pxToRem(h5),
          fontWeight: 'normal',
          lineHeight: 1.2,
        },
        h6: {
          color: Colors.black,
          fontSize: pxToRem(h6),
          fontWeight: 'normal',
          lineHeight: 1.2,
        },
        subtitle1: {
          fontSize: pxToRem(subtitle1),
          fontWeight: 'normal',
        },
        subtitle2: {
          fontSize: pxToRem(subtitle2),
          fontWeight: 500,
        },
        body1: {
          fontSize: pxToRem(body1),
          fontWeight: 'normal',
          lineHeight: 1.8,
        },
        body2: {
          fontSize: pxToRem(body2),
          fontWeight: 'normal',
        },
        button: {
          boxShadow: 'none',
          fontSize: pxToRem(button),
          fontWeight: 500,
          textDecoration: 'none',
        },
        caption: {
          color: Colors.black,
          fontSize: pxToRem(caption),
          fontWeight: 'normal',
          lineHeight: pxToRem(16),
        },
        overline: {
          fontSize: pxToRem(overline),
          fontWeight: 500,
        },
      },
    },
  }

  const theme = createMuiTheme(currentTheme)

  return {
    theme,
  }
}

export default useCustomTheme
