export type QueryFields<Entity extends object = any> = QueryField<Entity>[] | string;
export type QueryField<Entity extends object = any> = keyof Entity;
export type QueryFieldExpanders<Entity extends object = any> = {
  [key in keyof Entity]?:
    | (Entity[key] extends readonly (infer ElementType)[] ? keyof ElementType : keyof Entity[key])[]
    | ['*'];
};

export class FieldsHelper {
  public getQuery = <Entity extends object = any>(
    fields: QueryFields<Entity> = '*',
    expanders?: QueryFieldExpanders,
    excludes?: QueryField<Entity>[]
  ): string => {
    let result = this.computeQueryFields(fields);
    result = this.computeQueryExpanders(result, expanders);
    result = result.concat(';');
    result = this.computeQueryExcludes(result, excludes);

    return result;
  };

  private computeQueryFields = (fields: QueryFields = '*'): string => {
    return Array.isArray(fields) ? `fields ${fields.join(',')}` : `fields ${fields}`;
  };

  private computeQueryExpanders = (queryString: string, expanders: QueryFieldExpanders): string => {
    if (!Object.keys(expanders || {}).length) return queryString;

    let result = queryString;

    Object.entries(expanders).forEach((expander) => {
      const [field, expanderFields = ['*']] = expander;
      const expanderQuery = expanderFields
        .map((expanderField) => `${field.toString()}.${expanderField.toString()}`)
        .join(',');
      const isFieldExisted = result.search(field.toString()) !== -1;
      result = isFieldExisted ? result.replace(field.toString(), expanderQuery) : result.concat(`,${expanderQuery}`);
    });

    return result;
  };

  private computeQueryExcludes = (queryString: string, excludes: QueryField[]): string => {
    if (!excludes?.length) return queryString;

    const excludeQuery = `exclude ${excludes.join(',')};`;
    return queryString.concat(`\n${excludeQuery}`);
  };
}
