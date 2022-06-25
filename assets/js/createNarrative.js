const read = document.querySelector('#read');
const write = document.querySelector('#write');
const input = document.querySelector('#input')
const textBox = document.querySelector('#textbox')
const output = document.querySelector('#output')

read.addEventListener('click', () => {
    let narrative = textBox.value
    input.classList.add('off');
    output.classList.remove('off');
    preview.textContent = narrative
})
write.addEventListener('click', () => {
    input.classList.remove('off');
    output.classList.add('off');
})