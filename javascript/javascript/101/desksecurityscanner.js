let = securityScanner = {
    fruitIdScanned: "", // key: Value (property / kv pair)
    fruitNameScanned: "",
    fruitIdInBasket: [],
    fruitNamesInBasket: [],
    badgeIdOutBuilding: [],
    employeeNameOutBuilding: [],
    inScan: function() {
      this.fruitIdInBasket.push(this.fruitIdScanned);
      this.fruitNamesInBasket.push(this.fruitNameScanned);
      console.log(`:::::In The Building::::`);
      console.log(`ID's: ${this.fruitIdInBasket}`);
      console.log(`ID's: ${this.fruitNamesInBasket}`);
    },
    outScan: function() {
      if (this.fruitIdInBasket == this.badgeIdOutBuilding) {
        this.badgeIdOutBuilding.push(this.fruitIdScanned);
        this.employeeNameOutBuilding.push(this.fruitNameScanned);
        console.log(`::::Out The Building::::`);
        console.log(`ID's: ${this.badgeIdOutBuilding}`);
        console.log(`ID's: ${this.employeeNameOutBuilding}`);
      } else if (this.fruitIdScanned !== this.badgeIdOutBuilding)
        console.log(
          `!!!WARNING ${this.fruitNameScanned} DID NOT ENTER THE BUILDING!!!`
        );
    }
  };
  // end of object
  function scanId(id, name, inout) {
    securityScanner.fruitIdScanned = id;
    securityScanner.fruitNameScanned = name;
    if (inout == "in") {
      securityScanner.inScan();
    } else if (inout == "out") {
      securityScanner.outScan();
    }
  }
  scanId("23456", "Banana", "in");