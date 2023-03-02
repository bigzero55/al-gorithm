// #1
let _string =  "NEGIE1"

function ReverseWithoutNumber (str) {
   const cutString = str.slice(0, 5);
   const cutNumber = str.slice(-1);
   const splitString = cutString.split("")
   const reverseArray = splitString.reverse()
   const joinArray = reverseArray.join("");
   return joinArray + cutNumber;
}

// #2

const sentence = "Saya sangat senang mengerjakan soal algoritma"

function getLogest (str) {
   let arrayNumber = []
   const _array =  str.split(" ")
    _array.map(elm => {
      arrayNumber.push(elm.length)
   })
   return Math.max(...arrayNumber)
}

console.log(getLogest(sentence))