import React, { ComponentPropsWithoutRef } from 'react';
import CrashIcon from 'src/assets/crash.svg';
import { StyledScriptErrorFallback } from './ScriptErrorFallback.styles';

type ScriptErrorFallbackProps = ComponentPropsWithoutRef<'div'> & {
  error?: any;
};

export const ScriptErrorFallback: React.FC<ScriptErrorFallbackProps> = (props) => {
  const { error, ...containerProps } = props;
  console.log('Error props', { error, message: error.message });
  return (
    <StyledScriptErrorFallback {...containerProps}>
      <CrashIcon className="crash-icon" />
      <p className="error-message" role="status">
        Something went wrong
      </p>
    </StyledScriptErrorFallback>
  );
};
