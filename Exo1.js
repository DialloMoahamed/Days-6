// // Reponse numero 1
// // --------- Itérer de 0 à 10 ---------// 
// // --------- Boucle for ---------// 
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }


// // --------- Boucle while ---------// 
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// // --------- Boucle do while ---------// 
// let x = 0;
// do {
//     console.log(x);
//     x++
// } while (x <= 10)


// // Reponse numero 2
// // --------- Itérer de 10 à 0 ---------// 
// // --------- Boucle for ---------// 
// for (let z = 10; z >= 0; z--) {
//     console.log(z);
// }


// // --------- Boucle while ---------// 
// let y = 10;
// while (y >= 0) {
//     console.log(y);
//     y--;
// }
// // --------- Boucle do while ---------// 
// let m = 10;
// do {
//     console.log(m);
//     m--
// } while (m = 10)


// // Reponse numero 3
// // --------- Itérer de 0 à n ---------// 
// let n = 10;
// for (let o = 0; o <= n; o++) {
//     console.log(o);
// }


// // Reponse numero 4
// for (let a = 1; a <= 7; a++) {
//     console.log('#'.repeat(a));
// }


// // Reponse numero 5
// for(let l = 0; l <= 10; l++){
//     console.log(`${l} * ${l} = ${l * l}`)
//   }


//   // Reponse numero 6
//   for(let l = 0; l <= 10; l++){
//     console.log(`${l} ${l * l} ${l * l * l}`)
//   }


// // Reponse numero 7
// let q = 100;
// for (let w = 0; w <= q; w++) {
//     if (w % 2 === 0) {
//         console.log(w); 
//     }
// }


// // Reponse numero 8
// let h = 100;
// for (let v = 0; v <= h; v++) {
//     if (v % 2 !== 0) {
//         console.log(v); 
//     }
// }


// Reponse numero 9
// let compteure = 0;
// let val = 100;
//     for (let d = 2; d <= val; d++) {
//         for (let j = 2; j < d; j++) {
//             if (d % j === 0) {
//                 compteure = compteure + 1
//             }
//         }
//         if (compteure === 0) {
//             console.log(d ," est premier");
//         }
//         compteure = 0;
//     }



// // Reponse numero 10
// let somme = 0;
// for (let j = 0; j <= 100; j++) {
//     somme += j
// };
// console.log("La somme de tous les nombres de 0 à 100 est :", somme);


// // Reponse numero 11
// Les nombres paires et impaires
// let sommePaires = 0;
// let sommeImpaires = 0;
// for (let v = 0; v <= 100; v++) {
//         if (v % 2 === 0) {
//             sommePaires += v;
//     } else if (v % 2 !== 0){
//         sommeImpaires += v
//     }
// };  
// console.log("The sum of all evens from 0 to 100 is " + sommePaires + "." + "And the sum of all odds from 0 to 100 is " + sommeImpaires);


// //  Reponse numero 12

let newAr = [0,1 ,2 , 3, 4 ,5 ,6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
let som = 0;
let you = 0;
for (let v = 0; v < newAr.length; v++) {
        if (v % 2 === 0) {
            som += v;
    }  if (v % 2 !== 0) {
        you += v
    };
}; 
 console.log(Array(som , you));


// // Reponse numero 13
// console.log([Math.floor(Math.random()* 6)]);


// // Reponse numero 14
// let con = 5;
// for (let c = 0; c <= con; c++) {
//     if (c % 2 === 0) {
//         console.log([Math.floor(Math.random() * 6)]);
//     };
    
// }


// // // Reponse numero 14
// const characters = 'AZERTYUIJHGFDSQDFYUIJHGFDERTYUwxcvghjkloiuytrdfghjiiuezqsfghhjoigycdsufduzgffèuzuyzuyffzdzd';
// let randomId = '';
// for (let r = 0; r < 6; r++) {
//     let randomIndex = Math.floor(Math.random() * characters.length);
//     randomId += characters.charAt(randomIndex);
    
// };
// console.log(randomId);
