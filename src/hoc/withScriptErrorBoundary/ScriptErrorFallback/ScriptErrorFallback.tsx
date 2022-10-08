import React, { ComponentPropsWithoutRef } from 'react';
import CrashIcon from 'src/assets/crash.svg';
import { StyledScriptErrorFallback } from './ScriptErrorFallback.styles';

type ScriptErrorFallbackProps = ComponentPropsWithoutRef<'div'> & {};

export const ScriptErrorFallback: React.FC<ScriptErrorFallbackProps> = (props) => {
  const { ...containerProps } = props;
  return (
    <StyledScriptErrorFallback {...containerProps} role="status">
      <CrashIcon className="crash-icon" />
      <p className="error-message">Something went wrong</p>
    </StyledScriptErrorFallback>
  );
};
