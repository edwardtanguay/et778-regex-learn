import './style.css';

// return all codes that don't start with 5 or 2
const ex001 = () => {
	const codes = ['HD-182', 'HD-228', 'HD-744', 'HD-223', 'HD-532'];
	return codes.filter(m => /HD-[^52]../.test(m));
};

// nnn
const ex002 = () => {
	const regex1 = /(\[.*?\])/;
	const regex2 = new RegExp(regex1, 'gm');

	const text = 'We [went] to the cinema where we [saw] a file then [ate] at a restaurant.';
	
	const words = text.match(regex2);
	return words;
};

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Regex Learn</h2>

<h2>ex001</h2>
${ex001().join(', ')}

<h2>ex002</h2>
${ex002().join(', ')}
`;