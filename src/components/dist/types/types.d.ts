import * as CSS from 'csstype';
import React from 'react';
import { Classes as ClassesJSS, Styles as StylesJSS, StyleSheet as StyleSheetJSS, StyleSheetFactoryOptions as StyleSheetFactoryOptionsJSS } from 'jss';
import { Control } from 'react-hook-form';
import { Overrides } from './overrides';
type Required<T> = {
    [P in keyof T]-?: T[P];
};
type JSSNormalCssProperties = CSS.Properties<number | string>;
type JSSFontface = CSS.AtRule.FontFace & {
    fallbacks?: CSS.AtRule.FontFace[];
};
export interface BaseCSSProperties extends JSSNormalCssProperties {
    '@font-face'?: JSSFontface | JSSFontface[];
}
export interface CSSProperties extends BaseCSSProperties {
    [key: string]: unknown | CSSProperties;
}
export type StyleRules<ClassKey extends string = string> = Record<ClassKey, CSSProperties>;
export type StyleSheetFactoryOptions = StyleSheetFactoryOptionsJSS;
export type StyleSheet = StyleSheetJSS;
export type Styles = StylesJSS | CSSProperties;
export type StyleOverrides = Record<string, any>;
export type Classes = ClassesJSS;
type ClassNameProp = string;
export interface GroundProps {
    children?: React.ReactNode;
    classes?: Classes;
    className?: ClassNameProp;
}
/**
 * Theme types
 */
/**
 * Breakpoints
 */
export type OverridableStringUnion<T extends string | number, U = {}> = GenerateStringUnion<Overwrite<Record<T, true>, U>>;
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;
type GenerateStringUnion<T> = Extract<{
    [Key in keyof T]: true extends T[Key] ? Key : never;
}[keyof T], string>;
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
export interface BreakpointOverrides {
}
export type Breakpoint = OverridableStringUnion<'xs' | 'sm' | 'md' | 'lg' | 'xl', BreakpointOverrides>;
export type BreakpointValues = {
    [key in Breakpoint]: number;
};
export interface Breakpoints {
    keys: Breakpoint[];
    values: BreakpointValues;
}
export interface BreakpointsOptions {
    keys?: Breakpoint[];
    values?: Partial<BreakpointValues>;
}
/**
 * Direction
 */
export type Direction = 'ltr' | 'rtl';
/**
 * Palette
 */
export type ColorPartial = Partial<Color>;
export interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
}
export interface TypeAction {
    activatedOpacity: number;
    active: string;
    disabled: string;
    disabledOpacity: number;
    disabledBackground: string;
    focus: string;
    focusOpacity: number;
    hover: string;
    hoverOpacity: number;
    selected: string;
    selectedOpacity: number;
}
export interface TypeBackground {
    default: string;
    paper: string;
}
export type ImageVariant = string;
export type EnableAndDisable = 'upscale';
export type Fit = 'bounds' | 'cover' | 'crop' | '';
export type Format = 'bjpg' | 'gif' | 'jpg' | 'pjpg' | 'png' | 'png8' | 'png24' | 'png32' | 'webp' | 'webpll' | 'webply';
export type Optimize = 'low' | 'medium' | 'high';
export type ResizeFilter = 'bilinear' | 'bicubic' | 'cubic' | 'lanczos' | 'lanczos2' | 'lanczos3' | 'linear' | 'nearest';
export interface ImageVariantValues {
    bgColor?: string;
    blur?: string | number;
    brightness?: string | number;
    canvas?: string;
    contrast?: string | number;
    crop?: string;
    disable?: EnableAndDisable;
    dpr?: string | number;
    enable?: EnableAndDisable;
    fit?: Fit;
    format?: Format;
    height?: string | number;
    optimize?: Optimize;
    orient?: string | number;
    pad?: string | number;
    quality?: string | number;
    resizeFilter?: ResizeFilter;
    saturation?: string | number;
    sharpen?: string;
    trim?: string | number;
    width?: string | number;
}
export type ImageVariants = {
    [key in ImageVariant]: ImageVariantValues;
};
export interface Images {
    variants: ImageVariants;
}
export type ImagesOptions = Partial<Images>;
export interface Media {
    baseUrl: string;
    images: Images;
}
export interface MediaOptions {
    baseUrl?: string;
    images?: ImagesOptions;
}
export type TypeDivider = string;
export type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial;
export interface SimplePaletteColorOptions {
    light?: string;
    main?: string;
    dark?: string;
    contrastText?: string;
}
export interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}
export type PaletteMode = 'light' | 'dark';
export interface TypeObject {
    text: TypeText;
    action: TypeAction;
    divider: TypeDivider;
    background: TypeBackground;
}
export type PaletteColorRole = 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning';
export type PaletteColorRoles = {
    [key in PaletteColorRole]: PaletteColor;
};
export interface Palette extends PaletteColorRoles {
    action: TypeAction;
    background: TypeBackground;
    common: CommonColors;
    contrastThreshold: number;
    divider: TypeDivider;
    grey: Color;
    mode: PaletteMode;
    text: TypeText;
    tonalOffset: number;
}
export type PartialTypeObject = {
    [P in keyof TypeObject]?: Partial<TypeObject[P]>;
};
export interface PaletteOptions {
    action?: Partial<TypeAction>;
    background?: Partial<TypeBackground>;
    common?: Partial<CommonColors>;
    contrastThreshold?: number;
    divider?: string;
    error?: PaletteColorOptions;
    grey?: ColorPartial;
    info?: PaletteColorOptions;
    mode?: PaletteMode;
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    success?: PaletteColorOptions;
    text?: Partial<TypeText>;
    tonalOffset?: number;
    warning?: PaletteColorOptions;
}
/**
 * Shadows
 */
export type MuiShadows = [
    'none',
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
];
/**
 * Shape
 */
export interface Shape {
    borderRadius: number;
}
/**
 * Spacing
 */
export interface Spacing {
    unit: number;
}
export interface SpacingOptions {
    unit?: number;
}
/**
 * Transitions
 */
export interface Easing {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    sharp: string;
}
export interface Duration {
    shortest: number;
    shorter: number;
    short: number;
    standard: number;
    complex: number;
    enteringScreen: number;
    leavingScreen: number;
}
export interface Transitions {
    duration: Duration;
    easing: Easing;
}
export interface TransitionsOptions {
    easing?: Partial<Easing>;
    duration?: Partial<Duration>;
}
/**
 * Typography
 */
export type TypographyVariants = 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'srOnly' | 'subtitle1' | 'subtitle2';
export interface FontStyle extends Required<{
    fontFamily: CSSProperties['fontFamily'];
    fontSize: number;
    fontWeightLight: CSSProperties['fontWeight'];
    fontWeightRegular: CSSProperties['fontWeight'];
    fontWeightMedium: CSSProperties['fontWeight'];
    fontWeightBold: CSSProperties['fontWeight'];
    htmlFontSize: number;
}> {
}
export interface TypographyVariantStyle extends Partial<Record<TypographyVariants, CSSProperties>> {
    [k: string]: unknown | Partial<Record<TypographyVariants, CSSProperties>>;
}
export interface TypographyTs extends FontStyle {
    variants: TypographyVariantStyle;
}
export interface TypographyOptions extends Partial<Record<TypographyVariants, CSSProperties> & FontStyle> {
    pxToRem?: (size: number) => string;
    variants?: TypographyVariantStyle;
}
export interface ZIndex {
    appBar: number;
    drawer: number;
    modal: number;
    scrim: number;
    snackbar: number;
    tooltip: number;
}
export interface ZIndexOptions {
    appBar?: number;
    drawer?: number;
    modal?: number;
    scrim?: number;
    snackbar?: number;
    tooltip?: number;
}
/**
 * theme template
 */
export interface Theme {
    breakpoints: Breakpoints;
    components: Record<string, any>;
    direction: Direction;
    initial: boolean;
    media: Media;
    overrides: Overrides;
    palette: Palette;
    shadows: string[];
    shape: Shape;
    spacing: Spacing;
    transitions: Transitions;
    typography: TypographyTs;
    zIndex: ZIndex;
}
export interface ThemeOptions {
    breakpoints?: BreakpointsOptions;
    components?: Record<string, any>;
    direction?: Direction;
    initial?: boolean;
    media?: MediaOptions;
    overrides?: Overrides;
    palette?: PaletteOptions;
    shadows?: string[];
    shape?: Shape;
    spacing?: SpacingOptions;
    transitions?: TransitionsOptions;
    typography?: TypographyOptions;
    zIndex?: ZIndexOptions;
}
export interface MuiThemeOptions extends Omit<ThemeOptions, 'shadows' | 'spacing'> {
    shadows?: MuiShadows;
    spacing?: number;
}
export interface Color {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
}
export interface CommonColors {
    black: string;
    white: string;
}
export interface ColorObject {
    type: string;
    values: Array<number | string>;
}
export interface ModeColorOptions {
    darkenBy?: number;
    lightenBy?: number;
}
export type RenderedCSS = {
    [k: string]: string;
};
/**
 * Forms
 */
export type LabelPlacement = 'bottom' | 'end' | 'start' | 'top';
export declare const InputControls: {
    readonly Checkbox: "checkbox";
    readonly CheckboxGroup: "checkboxGroup";
    readonly Radio: "radio";
    readonly RadioGroup: "radioGroup";
    readonly Switch: "switch";
    readonly Select: "select";
    readonly TextField: "textField";
};
export type InputControlKeys = (typeof InputControls)[keyof typeof InputControls];
export type InputControlOptions = CheckboxOptions | CheckboxGroupOptions | RadioOptions | RadioGroupOptions | SelectOptions | SwitchOptions | TextFieldOptions;
export interface FormControlBaseOptions {
    checked?: boolean;
    checkedIcon?: React.ReactNode;
    color?: PaletteColorRole;
    disabled?: boolean;
    icon?: React.ReactNode;
    label?: string;
    labelPlacement?: LabelPlacement;
    name?: string;
    required?: boolean;
    size?: 'small' | 'medium';
    value?: string;
}
export interface CheckboxOptions extends FormControlBaseOptions {
}
export interface CheckboxGroupOptions {
    defaultValue?: number | string;
    choices: CheckboxOptions | CheckboxOptions[];
    label?: string;
    labelId?: string;
    name?: string;
}
export interface RadioOptions extends FormControlBaseOptions {
    name?: string;
}
export interface RadioGroupOptions {
    defaultValue?: number | string;
    choices: RadioOptions | RadioOptions[];
    label?: string;
    labelId?: string;
    name?: string;
}
export interface ChoicesOptions {
    id?: number | string;
    label?: string;
    name?: string;
    value?: string;
}
export interface SelectOptions {
    autoWidth?: boolean;
    choices: ChoicesOptions | ChoicesOptions[];
    defaultOpen?: boolean;
    displayEmpty?: boolean;
    fullWidth?: boolean;
    id?: string;
    label?: string;
    labelId?: string;
    multiple?: boolean;
    name?: string;
    native?: boolean;
    onChange?: never;
    onClose?: never;
    onOpen?: never;
    open?: boolean;
    renderValue?: never;
    value?: number | string;
    variant?: 'filled' | 'outlined' | 'standard';
}
export interface SwitchOptions extends FormControlBaseOptions {
    edge?: 'end' | 'start' | false;
}
export type TextFieldTypes = 'date' | 'email' | 'file' | 'password' | 'search' | 'tel' | 'text' | 'url';
export interface TextFieldOptions {
    autoFocus?: boolean;
    color?: PaletteColorRole;
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    label?: string;
    margin?: 'dense' | 'none';
    maxRows?: number | string;
    minRows?: number | string;
    multiline?: boolean;
    name?: string;
    placeholder?: string;
    required?: boolean;
    rows?: number | string;
    size?: 'medium' | 'small';
    type?: TextFieldTypes;
    value?: string;
    variant?: 'filled' | 'outlined' | 'standard';
}
export interface FormInput {
    control: InputControlKeys;
    key?: string;
    options?: InputControlOptions;
    rhfControl?: Control;
}
export interface FormOptions {
    action?: string;
    inputs?: FormInput | FormInput[];
    method?: 'get' | 'post';
    name?: string;
}
export interface FormContentOptions {
    inputs?: FormInput | FormInput[];
}
/**
 * Store action types
 */
export declare const ADD_SHEET = "ADD_SHEET";
export declare const ADD_SVG = "ADD_SVG";
export declare const SET_THEME = "SET_THEME";
export declare const SET_TOKENS = "SET_TOKENS";
export declare const UPDATE_CSS = "UPDATE_CSS";
interface AddSheetAction {
    type: typeof ADD_SHEET;
    sheet: Sheet<string, StyleSheet>;
}
interface AddSvgAction {
    type: typeof ADD_SVG;
    svg: Svg;
}
interface SetThemeAction {
    type: typeof SET_THEME;
    theme: Theme;
}
interface SetTokensAction {
    type: typeof SET_TOKENS;
    tokens: string;
}
interface UpdateCssAction {
    type: typeof UPDATE_CSS;
    css: RenderedCSS;
}
export type ActionTypes = AddSheetAction | AddSvgAction | SetThemeAction | SetTokensAction | UpdateCssAction;
export type Sheet<K extends keyof any, StyleSheet> = {
    [P in K]: StyleSheet;
};
export type Svg = {
    [k: string]: string;
};
export interface State {
    css: RenderedCSS;
    sheets: Sheet<string, StyleSheet>;
    svgs: Svg;
    theme: Theme;
    tokens: string;
}
export {};
