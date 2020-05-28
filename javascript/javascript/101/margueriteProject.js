function officeSpace() {
    let sites = ["Boston", "Cambridge", "Philedalphia", "Miami", "Providence", "Rotterdam", "Tokyo"];
    let netProfit = [500, 1000, 1456, 0, -500, 100, -100];
    let results = ["Keep open", "Shut Down", "Review Business Strategy"];
    for (i = 0; i < sites.length; i++) {
        if (netProfit[i] > 0) {
            console.log(`In ${sites[i]}, we should ${results[0]}.`);
        } else if (netProfit[i] === 0) {
            console.log(`In ${sites[i]}, we should ${results[2]}.`);
        } else if (netProfit[i] < 0) {
            console.log(`In ${sites[i]}, we should ${results[1]}`);
    }}
}
console.log(officeSpace())

function feliciasFruitByThePound() {
let fruitInventory = ["Kiwi", "Mango", "Dragonfruit", "Pineapple", "Apples", "Tomato"];
let fruitPricesPerPound = [.5, 2, 3, 2.5, 1.99, 3];
let fruitQuantitySold = [40, 30, 63, 41, 78, 21];
let results = ["Poor sales", "On mark", "Excellent Sales"]
for (let i = 0; i < fruitInventory.length; i++) {
    if (fruitPricesPerPound[i]*fruitQuantitySold[i] >= 90) {
        console.log(`${fruitInventory[i]}, -- ${results[2]}`);
    } else if (fruitPricesPerPound[i]*fruitQuantitySold[i] >= 40) {
        console.log(`${fruitInventory[i]}, -- ${results[1]}`);
    } else console.log(`${fruitInventory[i]}, -- ${results[0]}`);
}
}
console.log(feliciasFruitByThePound())