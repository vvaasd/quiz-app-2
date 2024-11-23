type ClassName =
  | string
  | undefined
  | null
  | { [key: string]: boolean | undefined | null };

export const cn = (...classNames: ClassName[]): string => {
  const checkNullString = (str: string): boolean => {
    return !['undefined', 'null'].includes(str);
  };

  const classList = [...classNames]
    .map((item) => {
      if (!item || typeof item !== 'object') {
        return item;
      } else {
        if (!Array.isArray(item)) {
          let row = '';
          Object.entries(item).forEach(([key, value]) => {
            if (value && checkNullString(key)) row += ` ${key}`;
          });

          return row.trim();
        } else {
          return item.join(' ').replace(/\s+/, ' ').trim();
        }
      }
    })
    .filter(
      (item): item is string =>
        typeof item === 'string' && !!item.trim() && checkNullString(item),
    );

  return classList.join(' ');
};
