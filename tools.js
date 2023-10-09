export const shuffle = (items) => {
	const shuffledItems = [...items];
	shuffledItems.sort((a, b) => Math.random() - 0.5);
	return shuffledItems;
}