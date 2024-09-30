// Reponse numero 1
// --------- Itérer de 0 à 10 ---------// 
// --------- Boucle for ---------// 
for (let i = 0; i <= 10; i++) {
    console.log(i);
}


// --------- Boucle while ---------// 
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
// --------- Boucle do while ---------// 
let x = 0;
do {
    console.log(x);
    x++
} while (x <= 10)


// Reponse numero 2
// --------- Itérer de 10 à 0 ---------// 
// --------- Boucle for ---------// 
for (let z = 10; z >= 0; z--) {
    console.log(z);
}


// --------- Boucle while ---------// 
let y = 10;
while (y >= 0) {
    console.log(y);
    y--;
}
// --------- Boucle do while ---------// 
let m = 10;
do {
    console.log(m);
    m--
} while (m = 10)


// Reponse numero 3
// --------- Itérer de 0 à n ---------// 
let n = 10;
for (let o = 0; o <= n; o++) {
    console.log(o);
}


// Reponse numero 4
for (let a = 1; a <= 7; a++) {
    console.log('#'.repeat(a));
}


// Reponse numero 5
for(let l = 0; l <= 10; l++){
    console.log(`${l} * ${l} = ${l * l}`)
  }


  // Reponse numero 6
  for(let l = 0; l <= 10; l++){
    console.log(`${l} ${l * l} ${l * l * l}`)
  }


// Reponse numero 7
let q = 100;
for (let w = 0; w <= q; w++) {
    if (w % 2 === 0) {
        console.log(w); 
    }
}


// Reponse numero 8
let h = 100;
for (let v = 0; v <= h; v++) {
    if (v % 2 !== 0) {
        console.log(v); 
    }
}


// Reponse numero 9
for (let nombre = 2; nombre <= 100; nombre++) {
    let estPremier = true;
    for (let d = 2; d <= Math.sqrt(nombre); d++) {
      if (nombre % d === 0) {
        estPremier = false;
        break;
      }
    }
    if (estPremier) {
      console.log(nombre);
    }
  }


// Reponse numero 10
let somme = 0;
for (let j = 0; j < 100; j++) {
    somme += j
};
console.log("La somme de tous les nombres de 0 à 100 est :", somme);


// Reponse numero 11
// Les nombres paires et impaires
let newArr = [0,1 ,2 , 3, 4 ,5 ,6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
let sommes = 0;
for (let v = 0; v < newArr.length; v++) {
        if (v % 2 === 0) {
            sommes += v;
    }
};
let newArre = [0,1 ,2 , 3, 4 ,5 ,6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
let sommese = 0;
for (let t = 0; t < newArre.length; t++) {
    if (t % 2 !== 0) {
        sommese += t
    };
    
}    
 console.log("The sum of all evens from 0 to 100 is " + sommes + "." + "And the sum of all odds from 0 to 100 is " + sommese);


 // Reponse numero 12

let newAr = [0,1 ,2 , 3, 4 ,5 ,6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
let som = 0;
for (let v = 0; v < newAr.length; v++) {
        if (v % 2 === 0) {
            som += v;
    }
};
let newArres = [0,1 ,2 , 3, 4 ,5 ,6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
let sommeses = 0;
for (let t = 0; t < newArres.length; t++) {
    if (t % 2 !== 0) {
        sommeses += t
    };
    
}    
 console.log(Array(som , sommeses));


// Reponse numero 13
console.log([Math.floor(Math.random()* 5)]);