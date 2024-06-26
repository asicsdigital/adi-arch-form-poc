var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { ADD_SHEET, ADD_SVG, SET_THEME, SET_TOKENS, UPDATE_CSS } from '../types/index';
export var fontFamily1 = '"Roboto", "Helvetica", Helvetica, Arial, sans-serif';
export var fontWeights = {
    bold: 700,
    light: 300,
    medium: 500,
    regular: 400,
    semibold: 600
};
export var initialState = {
    css: {},
    sheets: {},
    svgs: {},
    theme: {
        breakpoints: {
            keys: ['xs', 'sm', 'md', 'lg', 'xl'],
            values: {
                xs: 0,
                sm: 600,
                md: 840,
                lg: 1075,
                xl: 1441
            }
        },
        components: {},
        direction: 'ltr',
        initial: true,
        media: {
            baseUrl: '',
            images: {
                variants: {
                    icon: {
                        width: 120
                    },
                    sm: {
                        width: 240
                    },
                    md: {
                        width: 380
                    },
                    lg: {
                        width: 680
                    },
                    xl: {
                        width: 806
                    }
                }
            }
        },
        overrides: {},
        palette: {
            action: {
                activatedOpacity: 0.12,
                active: 'rgba(0, 0, 0, 0.54)',
                disabled: 'rgba(0, 0, 0, 0.26)',
                disabledOpacity: 0.08,
                disabledBackground: 'rgba(0, 0, 0, 0.12)',
                focus: 'rgba(0, 0, 0, 0.12)',
                focusOpacity: 0.12,
                hover: 'rgba(0, 0, 0, 0.04)',
                hoverOpacity: 0.04,
                selected: 'rgba(0, 0, 0, 0.08)',
                selectedOpacity: 0.08
            },
            background: {
                default: '#fff',
                paper: '#fff'
            },
            common: {
                black: '#000',
                white: '#fff'
            },
            contrastThreshold: 3,
            divider: 'rgba(0, 0, 0, 0.12)',
            error: {
                contrastText: '#fff',
                light: '#F88078',
                main: '#F44336',
                dark: '#E31B0C'
            },
            grey: {
                '50': '#fcfcfc',
                '100': '#f8f7fa',
                '200': 'f5f5f5',
                '300': '#eeedf2',
                '400': 'e8e8e8',
                '500': '#dddce5',
                '600': '#c7c6cf',
                '700': '#888799',
                '800': '#3f3e4d',
                '900': '#2c2b36',
                A100: '#d5d5d5',
                A200: '#4c4b4b',
                A400: '#383737',
                A700: '#242323'
            },
            info: {
                contrastText: '#fff',
                light: '#64B6F7',
                main: '#448FD7',
                dark: '#0B79D0'
            },
            mode: 'light',
            primary: {
                contrastText: '#fff',
                light: '#F9B04E',
                main: '#F28132',
                dark: '#E3660E'
            },
            secondary: {
                contrastText: '#fff',
                light: '#4D4593',
                main: '#201678',
                dark: '#1A1260'
            },
            success: {
                contrastText: '#fff',
                light: '#7BC67E',
                main: '#50A54D',
                dark: '#3B873E'
            },
            text: {
                disabled: 'rgba(0, 0, 0, 0.38)',
                primary: 'rgba(0, 0, 0, 0.87)',
                secondary: 'rgba(0, 0, 0, 0.67)'
            },
            tonalOffset: 0.2,
            warning: {
                contrastText: 'rgba(0, 0, 0, 0.87)',
                light: '#FFB547',
                main: '#FF9800',
                dark: '#C77700'
            }
        },
        shadows: ['none'],
        shape: {
            borderRadius: 4
        },
        spacing: {
            unit: 8
        },
        transitions: {
            duration: {
                complex: 375,
                enteringScreen: 225,
                leavingScreen: 195,
                short: 250,
                shorter: 200,
                shortest: 150,
                standard: 300
            },
            easing: {
                easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
            }
        },
        typography: {
            htmlFontSize: 16,
            fontFamily: fontFamily1,
            fontSize: 16,
            fontWeightBold: fontWeights.bold,
            fontWeightLight: fontWeights.light,
            fontWeightMedium: fontWeights.medium,
            fontWeightRegular: fontWeights.regular,
            variants: {
                body1: {
                    fontSize: '1rem',
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: 1.7
                },
                body2: {
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: 1.7
                },
                button: {
                    fontFamily: fontFamily1,
                    fontSize: '1rem',
                    fontWeight: 800,
                    letterSpacing: '0.02857em',
                    lineHeight: 1.75
                },
                caption: {
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    letterSpacing: '0.03333em',
                    lineHeight: 1.66
                },
                h1: {
                    fontFamily: fontFamily1,
                    fontSize: '2rem',
                    fontWeight: 800,
                    letterSpacing: 0,
                    lineHeight: 1.25
                },
                h2: {
                    fontFamily: fontFamily1,
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    letterSpacing: 0,
                    lineHeight: 1.4
                },
                h3: {
                    fontFamily: fontFamily1,
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    letterSpacing: 0,
                    lineHeight: 1.5
                },
                h4: {
                    fontFamily: fontFamily1,
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: 0.25,
                    lineHeight: 1.17
                },
                h5: {
                    fontFamily: fontFamily1,
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: 0,
                    lineHeight: 1.33
                },
                h6: {
                    fontFamily: fontFamily1,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: 0,
                    lineHeight: 1.3
                },
                inherit: {
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    letterSpacing: 'inherit',
                    lineHeight: 'inherit',
                    textDecoration: 'inherit'
                },
                overline: {
                    fontSize: '1rem',
                    fontWeight: 400,
                    letterSpacing: '0.5em',
                    lineHeight: 2.5,
                    textTransform: 'uppercase'
                },
                srOnly: {
                    height: 1,
                    overflow: 'hidden',
                    position: 'absolute',
                    width: 1
                },
                subtitle1: {
                    fontSize: '1.313rem',
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: 1.36
                },
                subtitle2: {
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: 3.6
                }
            }
        },
        zIndex: {
            appBar: 1100,
            drawer: 1200,
            modal: 1400,
            scrim: 1300,
            snackbar: 1500,
            tooltip: 1600
        }
    },
    tokens: 'core'
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_SHEET:
            var sheets = __assign(__assign({}, state.sheets), action.sheet);
            return __assign(__assign({}, state), { sheets: sheets });
        case ADD_SVG:
            var svgs = __assign(__assign({}, state.svgs), action.svg);
            return __assign(__assign({}, state), { svgs: svgs });
        case SET_THEME:
            return __assign(__assign({}, state), { theme: action.theme });
        case SET_TOKENS:
            return __assign(__assign({}, state), { tokens: action.tokens });
        case UPDATE_CSS:
            var css = __assign(__assign({}, state.css), action.css);
            return __assign(__assign({}, state), { css: css });
        default:
            return state;
    }
}
