import './style.css';
import * as tools from './tools';

// return all codes that don't start with 5 or 2
const ex001 = () => {
	const codes = ['HD-182', 'HD-228', 'HD-744', 'HD-223', 'HD-532'];
	return codes.filter(m => /HD-[^52]../.test(m));
};

// return words with brackets
const ex002 = () => {
	const text = 'We [went] to the cinema where we [saw] a file then [ate] at a restaurant.';
	const words = text.match(/\[.*?\]/g);
	return words;
};

// return words without brackets
const ex003 = () => {
	const text = 'We [went] to the cinema where we [saw] a file then [ate] at a restaurant.';
	const words = text.match(/\[.*?\]/g);
	return words.map(m => m.replace('[', '').replace(']', ''));
};

// return words that start with "s" or "w" 
const ex004 = () => {
	const text = 'We [went] to the cinema where we [saw] a file then [ate] at a restaurant.';
	const words = text.match(/\[[sw][^[\]]*?\]/g);
	return words;
};

// replace words with ______ and list at end in random order
const ex005 = () => {
	const text = 'We [went] to the cinema where we [saw] a file then [ate] at a restaurant, when we [traveled] home on the train.';
	const text2 = 'Note that these [kinds] of [websites] do not allow you to use npm [packages], or easily use [Sass] or [TypeScript], etc.';
	const regex = /\[.*?\]/g;
	const words = text.match(regex).map(m => m.replace('[', '').replace(']', ''));
	const shuffledWords = tools.shuffle(words);
	const newText = text.replace(regex, '_____');
	return newText + ' ' + `(${shuffledWords.join(', ')})`;
};

// swap names
const ex006 = () => {
	const names = [
		"Herr Hans Schmidt",
		"Frau Anna Reinstedt",
		"Herr Stefan Wagner",
		"Frau Julia Weber",
		"Herr Markus Becker"
	];
	const names33 = [
		"Hans Schmidt",
		"Anna Reinstedt",
		"Stefan Wagner",
		"Julia Weber",
		"Markus Becker"
	];
	const newNames = names.map(m => m.replace(/(\w+)\s(\w+)\s(\w+)/, "$3, $2 ($1)"));
	return newNames;
};

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Regex Learn</h2>

<h2>ex001</h2>
${ex001().join(', ')}

<h2>ex002</h2>
${ex002().join(', ')}

<h2>ex003</h2>
${ex003().join(', ')}

<h2>ex004</h2>
${ex004().join(', ')}

<h2>ex005</h2>
${ex005()}

<h2>ex006</h2>
${ex006().join('<br>')}
`;