import '../styles/globals.css';
import type { AppProps } from 'next/app';

// FIXME: Customized Bootstrap-grid, commented out duplicate selectors from tailwindcss, will use boostrap SCSS or finish row/cols under tailwindcss properties
import '../../src/styles/bootstrap-5.1.0-dist/css/bootstrap-grid.css';
// import '../styles/globals.scss';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
