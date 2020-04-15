console.log(`..:::Welcome to Sally's Fruit Mart:::..`),

let = itemScanner = {
 
 
  fruitBarCodeScanned: "", // refers to the  parameters of the scanId "id"function
  fruitNameScanned: "", // refers to the  parameters of the scanId "name"function
  priceOfFruit: "", // refers to the  parameters of the scanId "price"function
  amountOfFruit: "", //  // refers to the  parameters of the scanId "amount"function
 
  fruitBarCodeInBasket: [],
  fruitNamesInBasket: [],
  
  fruitoutofBasket: [],
  fruitsInCart: [],
  
  allitemsScanned: [],
  allPricesScanned: [],
  totalCostOfItem : (this.priceOfFruit + this.priceOfFruit),

  totalFruitPrice : (this.amountOfFruit * this.priceOfFruit),//give me the total cost of the specific item
   
  
  totalSalesCost : (this.totalFruitPrice + this.totalFruitPrice),


  
  
  itemsScanned: function() {
    this.fruitBarCodeInBasket.push(this.fruitBarCodeScanned);
    this.fruitNamesInBasket.push(this.fruitNameScanned);
     
    console.log(`Fruit BarCode: ${this.fruitBarCodeScanned}`);
    console.log(`Fruit Name: ${this.fruitNameScanned}`);
    console.log(` You Have ${itemScanner.amountOfFruit}, ${this.fruitNameScanned} that costs ${totalCostOfItem} `)

  },
  
  itemsNotScanned: function() {
    if (this.fruitBarCodeScanned !== this.fruitoutofBasket)
      console.log(`!!!WARNING ${this.fruitNameScanned} HAS NOT BEEN SCANNED, PLEASE SCAN ITEM!!!!`);
    },
    
  
  }
      
function scanId(id, name, inout, amount, price) {
  itemScanner.fruitBarCodeScanned = id;
  itemScanner.fruitNameScanned = name;
  itemScanner.amountOfFruit = amount;
  itemScanner.priceOfFruit = price;
  totalCostOfItem = ((amount) * (price));
  
  if (inout == "in") {
    itemScanner.itemsScanned();
   
    
  } else if (inout !== "in") {
    itemScanner.itemsNotScanned();
  } 
  console.log(` ${""} `);
   
}


 
scanId("23456", "Bananas", "in", 3,4);
scanId("15754", "Strawberry", "in", 2,3);
scanId("54528", "Pineapple", "in", 1,5);
scanId("65464", "Raspberries", "in", 5 ,2);
scanId("18624", "Peaches", "in", 4, 4);


console.log (` <..::THANK YOU FOR SHOPPING AT SALLY'S::..> `);
console.log(` ${""} `); // adding a space
console.log(` That Cost a total cost  of your groceries is ${itemScanner.totalSalesCost} dollars`) 
console.log(` ${""} `);


//            NOT SCANNED YET
scanId("25941", "Watermelon", "out", 1,3);
scanId("84342", "Grapes", "out", 1,2);


