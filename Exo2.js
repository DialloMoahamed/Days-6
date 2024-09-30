// Reponse numero 1
const characters = 'AZERTYUIJH12345678GFDSQDFYUIJHGFDER123456789TYUwxcvghjkloiuytrdfghjiiuezqsf123456789ghhjoigycdsufduzgf123456789fèuzuyzuyffzdzd';
let randomId = '';
for (let r = 0; r < 10; r++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
    
};
console.log(randomId);


// Reponse numero 2
const characterse = '#ee33df'
let randomIde = '';
for (let r = 0; r < 7; r++) {
    let randomInde = Math.floor(Math.random() * characterse.length);
    randomIde += characterse.charAt(randomInde);
    
};
console.log(randomIde);


// Reponse numero 3
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let couleur = "rgb(" + r + "," + g + "," + b + ")";
console.log(couleur);


// Reponse numero 3
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const newArr = [];
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase());
}
console.log(newArr);