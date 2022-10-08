import React, { ComponentType } from 'react';
import { useCatchScriptError } from './useCatchScriptError';

export type AppError = 'server-error' | 'network-error' | 'script-error';

export const withAppErrorCatcher = <P,>(Component: ComponentType<P>): ComponentType<P> => {
  return (props) => {
    useCatchScriptError();

    return <Component {...props} />;
  };
};
