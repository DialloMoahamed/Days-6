// Reponse numero 1
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
let table = [];
for (let i = 0; i < countries.length; i++) {
    table.push(countries[i]) ;
}
console.log(table);



// Reponse numero 2
let tableA = [];
for (let j = 0; j < countries.length; j++) {
    tableA.push(countries[j]) ;
}
console.log(table);

let sortedCountries = tableA.sort();
console.log(sortedCountries);


// Reponse numero 3
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let tableB = webTechs.sort();
  console.log(tableB);
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  let tableC = mernStack.sort();
  console.log(tableC);