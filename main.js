import './style.css';

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
	return words.map(m => m.replace('[','').replace(']',''));
};

// return words that start with "s" or "w" 
const ex004 = () => {
	const text = 'We [went] to the cinema where we [saw] a file then [ate] at a restaurant.';
	const words = text.match(/\[[sw][^[\]]*?\]/g);
	return words;
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
`;