import { Input } from '@nextui-org/react';
import React, { ReactElement, Suspense, useDeferredValue, useEffect, useRef, useState } from 'react';
import { useSearchGame } from 'src/hooks';
import { StyledSearch } from './Search.styles';

const SEARCH_DEBOUNCE_TIME = 0.6 * 1000;

export const Search: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState('');

  const {
    data: games,
    isLoading,
    isError,
    error
  } = useSearchGame(debouncedKeyword, {
    scope: 'search'
  });

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, SEARCH_DEBOUNCE_TIME);

    return (): void => {
      window.clearTimeout(timeout);
    };
  }, [keyword]);

  const renderContent = (): ReactElement => {
    if (isLoading) return <span>Loading...</span>;
    if (isError) return <pre>{JSON.stringify(error, undefined, 4)}</pre>;
    return (
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <StyledSearch>
      <Input
        value={keyword}
        onChange={(e): void => {
          setKeyword(e.target.value);
        }}
        ref={(ref): void => {
          ref?.focus();
        }}
      />
      <Suspense fallback="Searching...">
        <div className="result">{renderContent()}</div>
      </Suspense>
    </StyledSearch>
  );
};
