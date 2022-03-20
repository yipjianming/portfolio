import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (isDarkTheme) => (
    isDarkTheme ?
        darkTheme
        : lightTheme
);

const darkTheme = {
    mui: createTheme({
        palette: {
            "mode": "dark",
            primary: {
                main: 'rgb(230, 230, 230)',
            },

            background: {
                paper: 'rgb(20, 20, 20)',
            },

        }

    }),
    global: {
        'input:-webkit-autofill': {
            WebkitTransitionDelay: '9999s',
            transitionDelay: '9999s'
        },
        'body': {
            overflowY: 'overlay'
        },
        'lineClamp': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            lineClamp: 4,
            WebkitBoxOrient: 'vertical'
        }
    }
}

const lightTheme = {
    mui: createTheme({
        palette: {
            "mode": "light",
            primary: {
                main: '#FEFBF5',
            },

            background: {
                default: '#FFF',
                paper: '#FEFBF5'
            },
        },

    }),
    global: {
        'input:-webkit-autofill': {
            WebkitTransitionDelay: '9999s',
            transitionDelay: '9999s'
        },
        'body': {
            overflowY: 'overlay'
        },
        '.lineClamp': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            lineClamp: 4,
            WebkitBoxOrient: 'vertical'
        }
    }
}
