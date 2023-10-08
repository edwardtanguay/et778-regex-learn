import './style.css'

const ex001 = () => {
	const codes = ['HD-182', 'HD-128', 'HD-223', 'HD-532'];
	return codes.map(m => m);
}

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Regex Learn</h2>

<h2>ex001</h2>
${ex001().join(', ')}
`;