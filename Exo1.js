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