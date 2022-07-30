// Vendors
import dbConstants from '@/constants/db.constants';
import themeConstants from '@/constants/theme.constants';
import { defineStore } from 'pinia';

interface IState {
  db: IDBDatabase | null;
  dbError: unknown;
  theme: {
    current: string;
  };
}

export const toggleTheme = (current: string): string =>
  current === themeConstants.DARK ? themeConstants.LIGHT : themeConstants.DARK;

const store = defineStore('global', {
  state: (): IState => ({
    db: null,
    dbError: null,
    theme: {
      current: themeConstants.DEFAULT,
    },
  }),
  getters: {
    db: (state: IState) => state.db,
    theme: (state: IState) => state.theme,
    currentTheme: (state: IState) => state.theme.current,
  },
  actions: {
    initializeIndexedDb() {
      this.db = null;

      const { NAME, VERSION } = dbConstants;
      const DBOpenRequest = window.indexedDB.open(NAME, VERSION);

      // Success handler
      DBOpenRequest.onsuccess = (() => {
        const context = this;
        return function () {
          context.db = DBOpenRequest.result;
        };
      })();

      // Error handler
      DBOpenRequest.onerror = (() => {
        const context = this;
        return function (event) {
          context.dbError = event;
        };
      })();
    },
    initializeStore() {
      this.initializeIndexedDb();
      this.setTheme(themeConstants.DEFAULT);
    },
    toggleTheme() {
      this.theme.current = toggleTheme(this.theme.current);
    },
    setTheme(newTheme: string) {
      this.theme.current = newTheme;
    },
  },
});

export default store;
