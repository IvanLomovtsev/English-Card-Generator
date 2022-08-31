function convert() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
                 // Сохраняем содержимое холста как файл и скачиваем
      canvas.toBlob(function(blob) {
         saveAs(blob, "hangge.png");
      });
    });
  }
  convert();