// import { muiTheme } from 'storybook-addon-material-ui';
// FIXME: Bootstrap-grid is hacky, commented out duplicate selectors from tailwindcss, will use boostrap SCSS or finish row/cols under tailwindcss properties
// import '../../../src/styles/bootstrap-5.1.0-dist/css/bootstrap-grid.css';
// import React from "react";

import '../src/styles/bootstrap-5.1.0-dist/css/bootstrap-grid.css';
import 'tailwindcss/tailwind.css';
// import '../src/styles/globals.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'gray',
    values: [
      { name: 'gray', value: '#e2e8f0' },
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
    ],
  },
  controls: {
    expanded: false, // Show Description and Default values on controls
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: 'alpha',
  },
  layout: 'centered',
};

// export const decorators = [
//   (StoryFn, { globals: { locale = "en" } }) => (
//     <>
//       <div>{locale}</div>
//       <StoryFn />
//     </>
//   ),
// ];

// For MUI extension
// export const decorators = [
//   muiTheme()
// ];
