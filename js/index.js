// Iteration 1: Names and Input
const hacker1 = 'Aarón' 
console.log("The driver's name is " + hacker1)
const hacker2 = 'Ana'
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}characters`)
  }
  else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  }
  else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
// Iteration 3: Loops
let driverCapitals = ""

for (let i = 0; i < hacker1.length; i++) {
  
  let upperCaseLetter = hacker1[i].toUpperCase()
  
  if (i === 0) {
    driverCapitals = driverCapitals + upperCaseLetter
  } else {
    driverCapitals = driverCapitals + " " + upperCaseLetter
  }
  
}

console.log("driverCapitals", driverCapitals)

// Iteration 3.2    

let reversedName = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedName = reversedName + hacker1[i]
}

console.log("reversedName", reversedName)

// Iteration 3.3 lexicographic

let longestWord = ""
if (hacker1.length >= hacker2.length) {
  longestWord = hacker1
} else {
  longestWord = hacker2
}

for (let i = 0; i < longestWord.length; i++) {
  if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
    break;
  } else if (hacker1[i] < hacker2[i] ) {
    console.log(`The driver ${hacker1} goes first.`);
    break;
  } else if (hacker2[i] < hacker1[i] ) {
    console.log(`Yo, the navigator ${hacker2} goes first definitely.`)
    break;
  }

}

//BONUS1
const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`

let countWords = 0
let etCounter  = 0

for(i = 0; i < lorem.length; i++){
    if(lorem[i] === ' ') countWords ++
    if(lorem[i] === 'e' && lorem[i + 1] === 't') etCounter ++
}
console.log(countWords, etCounter)

//BONUS2

const phraseToCheck = "A man, a plan, a canal, Panama!"
const alphabet      = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let prhase = ''
let reversePrhase = ''

for(i = 0; i < phraseToCheck.length; i++){
    if(alphabet.includes(phraseToCheck[i].toLocaleLowerCase())) prhase += phraseToCheck[i]
}

for(i = phraseToCheck.length - 1; i >= 0; i--){
    if(alphabet.includes(phraseToCheck[i].toLocaleLowerCase())) reversePrhase += phraseToCheck[i]
}

if(prhase.toLocaleLowerCase() === reversePrhase.toLocaleLowerCase()){
    console.log(`The phrase ${phraseToCheck} is a palindrome`)
}else{
  console.log(`The phrase ${phraseToCheck} is not a palindrome`)
}




