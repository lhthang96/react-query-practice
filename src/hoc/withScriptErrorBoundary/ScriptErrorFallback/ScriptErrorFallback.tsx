import React, { ComponentPropsWithoutRef } from 'react';
import CrashIcon from 'src/assets/crash.svg';
import { StyledScriptErrorFallback } from './ScriptErrorFallback.styles';

type ScriptErrorFallbackProps = ComponentPropsWithoutRef<'div'> & {};

export const ScriptErrorFallback: React.FC<ScriptErrorFallbackProps> = (props) => {
  const { ...containerProps } = props;
  return (
    <StyledScriptErrorFallback {...containerProps}>
      <CrashIcon className="crash-icon" />
      <p className="error-message" role="status">
        Something went wrong
      </p>
    </StyledScriptErrorFallback>
  );
};
