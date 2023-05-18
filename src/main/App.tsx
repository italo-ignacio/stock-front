import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { dimensions } from './config';
import { queryClient } from 'infra/lib';
import { useEffect } from 'react';
import { useTheme } from 'store/theme/selector';
import { useWindowDimensions } from 'data/hooks';
import Router from './routes';
import type { FC } from 'react';

const App: FC = () => {
  const { width } = useWindowDimensions();
  const theme = useTheme();

  useEffect(() => {
    const body = document.getElementById('body');

    if (body) body.setAttribute('data-mode', theme);
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
        position={width >= dimensions.laptop ? 'top-right' : 'top-right'}
        style={{
          padding: '12px'
        }}
        theme={useTheme()}
      />
    </QueryClientProvider>
  );
};

export default App;
