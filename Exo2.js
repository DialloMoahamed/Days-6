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


// Reponse numero 4
const countriese = [
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
for (let i = 0; i < countriese.length; i++) {
    newArr.push(countriese[i].toUpperCase());
}
console.log(newArr);


// Reponse numero 5
const arr = [];
for (let a = 0; a < countriese.length; a++) {
    arr.push(countriese[a].length);
}
console.log(arr);


// // Reponse numero 6
const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland',
    'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'
  ];
  
  const table = [];

for (const coun of countries) {
      const arre = coun[0]+coun[1]+coun[2];
      console.log(arre);
      table.push(arre)
}
console.log(table);

const GrosTableau = [];
for (let z = 0; z < countries.length; z++) {
    GrosTableau.push([countries[z] , table[z] , arr[z]]);
    
}
console.log(GrosTableau);


// // Reponse numero 7
for (let m = 0; m < countries.length; m++) {
    if (countries[m].includes('terre')) {
        console.log([countries[m]]);
    } else {
        console.log("Tous ces pays sont sans terre.");
    }
    
}


 // Reponse numero 8
 let tablev = []
for (let n = 0; n < countries.length; n++) {
    if (countries[n].endsWith('ia')) {
        tablev.push([countries[n]])
        console.log(tablev);
    }else {
        console.log('These are countries ends without ia');
    };
    
}


 // Reponse numero 9
 for (let n = 0; n < countries.length; n++) {
    if (countries[n].length > 7) {
        console.log(countries[n]);
    }
 }


// Reponse numero 10
let tableA = [];
for (let b = 0; b < countries.length; b++) {
    if (countries[b].length <= 5) {
        tableA.push(countries[b])
       console.log(tableA);
    }
 };


// Reponse numero 11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
for (let c = 0; c < webTechs.length; c++) {
    if (webTechs[c].length > 9) {
       console.log(webTechs[c]);
    }
 };


// Reponse numero 12
const tableC = [];
for (let a = 0; a < webTechs.length; a++) {
    tableC.push(webTechs[a].length);
}
const tableN = [];
for (let u = 0; u < webTechs.length; u++) {
    tableN.push([webTechs[u],tableC[u]])
    
}
console.log(tableN);


// Reponse numero 13
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronymeMERN = (mernStack[0][0] + mernStack[1][0] + mernStack[2][0] + mernStack[3][0])
console.log(acronymeMERN);


// Reponse numero 14
for (let p = 0; p < webTechs.length; p++) {
    console.log([webTechs[p]]); 
}


// Reponse numero 15
const fruit = ['banana', 'orange', 'mango', 'lemon'];
for (let f = 4; f >= 0; f--) {
    console.log(fruit[f]);
    
}