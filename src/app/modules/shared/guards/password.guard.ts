import { type CanActivateFn } from '@angular/router';

export const passwordGuard: CanActivateFn = (route, state) => {
  const password = prompt('Por favor introduce la contraseña para acceder: ');
  if (password === 'terreta') {
    return true;
  } else {
    alert('Contraseña incorrecta.');
    return false;
  }
};
