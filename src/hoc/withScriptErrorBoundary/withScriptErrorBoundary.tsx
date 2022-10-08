import React, { ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ScriptErrorFallback } from './ScriptErrorFallback';

export const withScriptErrorBoundary = <P,>(Component: ComponentType<P>): ComponentType<P> => {
  return (props) => {
    return (
      <ErrorBoundary FallbackComponent={ScriptErrorFallback} onError={console.log}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
};
