import React from 'react';
import { render, screen } from '@testing-library/react';
import { withScriptErrorBoundary } from '../withScriptErrorBoundary';

const ComponentWithScriptError: React.FC = () => {
  throw new Error('Error component!');
};

const ComponentWithoutScriptError: React.FC = () => {
  return <div>I'm component</div>;
};

describe('withScriptErrorBoundary HOC test suite', () => {
  test('ScriptErrorFallback component will be rendered if the component throw script error', () => {
    const Component = withScriptErrorBoundary(ComponentWithScriptError);
    render(<Component />);
    expect(screen.getByRole('status').textContent).toBe('Something went wrong');
  });
});
