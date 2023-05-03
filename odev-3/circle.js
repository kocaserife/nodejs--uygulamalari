/* Daire alan : circleArea ve daire çevre : 
circleCircumference fonksiyonları içeren ve 
consola sonuçları yazdıran circle.js dosyası oluşturunuz. */

let pi = 3;

let r;

const circleArea = (r) => {
  return console.log(`Dairenin alanı: ${pi * r ** 2}`);
};

const circleCircumference = (r) => {
  return console.log(`Dairenin çevresi: ${2 * pi * r}`);
};

module.exports = { circleArea, circleCircumference };

