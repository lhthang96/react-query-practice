import { FieldsHelper } from './FieldsHelper';

const helper = new FieldsHelper();

describe('Field Helper suite', () => {
  it('Should return * if no parameters inputted', () => {
    const result = helper.getQuery();
    expect(result).toBe('fields *;');
  });

  it('Should return fields query by input', () => {
    const result = helper.getQuery(['field_a', 'field_b', 'field_c']);
    expect(result).toBe('fields field_a,field_b,field_c;');
  });

  it('Should return expanders query by input', () => {
    const result = helper.getQuery(undefined, { field_a: ['*'], field_b: ['field_b_1', 'field_b_2'] });
    expect(result).toBe('fields *,field_a.*,field_b.field_b_1,field_b.field_b_2;');
  });

  it('Should return excludes query by input', () => {
    const result = helper.getQuery(undefined, undefined, ['field_a', 'field_b']);
    expect(result).toBe('fields *;\nexclude field_a,field_b;');
  });
});
