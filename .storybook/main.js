module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    'storybook-formik/register',
    // 'storybook-addon-material-ui',
    {
      name: '@storybook/addon-postcss',
      options: {
        // cssLoaderOptions: {
        //   // When you have splitted your css over multiple files
        //   // and use @import('./other-styles.css')
        //   importLoaders: 1,
        // },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
};
