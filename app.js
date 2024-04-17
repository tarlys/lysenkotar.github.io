const element = document.getElementById('main-block')
const options = {
  margin: 0.15,
  filename: 'myfile.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
}
// html2pdf().set(opt).from(element).save()

const button = document.querySelector('button')
button.addEventListener('click', (e) => {
  html2pdf().set(options).from(element).save()
})
