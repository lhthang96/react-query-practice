import { FiltersHelper } from './FiltersHelper';

describe('Filters Helper suite', () => {
  const helper = new FiltersHelper();

  it('Should return undefined if no parameters', () => {
    const result = helper.getQuery(undefined);
    expect(result).toBe(undefined);
  });

  it('Should return filters query string', () => {
    const result = helper.getQuery([
      ['field_a', '=', 'value_a'],
      ['field_b', '!=', 'value_b']
    ]);
    expect(result).toBe('where field_a = value_a & field_b != value_b;');
  });
});
