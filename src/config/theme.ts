import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createTypography' {}

const baseTheme = {
    palette: {
        primary: {
            main: '#111111',
        },
        secondary: {
            main: '#000000',
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'Poppins',
        body1: {
            fontFamily: 'Work Sans',
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
