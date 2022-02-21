const anthem = "Amar Sonar bangla Ami Tomay Valobashi Chirodin Tomar Akash Tomar Batash Amar Prane Bajay Bashi";
// split
const anotherPart = anthem.split("A");
// console.log(anotherPart);

// slice
const smallSlice = anthem.slice(14, 28);
// console.log(smallSlice);
// substr
const otherPart = anthem.substr(5, 8);
// console.log(otherPart);

// substring
const newPart = anthem.substring(15, 28);
// console.log(newPart);

// concat
const first = "qm";
const second = "tazmir";
const fullString = first.concat(second).concat("fazlul karim");
// console.log(fullString);

// join
const words = ['a', 'b', 'c', 'd', 'e'];
const alljoind = words.join('fazlul karim, ');
console.log(alljoind);
