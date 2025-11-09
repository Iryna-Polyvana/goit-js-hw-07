const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}
refs.input.addEventListener('input', () => {
    refs.output.textContent = refs.input.value.trim();
    if (refs.output.textContent === '') {
        refs.output.textContent = 'Anonymous'
    }
});
