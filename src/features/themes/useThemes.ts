import { Api, ThemeResponseType } from '@/shared/lib';
import { useEffect, useState } from 'react';

export const useThemes = () => {
  const [themes, setThemes] = useState<string[]>([]);
  const [isThemesLoading, setIsThemesLoading] = useState<boolean>(false);
  const [themesError, setThemesError] = useState<unknown | null>(null);

  useEffect(() => {
    const getThemes = async (): Promise<void> => {
      try {
        setIsThemesLoading(true);
        setThemesError(null);

        const themes: ThemeResponseType[] = await Api.fetchThemes();
        const mappedThemes = themes.map((theme) => theme.name);

        setThemes(mappedThemes);
      } catch (error) {
        setThemesError(error);
      } finally {
        setIsThemesLoading(false);
      }
    };

    getThemes();
  }, []);

  return { themes, isThemesLoading, themesError };
};
