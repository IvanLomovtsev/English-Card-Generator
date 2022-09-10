let word = document.querySelector('.word');
let transcription = document.querySelector('.transcription');
let translate = document.querySelector('.translate');
let num = 0;

function getNewWord() {
  const dectinary = 'json/dectinary.json';
  fetch(dectinary)
  .then(res => res.json())
  .then(data => { 
    for (let i=0; i<data.length; i++){
      console.log(data[0]['word']);
      word.textContent = data[i]['word'];
      transcription.textContent = data[i]['transcription'];
      translate.textContent = data[i]['translate'];
      convert();
    }
  })
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function convert() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
                 // Сохраняем содержимое холста как файл и скачиваем
      canvas.toBlob(function(blob) {
        num++;
        saveAs(blob, "card"+num+".png");
      });
    });
  }
getNewWord();