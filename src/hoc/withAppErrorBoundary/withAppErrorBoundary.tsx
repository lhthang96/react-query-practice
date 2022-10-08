import React, { ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { withAppErrorCatcher } from './withAppErrorCatcher';
import { AppErrorFallback } from './AppErrorFallback';

export const withAppErrorBoundary = <P,>(Component: ComponentType<P>): ComponentType<P> => {
  const WithErrorCatcherComponent = withAppErrorCatcher(Component);
  return (props) => {
    return (
      <ErrorBoundary FallbackComponent={AppErrorFallback}>
        <WithErrorCatcherComponent {...props} />
      </ErrorBoundary>
    );
  };
};
