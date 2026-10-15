export type CatppuccinColorName =
  | 'rosewater'
  | 'flamingo'
  | 'pink'
  | 'mauve'
  | 'red'
  | 'maroon'
  | 'peach'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'sky'
  | 'sapphire'
  | 'blue'
  | 'lavender'
  | 'text'
  | 'subtext1'
  | 'subtext0'
  | 'overlay2'
  | 'overlay1'
  | 'overlay0'
  | 'surface2'
  | 'surface1'
  | 'surface0'
  | 'base'
  | 'mantle'
  | 'crust';

export type CatppuccinFlavor =
  | 'latte'
  | 'frappe'
  | 'macchiato'
  | 'mocha'
  | 'base'
  | 'esab';

export interface FlavorDefinition {
  name: string;
  dark: boolean;
  colors: Record<CatppuccinColorName, string>;
}

export const catppuccinFlavors: Record<CatppuccinFlavor, FlavorDefinition> = {
  latte: {
    name: 'Latte',
    dark: false,
    colors: {
      rosewater: '#dc8a78',
      flamingo: '#dd7878',
      pink: '#ea76cb',
      mauve: '#8839ef',
      red: '#d20f39',
      maroon: '#e64553',
      peach: '#fe640b',
      yellow: '#df8e1d',
      green: '#40a02b',
      teal: '#179299',
      sky: '#04a5e5',
      sapphire: '#209fb5',
      blue: '#1e66f5',
      lavender: '#7287fd',
      text: '#4c4f69',
      subtext1: '#5c5f77',
      subtext0: '#6c6f85',
      overlay2: '#7c7f93',
      overlay1: '#8c8fa1',
      overlay0: '#9ca0b0',
      surface2: '#acb0be',
      surface1: '#bcc0cc',
      surface0: '#ccd0da',
      base: '#eff1f5',
      mantle: '#e6e9ef',
      crust: '#dce0e8',
    },
  },
  frappe: {
    name: 'Frappé',
    dark: true,
    colors: {
      rosewater: '#f2d5cf',
      flamingo: '#eebebe',
      pink: '#f4b8e4',
      mauve: '#ca9ee6',
      red: '#e78284',
      maroon: '#ea999c',
      peach: '#ef9f76',
      yellow: '#e5c890',
      green: '#a6d189',
      teal: '#81c8be',
      sky: '#99d1db',
      sapphire: '#85c1dc',
      blue: '#8caaee',
      lavender: '#babbf1',
      text: '#c6d0f5',
      subtext1: '#b5bfe2',
      subtext0: '#a5adce',
      overlay2: '#949cbb',
      overlay1: '#838ba7',
      overlay0: '#737994',
      surface2: '#626880',
      surface1: '#51576d',
      surface0: '#414559',
      base: '#303446',
      mantle: '#292c3c',
      crust: '#232634',
    },
  },
  macchiato: {
    name: 'Macchiato',
    dark: true,
    colors: {
      rosewater: '#f4dbd6',
      flamingo: '#f0c6c6',
      pink: '#f5bde6',
      mauve: '#c6a0f6',
      red: '#ed8796',
      maroon: '#ee99a0',
      peach: '#f5a97f',
      yellow: '#eed49f',
      green: '#a6da95',
      teal: '#8bd5ca',
      sky: '#91d7e3',
      sapphire: '#7dc4e4',
      blue: '#8aadf4',
      lavender: '#b7bdf8',
      text: '#cad3f5',
      subtext1: '#b8c0e0',
      subtext0: '#a5adcb',
      overlay2: '#939ab7',
      overlay1: '#8087a2',
      overlay0: '#6e738d',
      surface2: '#5b6078',
      surface1: '#494d64',
      surface0: '#363a4f',
      base: '#24273a',
      mantle: '#1e2030',
      crust: '#181926',
    },
  },
  mocha: {
    name: 'Mocha',
    dark: true,
    colors: {
      rosewater: '#f5e0dc',
      flamingo: '#f2cdcd',
      pink: '#f5c2e7',
      mauve: '#cba6f7',
      red: '#f38ba8',
      maroon: '#eba0ac',
      peach: '#fab387',
      yellow: '#f9e2af',
      green: '#a6e3a1',
      teal: '#94e2d5',
      sky: '#89dceb',
      sapphire: '#74c7ec',
      blue: '#89b4fa',
      lavender: '#b4befe',
      text: '#cdd6f4',
      subtext1: '#bac2de',
      subtext0: '#a6adc8',
      overlay2: '#9399b2',
      overlay1: '#7f849c',
      overlay0: '#6c7086',
      surface2: '#585b70',
      surface1: '#45475a',
      surface0: '#313244',
      base: '#1e1e2e',
      mantle: '#181825',
      crust: '#11111b',
    },
  },
  base: {
    name: 'Base',
    dark: true,
    colors: {
      crust: '#000000',
      mantle: '#070707',
      base: '#0e0e0e',
      surface0: '#212121',
      surface1: '#272727',
      surface2: '#3d3d3d',
      overlay0: '#606060',
      overlay1: '#767676',
      overlay2: '#8e8e8e',
      subtext0: '#a6a6a6',
      subtext1: '#cecece',
      text: '#ffffff',
      pink: '#FF0074',
      peach: '#FF5500',
      rosewater: '#FF338F',
      red: '#E0005A',
      maroon: '#C4004E',
      yellow: '#FFAA00',
      green: '#00D26A',
      teal: '#00C4B4',
      sky: '#00B4D8',
      sapphire: '#0077B6',
      blue: '#2A75D3',
      lavender: '#7C83FD',
      mauve: '#A64AC9',
      flamingo: '#FF5C8A',
    },
  },
  esab: {
    name: 'Esab',
    dark: false,
    colors: {
      crust: '#ffffff',
      mantle: '#f8f8f8',
      base: '#f1f1f1',
      surface0: '#dedede',
      surface1: '#d8d8d8',
      surface2: '#c2c2c2',
      overlay0: '#9f9f9f',
      overlay1: '#898989',
      overlay2: '#717171',
      subtext0: '#595959',
      subtext1: '#313131',
      text: '#000000',
      pink: '#FF0074',
      peach: '#FF5500',
      rosewater: '#FF338F',
      red: '#E0005A',
      maroon: '#C4004E',
      yellow: '#E69900',
      green: '#00A855',
      teal: '#009E91',
      sky: '#0092B0',
      sapphire: '#005F92',
      blue: '#1A5EBA',
      lavender: '#5A62E8',
      mauve: '#8C37AC',
      flamingo: '#E64A77',
    },
  },
};

export const flavorNames: CatppuccinFlavor[] = [
  'latte',
  'frappe',
  'macchiato',
  'mocha',
  'base',
  'esab',
];

export function getFlavor(flavor: CatppuccinFlavor): FlavorDefinition {
  return catppuccinFlavors[flavor];
}
