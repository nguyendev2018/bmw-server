export function setTextContent(parent, selector, text) {
    const element = parent.querySelector(selector)
    element.textContent = text;
}