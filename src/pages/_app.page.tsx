import type { AppProps } from 'next/app';
// import 'tailwindcss/tailwind.css';

// FIXME: Customized Bootstrap-grid, commented out duplicate selectors from tailwindcss, will use boostrap SCSS or finish row/cols under tailwindcss properties
import '../styles/bootstrap-5.1.0-dist/css/bootstrap-grid.css';
import '../styles/globals.scss';
// import 'tailwindcss/tailwind.css';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
