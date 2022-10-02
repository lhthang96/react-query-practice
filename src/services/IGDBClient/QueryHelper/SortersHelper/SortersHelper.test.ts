import { SortersHelper } from './SortersHelper';

describe('Sorters Helper suite', () => {
  const helper = new SortersHelper();

  it('Should return undefined if no parameters', () => {
    const result = helper.getQuery(undefined);
    expect(result).toBe(undefined);
  });

  it('Should return sorters query string', () => {
    const result = helper.getQuery([
      ['field_a', 'asc'],
      ['field_b', 'desc']
    ]);
    expect(result).toBe(`sort field_a asc;\nsort field_b desc;`);
  });
});
