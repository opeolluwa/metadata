export function inputError(elementSelector: string, errorMessage: string) {
    document.querySelector(elementSelector).innerHTML = errorMessage;
}