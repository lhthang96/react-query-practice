import React, { ComponentPropsWithoutRef } from 'react';
import CrashIcon from 'src/assets/crash.svg';
import { StyledScriptErrorFallback } from './ScriptErrorFallback.styles';

type ScriptErrorFallbackProps = ComponentPropsWithoutRef<'div'> & {
  error?: any;
};

export const ScriptErrorFallback: React.FC<ScriptErrorFallbackProps> = (props) => {
  const { error, ...containerProps } = props;

  return (
    <StyledScriptErrorFallback {...containerProps}>
      <CrashIcon className="crash-icon" />
      <p className="error-message" role="alert">
        Something went wrong
      </p>
    </StyledScriptErrorFallback>
  );
};
