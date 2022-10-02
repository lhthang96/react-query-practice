import { FieldsHelper } from './FieldsHelper';

describe('Field Helper suite', () => {
  const helper = new FieldsHelper();

  it('Should return * if no parameters', () => {
    const result = helper.getQuery(undefined);
    expect(result).toBe('fields *;');
  });

  it('Should return fields query by input array', () => {
    const result = helper.getQuery(['field_a', 'field_b', 'field_c']);
    expect(result).toBe('fields field_a,field_b,field_c;');
  });

  it('Should return fields query by input string', () => {
    const result = helper.getQuery('field_a,field_b,field_c');
    expect(result).toBe('fields field_a,field_b,field_c;');
  });

  it('Should return fields query by input undefined', () => {
    const result = helper.getQuery(undefined);
    expect(result).toBe('fields *;');
  });

  it('Should return expanders query by input', () => {
    const result = helper.getQuery(undefined, { field_a: ['*'], field_b: ['field_b_1', 'field_b_2'] });
    expect(result).toBe('fields *,field_a.*,field_b.field_b_1,field_b.field_b_2;');
  });

  it('Should return expanders query with * value if no fields provided', () => {
    const result = helper.getQuery(undefined, { field_a: ['*'], field_b: ['field_b_1', 'field_b_2'] });
    expect(result).toBe('fields *,field_a.*,field_b.field_b_1,field_b.field_b_2;');
  });

  it('Should replace existing field with expanders', () => {
    const result = helper.getQuery(['field_a', 'field_b', 'field_c'], {
      field_a: ['*'],
      field_b: ['field_b_1', 'field_b_2']
    });
    expect(result).toBe('fields field_a.*,field_b.field_b_1,field_b.field_b_2,field_c;');
  });

  it('Should return excludes query by input', () => {
    const result = helper.getQuery(undefined, undefined, ['field_a', 'field_b']);
    expect(result).toBe('fields *;\nexclude field_a,field_b;');
  });
});
