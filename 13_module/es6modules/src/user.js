import slug from 'slug';
import {url} from './config.js';
import base64 from 'base-64';

export default function user(name, email, website)  {
  return { name, email, website }
}

export function createUrl(name) {
  return `${url}/users/${slug(name)}`
}

export function gravatar(email) {
  const hash = base64.encode(email);
  const photoUrl = `https://www.gravatar.com/avatar/${hash}`
  return photoUrl;
}