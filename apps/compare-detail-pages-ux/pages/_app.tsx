import { AppProps } from 'next/app';
import './styles.css';
import { DefaultGetStaticProps } from '../../../libs/feature/next-shared.types';

function CustomApp({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppProps<DefaultGetStaticProps>) {
  return <Component {...pageProps} />;
}

export default CustomApp;
