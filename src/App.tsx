import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'src/pages';
import { Layout } from './layout';
import { Search } from './pages/Search';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
      refetchInterval: false,
      refetchOnWindowFocus: true
    }
  }
});

export const App: React.FC = () => {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </NextUIProvider>
  );
};
