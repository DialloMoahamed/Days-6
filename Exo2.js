// Reponse numero 1
const characters = 'AZERTYUIJH12345678GFDSQDFYUIJHGFDER123456789TYUwxcvghjkloiuytrdfghjiiuezqsf123456789ghhjoigycdsufduzgf123456789fèuzuyzuyffzdzd';
let randomId = '';
for (let r = 0; r < 10; r++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
    
};
console.log(randomId);


// Reponse numero 2
const characterse = '#ee33df';
let randomIde = '';
for (let r = 0; r < 7; r++) {
    let randomIndexe = Math.floor(Math.random() * characterse.length);
    randomIde += characterse.charAt(randomIndexe);
    
};
console.log(randomIde);