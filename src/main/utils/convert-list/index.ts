import type { SelectValues } from 'presentation/atomic-component/atom';

export const convertList = (list: SelectValues[]): string[] => list.map((item) => item.value);
