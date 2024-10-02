let table = [4,8,7];
let somme = 0;
for (let i = 0; i < table.length; i++) {
    console.log('i = ', i);
    somme = table[i] + somme;
    console.log(somme);
}