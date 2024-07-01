import { NODE_ENV } from '$env/static/private';

export const prerender = NODE_ENV !== 'development';
