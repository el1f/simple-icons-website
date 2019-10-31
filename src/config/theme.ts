import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createTypography' {}

const capitalize = (): 'capitalize' => 'capitalize';

const baseTheme = {
    palette: {
        primary: {
            main: '#111111',
        },
        secondary: {
            main: '#000000',
        },
        bacgkround: {
            main: '#F3F3F3',
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'Poppins',
        h6: {
            fontSize: '1rem',
            fontWeight: 700,
        },
        body1: {
            fontFamily: 'Work Sans',
        },
        button: {
            textTransform: capitalize(),
            fontSize: '.85rem',
            fontWeight: 700,
        },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 12,
            },
        },
    },
};

const xs = {
    ...baseTheme,
};
const sm = {
    ...xs,
};
const md = {
    ...sm,
};
const lg = {
    ...md,
};
const xl = {
    ...lg,
};

const themes = {
    xs,
    sm,
    md,
    lg,
    xl,
};

function getTheme(breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl') {
    const selectTheme = (bp: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => themes[bp];

    return createMuiTheme(selectTheme(breakpoint));
}

export default getTheme;
