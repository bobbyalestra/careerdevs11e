 function fastFood() {
     let entrees =['Chicken Nuggs', 'Hamburgers', 'Chicken Sandwhich'];
     let sides = ['French fries', 'Onion Rings', 'Mozz Stickjs']
    let amountSold = [12, 32 ,7]
    for (i = 0; i < entrees.length; i++) {
        if (amountSold[i] < 20 ){
            console.log(`Bad Sales for ${entrees[i]}`)
        } else if (amountSold[i] > 20){
            console.log (`Good Sales for ${entrees[i]}`)
        }
    }
 }  console.log(fastFood())