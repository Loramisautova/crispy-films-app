import camelcaseKeys from 'camelcase-keys';

/**
 * Transform input data to camel case.
 *
 * @param data Data to transform.
 */
export const transformToCamelCase =
    <T>(data: Record<string, unknown> | readonly unknown[]): T => camelcaseKeys(data, { deep: true }) as T;