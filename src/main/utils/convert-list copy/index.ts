import type { SelectValues } from 'presentation/atomic-component/atom';

export const convertToSelect = (list: { id: string; name: string }[]): SelectValues[] =>
  list.map((item) => ({
    label: item.name,
    value: item.id
  }));
