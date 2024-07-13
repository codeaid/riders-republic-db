import { PUBLIC_BASE_PATH, PUBLIC_BASE_URL } from '$env/static/public';

export const appTitle = 'Riders Republic DB';

export const appDescription =
  'Gear up for adventure with Riders Republic Elite Gear Database. Track and manage your acquired items to showcase your collection!';

export const openGraphImage = `${PUBLIC_BASE_URL}${PUBLIC_BASE_PATH}/images/og.jpeg?` + Date.now();
