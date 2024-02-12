import type { StorybookConfig } from '@storybook/react-webpack5';
// @ts-ignore
import path from 'path';

console.log(path.resolve(__dirname, '../src/assets'));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@context': path.resolve(__dirname, '../src/context'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@type': path.resolve(__dirname, '../src/type'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    };
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};
export default config;
