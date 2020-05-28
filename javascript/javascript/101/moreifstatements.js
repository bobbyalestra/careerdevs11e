function mustHave() {
    let essentials =['Clean Water', 'Bread', 'Milk', 'Rice'];
    let prices = [4, 2, 1.80, 12.50];
    for (i = 0; i < essentials.length; i++){
        if (prices[i] >= 10){
            return 'This is too expensive';
        }else if (prices[i] < 10){
            return 'I guess this will do'
        }
    }

}
console.log(mustHave());

function mustHave() {
    let essentials =['Clean Water', 'Bread', 'Milk', 'Rice'];
    let prices = [4, 2, 1.80, 12.50];
    for (i = 0; i < essentials.length; i++){
        if (prices[i] >= 10){
            consol.log (`${essentials[i]}`) 
        }else if (prices[i] < 10){
            return 'I guess this will do'
        }
    }

}
console.log(mustHave());

