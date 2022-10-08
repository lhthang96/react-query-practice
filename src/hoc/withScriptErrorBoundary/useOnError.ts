import { useEffect, useState } from 'react';

export const useOnError = (): void => {
  const [, setError] = useState();

  useEffect(() => {
    window.onerror = (event: ErrorEvent) => {
      console.log('Log onerror event', event);
      setError(() => {
        throw new Error(event.message);
      });
    };
  }, []);
};
