import React from 'react';
import { AppError } from '../enum';
import { StyledAppErrorFallback } from './AppErrorFallback.styles';

type AppErrorFallbackProps = {
  error: Error;
};

export const AppErrorFallback: React.FC<AppErrorFallbackProps> = (props) => {
  const { error } = props;
  return (
    <StyledAppErrorFallback>
      <div className="error-content">
        <p className="error-title">{getErrorTitle(error)}</p>
        <p className="error-message">{getErrorMessage(error)}</p>
      </div>
    </StyledAppErrorFallback>
  );
};

// #region LOCAL_FUNCTIONS
const getErrorTitle = (error: Error): string => {
  const message = error.message as AppError;
  switch (message) {
    case AppError.NETWORK_ERROR:
      return 'Network Error';

    default:
      return '500';
  }
};

const getErrorMessage = (error: Error): string => {
  const message = error.message as AppError;
  switch (message) {
    case AppError.NETWORK_ERROR:
      return 'Please check your internet connection and try again.';

    case AppError.SERVER_ERROR:
      return 'Server is not available, please try again after a few minutes.';

    default:
      return 'Whoops! Looks like the page is not available.';
  }
};
// #endregion LOCAL_FUNCTIONS
