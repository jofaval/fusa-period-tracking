/**
 * Serializes a value
 * @param value The value to serialize
 * @returns The value serialized
 */
const serialize = (value: any): string => JSON.stringify(value, null, 0);

export { serialize };
