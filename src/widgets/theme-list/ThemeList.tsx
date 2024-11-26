import { ThemesStore } from '@/entities/themes';
import { useThemes } from '@/features/themes';
import { THEME_IMAGES } from '@/shared/assets';
import { MAX_THEMES } from '@/shared/config';
import { Button, Loader, ThemeItem } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';

type ThemeListProps = React.HTMLAttributes<HTMLUListElement>;

export const ThemeList: React.FC<ThemeListProps> = () => {
  const { themes, isThemesLoading, themesError } = useThemes();
  const navigate = useNavigate();
  const pickedThemes: string[] = ThemesStore.themes;

  const onFormSubmit = (): void => {
    navigate('/main');
  };

  if (themesError) {
    navigate('/server-error');
  }

  const isPickedEnough: boolean = pickedThemes.length !== MAX_THEMES;

  return (
    <form onSubmit={onFormSubmit} className="flex gap-y-4 flex-col">
      <h2 className="text-2xl leading-8 text-light-neutral-950 font-unbounded font-normal">
        Выбери {MAX_THEMES} темы
      </h2>
      {isThemesLoading ? (
        <Loader className="h-16" />
      ) : (
        <ul className="flex gap-4 flex-wrap">
          {themes.map((theme) => {
            const isChecked = pickedThemes.includes(theme);

            return (
              <li key={theme}>
                <ThemeItem
                  themeName={theme}
                  imgSrc={THEME_IMAGES[theme]}
                  defaultChecked={isChecked}
                  onChange={() => {
                    ThemesStore.changeTheme(theme);
                  }}
                  disabled={pickedThemes.length >= MAX_THEMES && !isChecked}
                />
              </li>
            );
          })}
        </ul>
      )}
      <Button
        type="submit"
        disabled={isPickedEnough}
        isLoading={isThemesLoading}
        className={isPickedEnough ? 'text-light-neutral-400' : undefined}
        bgType={isPickedEnough ? 'neutral' : 'primary'}
      >
        Продолжить
      </Button>
    </form>
  );
};
