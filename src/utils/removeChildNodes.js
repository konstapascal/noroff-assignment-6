export default function removeChildNodes(element) {
	while (element.hasChildNodes()) {
		element.removeChild(element.lastChild);
	}
}
