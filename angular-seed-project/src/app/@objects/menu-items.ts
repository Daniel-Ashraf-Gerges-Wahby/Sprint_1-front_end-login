import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  { title: 'Dashboard', icon: 'nb-home', link: '/dashboard', home: true },
  {
    title: 'Store',
    icon: 'fa fa-shopping-basket',
    link: '/store'
  }, {
    title: 'My Account',
    icon: 'fa fa-user',
    link: '/account'
  }
];
