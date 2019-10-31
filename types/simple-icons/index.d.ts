declare module 'simple-icons' {
    export interface SimpleIcon {
        title: string;
        slug: string;
        hex: string;
        source: string;
        svg: string;
        path: string;
    }

    function getSimpleIcon(icon: string): SimpleIcon;

    export interface SimpleIconsProvider {
        get: typeof getSimpleIcon;
    }

    const SimpleIcons: SimpleIconsProvider;

    export default SimpleIcons;
}
