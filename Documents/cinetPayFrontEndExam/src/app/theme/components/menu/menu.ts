import { Menu } from './menu.model';

export const verticalMenuItems = [ 

    new Menu (2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
   // new Menu (40, 'Pages', null, null, 'library_books', null, true, 0),
    new Menu (43, 'Log Out', '/login', null, 'power_settings_new', null, false, 0),
    new Menu (49, 'Historique des recherche', '/contenuhisto', null, 'library_books', null, false, 0),
]

export const horizontalMenuItems = [
    new Menu (2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
  //  new Menu (40, 'Pages', null, null, 'library_books', null, true, 0),
    new Menu (43, 'Log Out', '/login', null, 'power_settings_new', null, false, 0),
    new Menu (49, 'Profile', null, null, 'person', null, true, 40),
]