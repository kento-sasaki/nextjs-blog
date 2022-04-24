// NOTE: VScode で色を視認できるように拡張子を .tsx にしている

export const themeColors = {
  mosGreen: '#009394',
  white: '#ffffff',
  lightGray: '#e0dad5',
  secondaryGray: '#2b2a2a',
  primaryGray: '#21201f',
  black: '#000000',
  apollo: '#ad9bf6BF',
  graphql: '#e10098BF',
  nextjs: '#ffffffBF',
  react: '#61dafbBF',
  typescript: '#3178c6BF',
  storybook: '#ff4785',
  chakra: '#65cacc',
}

type Colors = keyof typeof themeColors

const entries = Object.keys(themeColors).map(color => [color, `brand.${color}`])
export const colors = Object.fromEntries(entries) as Record<Colors, string>
