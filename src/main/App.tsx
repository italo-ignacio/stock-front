import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { dimensions } from './config/dimensions';
import { getTheme } from 'store/theme/selector';
import { queryClient } from 'infra/lib';
import { useEffect } from 'react';
import { useWindowDimensions } from 'data/hooks';
import Router from './routes';
import type { FC } from 'react';

const App: FC = () => {
  const { width } = useWindowDimensions();
  const theme = getTheme();

  useEffect(() => {
    const root = document.getElementById('root');

    if (root) root.setAttribute('data-mode', theme);
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />

      {/* <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} /> */}

      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar={false}
        limit={4}
        pauseOnHover
        position={width >= dimensions.laptop ? 'bottom-right' : 'top-right'}
        style={{
          padding: '12px'
        }}
        theme={getTheme()}
      />
    </QueryClientProvider>
  );
};

export default App;
