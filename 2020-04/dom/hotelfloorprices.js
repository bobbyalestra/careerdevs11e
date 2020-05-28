
function hotelthings(name, roomNum, nightsNum, inout){


let floorLevel = roomNum.toString();
floorLevel = floorLevel[0];
console.log(floorLevel);
let roomBaseCost = 250;
let perNightCost = (50 * (parseInt(floorLevel, 10)-1)) + roomBaseCost;
let totalPrice = nightsNum*perNightCost;


for (i =0 ; i < floorLevel; totalPrice = i + 50);

console.log(`${name} is staying in room # ${roomNum} $(${perNightCost}) for ${nightsNum} for a total of $${totalPrice}.`)
}
hotelthings("Margie", 211, 3, "in");





