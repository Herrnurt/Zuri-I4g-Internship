
// QUESTION 1: Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius. 

function convertFahrtoCelsius(f){
	

	if(typeof f === 'number'){
	f = (f - 32) * 5/9;
	return f.toFixed(4)
}
else if(Array.isArray(f)){
		return `${JSON.stringify(f)} is not a valid number but a/an Array`
}
else{
	return `${JSON.stringify(f)} is not a number but an ${typeof f}`
}

}
console.log(convertFahrtoCelsius({bolaji:2}))
console.log(convertFahrtoCelsius(0))


// QUESTION 2: Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.

function checkYuGiOh(n) {
    const myArr = [];
    if (isNaN(n)) {
      return `invalid parameter: ${n}`;
    }
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
        myArr.push("yu-gi-oh");
      } else if (i % 2 == 0 && i % 3 == 0) {
        myArr.push("yu-gi");
      } else if (i % 2 == 0 && i % 5 == 0) {
        myArr.push("yu-oh");
      } else if (i % 3 == 0 && i % 5 == 0) {
        myArr.push("gi-oh");
      } else if (i % 2 == 0) {
        myArr.push("yu");
      } else if (i % 3 == 0) {
        myArr.push("gi");
      } else if (i % 5 == 0) {
        myArr.push("oh");
      } else {
        myArr.push(i);
      }
    }
    return myArr;
  }
