import tw from "twin.macro";

export const sizeProps = {
  width: {
    auto: tw`w-auto`,
    none: tw`w-0`,
    base: tw`w-4`, // 16px
    "5": tw`w-5`,
    "6": tw`w-6`,
    "7": tw`w-7`,
    "8": tw`w-8`,
    "9": tw`w-9`,
    "10": tw`w-10`,
    "160": tw`w-40`,
    "1/2": tw`w-1/2`,
    "1/4": tw`w-1/4`,
    "3/4": tw`w-3/4`,
    full: tw`w-full`,
    screen: tw`w-screen`,
  },
  minWidth: {
    none: tw`min-w-0`,
    min: tw`min-w-min`,
    max: tw`min-w-max`,
    full: tw`min-w-full`,
  },
  maxWidth: {
    none: tw`max-w-none`,
    xs: tw`max-w-xs`, // 20rem
    sm: tw`max-w-sm`, // 24rem
    md: tw`max-w-md`, // 28rem
    lg: tw`max-w-lg`, // 32rem
    xl: tw`max-w-xl`, // 36rem
    "2xl": tw`max-w-2xl`, // 42rem
    "3xl": tw`max-w-3xl`, // 48rem
    "4xl": tw`max-w-4xl`, // 52rem
    "5xl": tw`max-w-5xl`, // 64rem
    "6xl": tw`max-w-6xl`, // 72rem
    "7xl": tw`max-w-7xl`, // 80rem
    full: tw`max-w-full`,
    min: tw`max-w-min`,
    max: tw`max-w-max`,
    prose: tw`max-w-prose`, // 65ch
    "screen-sm": tw`max-w-screen-sm`, // 640px
    "screen-md": tw`max-w-screen-md`, // 768px
    "screen-lg": tw`max-w-screen-lg`, // 1024px
    "screen-xl": tw`max-w-screen-xl`, // 1280px
  },
  height: {
    none: tw`h-0`,
    base: tw`h-4`,
    "5": tw`h-5`,
    "6": tw`h-6`,
    "7": tw`h-7`,
    "8": tw`h-8`,
    "9": tw`h-9`,
    "10": tw`h-10`,
    "11": tw`h-11`,
    "12": tw`h-12`,
    "14": tw`h-14`,
    "16": tw`h-16`,
    "160": tw`h-40`,
    "1/2": tw`h-1/2`,
    full: tw`h-full`,
    screen: tw`h-screen`,
  },
  minHeight: {
    none: tw`min-h-0`,
    full: tw`min-h-full`,
    screen: tw`min-h-screen`,
  },
  maxHeight: {
    none: tw`max-h-0`,
    full: tw`max-h-full`,
    screen: tw`max-h-screen`,
  },
};
