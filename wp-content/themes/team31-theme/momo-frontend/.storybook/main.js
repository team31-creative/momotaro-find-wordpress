/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@mui/storybook',
  ],

  staticDirs: ["../public"],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
