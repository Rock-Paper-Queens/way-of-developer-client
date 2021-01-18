import tw from "twin.macro";

export const fontProps = {
  fontColor: {
    transparent: tw`text-transparent`,
    black: tw`text-black`,
    white: tw`text-white`,
    greyPrimary: tw`text-grey-primary`,
    greyText: tw`text-grey-text`,
    greyTextLigth: tw`text-grey-text-light`,
    greyTextDark: tw`text-grey-text-dark`,
    greyLight: tw`text-grey-light`,
    warn: tw`text-warn`,
  },
  fontSize: {
    xs: tw`text-xs`, // 12px
    sm: tw`text-sm`, // 14px
    base: tw`text-base`, // 16px
    lg: tw`text-lg`, // 18px
    xl: tw`text-xl`, // 20px
    "2xl": tw`text-2xl`, // 24px
    "3xl": tw`text-3xl`, // 30px
    "4xl": tw`text-4xl`, // 36px
    "5xl": tw`text-5xl`, // 48px
    "6xl": tw`text-6xl`, // 60px
    "7xl": tw`text-7xl`, // 72px
    "8xl": tw`text-8xl`, // 96px
    "9xl": tw`text-9xl`, // 128px
  },
  fontFamily: {
    sans: tw`font-sans`,
  },
  fontWeight: {
    "100": tw`font-thin`,
    "200": tw`font-extralight`,
    "300": tw`font-light`,
    "400": tw`font-normal`,
    "500": tw`font-medium`,
    "600": tw`font-semibold`,
    "700": tw`font-bold`,
    "800": tw`font-extrabold`,
    "900": tw`font-black`,
  },
  letterSpacing: {
    tighter: tw`tracking-tighter`,
    tight: tw`tracking-tight`,
    base: tw`tracking-normal`,
    wide: tw`tracking-wide`,
    wider: tw`tracking-wider`,
    widest: tw`tracking-widest`,
  },
  lineHeight: {
    rem3: tw`leading-3`, //.75rem;
    rem4: tw`leading-4`, // 1rem;
    rem5: tw`leading-5`, // 1.25rem;
    rem6: tw`leading-6`, // 1.5rem;
    rem7: tw`leading-7`, // 1.75rem;
    rem8: tw`leading-8`, // 2rem;
    rem9: tw`leading-9`, // 2.25rem;
    rem10: tw`leading-10`, // 2.5rem;
    none: tw`leading-none`, // 1;
    tight: tw`leading-tight`, // 1.25;
    snug: tw`leading-snug`, // 1.375;
    normal: tw`leading-normal`, // 1.5;
    relaxed: tw`leading-relaxed`, // 1.625;
    double: tw`leading-loose`, // 2
  },
  textAlign: {
    left: tw`text-left`,
    center: tw`text-center`,
    right: tw`text-right`,
    justify: tw`text-justify`,
  },
  textVerticalAlign: {
    baseline: tw`align-baseline`,
    top: tw`align-top`,
    middle: tw`align-middle`,
    bottom: tw`align-bottom`,
    textTop: tw`align-text-top`,
    textBottom: tw`align-text-bottom`,
  },
  textStyle: {
    italic: tw`italic`,
  },
  textDecoration: {
    underline: tw`underline`,
    lineThrough: tw`line-through`,
  },
  textTransform: {
    uppercase: tw`uppercase`,
    lowercase: tw`lowercase`,
    capitalize: tw`capitalize`,
  },
  textOverflow: {
    truncate: tw`truncate`,
    overflowEllipsis: tw`overflow-ellipsis`,
    overflowClip: tw`overflow-clip`,
  },
  placeHolderColor: {
    transparent: tw`placeholder-transparent`,
    black: tw`placeholder-black`,
    white: tw`placeholder-white`,
    greyPrimary: tw`placeholder-grey-primary`,
    greyText: tw`placeholder-grey-text`,
    greyTextLigth: tw`placeholder-grey-text-light`,
    greyTextDark: tw`placeholder-grey-text-dark`,
    greyLight: tw`placeholder-grey-light`,
    warn: tw`placeholder-warn`,
  },
};
