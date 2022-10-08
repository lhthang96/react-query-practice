import { useEffect } from 'react';
import { AppError } from '../enum';

export const useCatchScriptError = (): void => {
  useEffect(() => {
    window.onerror = (event: ErrorEvent): void => {
      console.log('Log onerror event', { event });
      throw new Error(AppError.SCRIPT_ERROR);
    };

    window.onunhandledrejection = (event: PromiseRejectionEvent): void => {
      console.log('Log unhandled promise rejection event', { event });
      throw new Error(AppError.SCRIPT_ERROR);
    };
  }, []);
};
