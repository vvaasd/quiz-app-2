import { MAX_THEMES } from '@/shared/config';
import { makeAutoObservable } from 'mobx';

class ThemesStore {
  themes: string[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  changeTheme(theme: string) {
    if (this.themes.includes(theme)) {
      this.themes.splice(this.themes.indexOf(theme), 1);
    } else if (this.themes.length < MAX_THEMES) {
      this.themes.push(theme);
    }
  }

  clearThemes() {
    this.themes = [];
  }
}

export default new ThemesStore();
