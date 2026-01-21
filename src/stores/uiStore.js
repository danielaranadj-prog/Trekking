import { atom } from 'nanostores';

export const currentView = atom('home'); // 'home', 'stats'
export const isMenuOpen = atom(false);
