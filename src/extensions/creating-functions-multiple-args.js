// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function createNumberArray(lower, upper) {
  const array = []
  for (let i = lower; i <= upper; i++) {
    array.push(i)
  }
  return array
}

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function addExclamationMartsToString(string, number) {
  return string.toUpperCase() + '!'.repeat(number)
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function addTime(dateString, numOfMinutes) {
  // Resource:
  //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours
  //  https://stackoverflow.com/a/1214753

  const hoursMinutes = dateString.split(':')
  const hours = hoursMinutes[0]
  const minutes = hoursMinutes[1]

  const date = new Date()
  date.setHours(hours, minutes)

  // TODO: could probably be simplified
  const newDate = new Date(date.getTime() + numOfMinutes * 60000)
  let strHours = newDate.getHours().toLocaleString()
  let strMinutes = newDate.getMinutes().toLocaleString()

  if (strHours === '0') {
    strHours = '00'
  }

  if (strMinutes.length === 1) {
    strMinutes = '0' + strMinutes
  }

  return strHours + ':' + strMinutes
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: createNumberArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: addExclamationMartsToString, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
