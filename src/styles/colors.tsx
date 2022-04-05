// NOTE: VScode で色を視認できるように拡張子を .tsx にしている

export const themeColors = {
  mosGreen: '#009394',
  white: '#FFFFFF',
  lightGray: '#E0DAD5',
  secondaryGray: '#2B2A2A',
  primaryGray: '#21201F',
  black: '#000000',
}

type Colors = keyof typeof themeColors

const entries = Object.keys(themeColors).map(color => [color, `brand.${color}`])
export const colors = Object.fromEntries(entries) as Record<Colors, string>
