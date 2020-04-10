let parkingGate = {
    currentKeyFobScanned: "",
    currentPatronNameScanned: "",
    currentTimeKeyFobScanned: "",
    keyFobScannedInParkinglot: [],
    patronNameScannedInParkingLot: [],
    timePatronScannedInParkingLot: [],
    keyFobScannedOutofParkinglot: [],
    patronNameScannedOutOfParkingLot: [],
    timePatronScannedOutOfParkingLot: [],
    
    
    
    inScan: function() {
      if ( this.keyFobScannedInParkinglot.includes (this.currentKeyFobScanned)){
      console.log(
        `:::WARNING ${this.currentPatronNameScanned} DID NOT ENTER THE PARKING GARAGE!:::`
      );
     }else 
        this.keyFobScannedInParkinglot.push(this.currentKeyFobScanned);
        this.patronNameScannedInParkingLot.push(this.currentPatronNameScanned);
        this.timePatronScannedInParkingLot.push(this.currentTimeKeyFobScanned);
        console.log(
            `:::In The Parking Garage ${this.timePatronScannedInParkingLot}:::`
        );
        console.log(this.keyFobScannedInParkinglot);
        console.log(this.patronNameScannedInParkingLot);
    },
    outScan: function() {
        if ( this.keyFobScannedInParkinglot.includes (this.currentKeyFobScanned)){
            console.log(
              `:::WARNING ${this.currentPatronNameScanned} DID NOT ENTER THE PARKING GARAGE!:::`
            );
        }else
        this.keyFobScannedInParkinglot.splice
            this.keyFobScannedOutofParkinglot.push(this.currentKeyFobScanned);
            this.patronNameScannedOutOfParkingLot.push(this.currentPatronNameScanned);
            this.timePatronScannedOutOfParkingLot.push(this.currentTimeKeyFobScanned);
        console.log(
          `:::Out Of The Parking Garage ${this.timePatronScannedOutOfParkingLot}:::`
        );
        console.log(this.keyFobScannedOutofParkinglot);
        console.log(this.patronNameScannedOutOfParkingLot);
      
        
      }
    
  };
  function keyFobId(id, name, inout, time) {
    parkingGate.currentKeyFobScanned = id;
    parkingGate.currentPatronNameScanned = name;
    parkingGate.currentTimeKeyFobScanned = time;
    if (inout == "in") {
      parkingGate.inScan();
    } else if (inout == "out") {
      parkingGate.outScan();
    }
  }
  keyFobId("12345", "will", "in", "08:35");
  keyFobId("12345", "will", "out", "09:15");