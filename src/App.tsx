import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'src/pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
      refetchInterval: false,
      refetchOnWindowFocus: false
    }
  }
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
};
