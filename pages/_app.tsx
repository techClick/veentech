import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import ResponsiveSync from 'components/ResponsiveSync/ResponsiveSync';
import { store } from 'redux/store';
import Loading from 'components/Loading/Loading';
import StorageSync from 'components/StorageSync/StorageSync';

if (typeof window !== 'undefined') {
  // localStorage.clear();
}

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
            <ResponsiveSync>
              <div role="dialog">
                <Component {...pageProps} />
              </div>
            </ResponsiveSync>
          </StorageSync>
        )
      }
    </Provider>
  );
}

export default MyApp;
