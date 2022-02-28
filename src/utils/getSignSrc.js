export default function getSignSrc(letter) {
	return `signs/${letter === ' ' ? 'space' : letter}.png`;
}
