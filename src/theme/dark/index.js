import { createMuiTheme } from '@material-ui/core/styles'
/**
 * Palette
 */
const palette = {
  type: 'dark',
  primary: {
    main: '#212121',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#38A1F3',
    contrastText: '#000000'
  }
}
/**
 * Theme Name
 */
const themeName = 'Accern Dark'
/**
 * Typography
 */
const typography = {
  useNextVariants: true
}
/**
 * Theme
 */
const themeDark = createMuiTheme(
  {
    palette,
    shape: {
      borderRadius: 0
    },
    themeName,
    typography
  }
)

const { breakpoints, typography: { pxToRem } } = themeDark

/**
 * Overrides
 */
const overrides = Object.assign({}, {
  MuiTypography: {
    'h1': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(48)
      }
    },
    'h2': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(30),
        lineHeight: '2rem'
      }
    },
    'h3': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(24),
        lineHeight: '2rem'
      }
    },
    'h4': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(17)
      }
    },
    'h5': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(16),
        lineHeight: '1.7em'
      }
    },
    'h6': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(14)
      }
    },
    'subtitle1': {
      letterSpacing: `4px`,
      [breakpoints.down('md')]: {
        fontSize: pxToRem(16)
      }
    },
    'subtitle2': {
      letterSpacing: `4px`,
      [breakpoints.down('md')]: {
        fontSize: pxToRem(14)
      }
    },
    'body1': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(16),
        lineHeight: '1.7em'
      }
    },
    'body2': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(14)
      }
    },
    'caption': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(12)
      }
    },
    'button': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(14)
      }
    },
    'overline': {
      [breakpoints.down('md')]: {
        fontSize: pxToRem(10)
      }
    }
  }
}
)

const theme = {
  ...themeDark,
  overrides
}

export default theme
