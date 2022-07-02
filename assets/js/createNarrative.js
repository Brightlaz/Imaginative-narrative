const read = document.querySelector('#read');
const write = document.querySelector('#write');
const input = document.querySelector('#input')
const textBox = document.querySelector('#textbox')
const output = document.querySelector('#output');

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

const button = document.querySelector('#button')
button.addEventListener('click', () => {
    // var element = document.getElementById('canvas_div_pdf');
    html2pdf(output, {
        margin: 10,
        filename: 'create.pdf',
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 2,
            logging: true,
            dpi: 192,
            letterRendering: true
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    });
})