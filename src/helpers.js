export function randomArrayItem(data) {
	return data[Math.floor(Math.random() * data.length)];
}

export function formatPrice(cents) {
	return (cents / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	});
}

export function getRandomTagline() {
	const taglines = [
		'This could be your bucket list.',
		'This is a never ending story.',
		'This is your destiny.'
	];

	return randomArrayItem(taglines);
}
