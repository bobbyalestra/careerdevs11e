 
 
 
 
 
 diabetesScanner = {
  todaysTime: "", // refers to the  parameters of the scanId "id"function
  todaysDay: "", // refers to the  parameters of the scanId "name"function
  currentBG: "", // refers to the  parameters of the scanId "carbCorrection"function
  currentBG: "", //  // refers to the  parameters of the scanId "amount"function
  todaysTimesingroup: [],
  todaysDayingroup: [],
  lowBGlevel: [],
  highBGlevel: [],
  allitemsScanned: [],
  totalmathdone : (this.currentBG * this.currentBG),//give me the total of the specific item
  
timeOfDay : ['Morning', 'Afternoon', 'Night', 'Midnight', 'TwoAM' ],

  
  setupLocalStorage: function (){
    if (Boolean(localStorage.getItem('name'))){
                    
      let hotelString = localStorage.getItem('name')
      hotel = JSON.parse(hotelString);

} else{
      localStorage.setItem('name', JSON.stringify(name));
  }
  },

  
  
  itemsScanned: function() {
    
    this.todaysTimesingroup.push(this.todaysTime);
    this.todaysDayingroup.push(this.todaysDay);
     
    console.log(`Time: ${this.todaysTime}`);
    console.log(`Today is: ${this.todaysDay}`);
    console.log(` Arons BG levels were ${diabetesScanner.currentBG}, on ${this.todaysDay} with a correction factor of `)

  },
  
  itemsNotScanned: function() {
    if (this.todaysTime !== this.lowBGlevel)
      console.log(`!!!WARNING ARON HAS HIGH BG!!!`);
    },
    
  //
  }  
  function scanId(id, name, inout, amount, carbCorrection) {
  diabetesScanner.todaysTime = id;
  diabetesScanner.todaysDay = name;
  diabetesScanner.currentBG = amount;
  diabetesScanner.currentBG = carbCorrection;
  totalCostOfItem = (((amount) - (carbCorrection)) / 350);
  correctionCarbFormula = ((amount - 180) /350 )


  if (inout == "in") {
    diabetesScanner.itemsScanned();
   console.log(totalCostOfItem)
    
  } else if (inout !== "in") {
    diabetesScanner.itemsNotScanned();
  } 
  console.log(` ${""} `);
}




 
scanId("730", "Monday", "in", 465, 150);
scanId("1000", "Tuesday", "in",387, 150);
scanId("1500", "Wedneday", "in", 435, 150);
scanId("1600", "Thursday", "in",  512, 150);
scanId("1900", "Friday", "in", 416, 150);
scanId("1600", "Saturday", "in",  512, 150);
scanId("1900", "Sunday", "in", 416, 150);

console.log (` <..::THERE IS NOTHING IN THE WORLD MOMMY AND DADDY WOULDNT DO FOR YOU!::..> `);
console.log(` ${""} `); // adding a space

console.log(` ${""} `);


//            1000 current 1111

// car decrease 350 -325

    
  function carbCorrect() {
    
    // let currentBG = document.carbCorrectionCalc.bgLevels;
    let currentBG = document.carbCorrectionCalc.number;
    
     let carbCorrect = ((currentBG.value -150) /325);
        
    alert(carbCorrect);
  }
function carbCover(totalCarbs, insulinCarbRatio){
      let carbCover = document.carbCover.carb; 

       insulinToCarbCorrect = (totalCarbs / insulinCarbRatio);
      alert(carbCover);

     totalCarbs = 55;
     insulinCarbRatio = 180
  }

