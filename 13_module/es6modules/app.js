import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

import {apiKey, url, sayHi} from './src/config';

// console.log(apiKey);
// sayHi('Danny')

import user, {createUrl, gravatar} from  './src/user';

const danny = new user('Danny de Vries', 'hi@dandevri.es', 'dandevri.es');
console.log(danny);

const profile = createUrl(danny.name);
console.log(profile);

const image = gravatar(danny.email);
console.log(image);