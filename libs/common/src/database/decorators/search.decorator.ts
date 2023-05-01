export const SearchableKey = Symbol('searchable');

export function Searchable(name: string) => Reflect.metadata(SearchableKey, name)
