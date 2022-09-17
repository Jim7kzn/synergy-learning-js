// 📁 sayLike.js
export function sayLike(user) {
	alert(`I like ${user}!`);
}

// 📁 main.js
import {sayLike} from './sayLike.js';

alert(sayLike);
sayLike('Javascript');
