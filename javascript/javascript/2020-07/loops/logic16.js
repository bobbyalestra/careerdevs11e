let number = [345064099452310, 3547733437503931, 63044262496301153, 3535973707123283, 5610679214989420, 3580317241716026, 5020153859835722, 6709712525550183, 374622022728140, 670986175365972569, 6304119761698289, 6706705436821051950, 3553525787841130, 3575121251368604, 30175314843966, 3588961184111703, 3576722477653148, 3532229038280489, 3528706627545352, 3583568908179851]

for (let i = 0; i < number.length; i++){

let numString = number[i].toString();
let num1 = numString.substring(0, numString.length / 2);
let num2 = numString.substring(numString.length / 2 + 1);

parseInt(num1);
parseInt(num2);

let result = parseInt(num1) + parseInt(num2)
// console.log(num1)
// console.log(num2)

console.log( ` ${num1} +  ${num2} = ${result} ` )

}