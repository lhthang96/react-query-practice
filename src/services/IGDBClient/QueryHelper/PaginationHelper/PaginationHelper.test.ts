import { PaginationHelper } from './PaginationHelper';

describe('Pagination Helper suite', () => {
  const helper = new PaginationHelper();

  it('Should return undefined if no parameters', () => {
    const result = helper.getQuery(undefined);
    expect(result).toBe(undefined);
  });

  it('Should return pagination query string', () => {
    const OFFSET = 0;
    const LIMIT = 10;
    const result = helper.getQuery({ offset: OFFSET, limit: LIMIT });
    expect(result).toBe(`limit ${LIMIT}; offset ${OFFSET};`);
  });
});
