import tw from "twin.macro";

export const mapPropsToTw = {
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
  bgColor: {
    transparent: tw`bg-transparent`,
    black: tw`bg-black`,
    white: tw`bg-white`,
    greyPrimary: tw`bg-grey-primary`,
    greyText: tw`bg-grey-text`,
    greyTextLigth: tw`bg-grey-text-light`,
    greyTextDark: tw`bg-grey-text-dark`,
    greyLight: tw`bg-grey-light`,
    warn: tw`bg-warn`,
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
  rounded: {
    none: tw`rounded-none`,
    base: tw`rounded`, // 2.5px
    sm: tw`rounded-sm`, // 5px
    lg: tw`rounded-lg`, // 10px
    xl: tw`rounded-xl`,
    "2xl": tw`rounded-2xl`,
    "3xl": tw`rounded-3xl`,
    full: tw`rounded-full`,
  },
  border: {
    none: tw`border-0`,
    "1": tw`border`,
    "2": tw`border-2`,
    "4": tw`border-4`,
    "8": tw`border-8`,
    t: tw`border-t`,
    r: tw`border-r`,
    l: tw`border-l`,
    b: tw`border-b`,
  },
  borderColor: {
    transparent: tw`border-transparent`,
    black: tw`border-black`,
    white: tw`border-white`,
    greyPrimary: tw`border-grey-primary`,
    greyText: tw`border-grey-text`,
    greyTextLigth: tw`border-grey-text-light`,
    greyTextDark: tw`border-grey-text-dark`,
    greyLight: tw`border-grey-light`,
    warn: tw`border-warn`,
  },
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
  margin: {
    none: tw`m-0`,
    "1": tw`m-1`,
    x1: tw`mx-1`,
    l1: tw`ml-1`,
    r1: tw`mr-1`,
    r2: tw`mr-2`,
    r3: tw`mr-3`,
    r4: tw`mr-4`,
  },
  padding: {
    none: tw`p-0`,
    "1": tw`p-1`,
    "1.5": tw`p-1.5`,
    "2": tw`p-2`,
    "3": tw`p-3`,
    "4": tw`p-4`,
    "5": tw`p-5`,
    x5: tw`px-5`,
  },
  event: {
    "disabled:o20": tw`disabled:opacity-20`,
    "disabled:o30": tw`disabled:opacity-30`,
    "disabled:o50": tw`disabled:opacity-50`,
    "disabled:o80": tw`disabled:opacity-80`,
    "disabled:loader": "",
    "hover:o30": tw`hover:opacity-30`,
    "hover:o50": tw`hover:opacity-50`,
    "hover:o80": tw`hover:opacity-80`,
  },
  display: {
    hidden: tw`hidden`,
  },
  flexDir: {
    row: tw``,
    col: tw``,
  },
  position: {
    relative: tw`relative`,
    absolute: tw`absolute`,
    fixed: tw`fixed`,
    sticky: tw`sticky`,
  },
  positionDir: {
    mid: tw`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,
  },
};
