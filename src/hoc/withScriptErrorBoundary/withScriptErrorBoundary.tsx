import React, { ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ScriptErrorFallback } from './ScriptErrorFallback';

export type AppError = 'unhandled-rejection' | 'script-error' | 'server-error' | 'network-error' | 'others';

export const withScriptErrorBoundary = <P,>(Component: ComponentType<P>): ComponentType<P> => {
  return (props) => {
    return (
      <ErrorBoundary FallbackComponent={() => <ScriptErrorFallback />}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
};
