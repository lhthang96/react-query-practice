import { useEffect, useState } from 'react';

export const useOnUnhandledRejection = (): void => {
  const [, setError] = useState();

  useEffect(() => {
    window.onunhandledrejection = (event: PromiseRejectionEvent) => {
      console.log('Log onerror event', event);
      setError(() => {
        throw new Error(event.reason);
      });
    };
  }, []);
};
