import React from 'react';
import '../styles/globals.css';
import 'react-phone-input-2/lib/style.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import Global from 'components/Global/Global';
import { store } from 'redux/store';
import Loading from 'components/Loading/Loading';
import StorageSync from 'components/StorageSync/StorageSync';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  if (typeof window !== 'undefined') {
    router.events.on('routeChangeStart', () => {
      setLoading(true);
    });
    router.events.on('routeChangeComplete', () => {
      setLoading(false);
    });
  }
  return (
    <Provider store={store}>
      {
        loading ? (
          <Loading />
        ) : (
          <StorageSync>
            <Global>
              <Component {...pageProps} />
            </Global>
          </StorageSync>
        )
      }
    </Provider>
  );
}

export default MyApp;
