

// create a program that that iterates through all the numbers and console.logs each number.
// take the numbers split them in the middle, ake two numbers out of them, then add the two
// console log split num1 + split num2 = result
let array = [345064099452310, 3547733437503931, 63044262496301153, 3535973707123283, 5610679214989420, 3580317241716026, 5020153859835722, 6709712525550183, 374622022728140, 670986175365972569, 6304119761698289, 6706705436821051950, 3553525787841130, 3575121251368604, 30175314843966, 3588961184111703, 3576722477653148, 3532229038280489, 3528706627545352, 3583568908179851]



for (let i = 0; i < array.length && i < 1; i++){
    
    arr1 = array.splice(0,1)
    
    num1 = arr1.toString()
    num1 = num1.slice(-4)
    num2 = arr1.toString()
    num2 = num2.slice(-3)

          let result = (parseInt(num1) + parseInt(num2))
      
        console.log(`The First Number ${num1}`)
        console.log(`The Second Number ${num2}`)
        console.log(`The Total is : ${result}`)
}

// ////////  MAKING A SNACK REALLY QUICK JUST CALL FOR ME AND ILL RUN TO MY COMPUTER