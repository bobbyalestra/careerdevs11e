let = securityScanner = {
  currentBadgeIdScanned: "", // key: Value (property / kv pair)
  currentEmployeeNameScanned: "",
  badgeIdInBuilding: [],
  employeeNameInBuilding: [],
  badgeIdOutBuilding: [],
  employeeNameOutBuilding: [],
  inScan: function() {
    this.badgeIdInBuilding.push(this.currentBadgeIdScanned);
    this.employeeNameInBuilding.push(this.currentEmployeeNameScanned);
    console.log(`:::::In The Building::::`);
    console.log(`ID's: ${this.badgeIdInBuilding}`);
    console.log(`Name's: ${this.employeeNameInBuilding}`);
  },
  outScan: function() {
    if (this.badgeIdInBuilding == this.currentBadgeIdScanned) {
      this.badgeIdOutBuilding.push(this.currentBadgeIdScanned);
      this.employeeNameOutBuilding.push(this.currentEmployeeNameScanned);
      console.log(`::::Out The Building::::`);
      console.log(`ID's: ${this.badgeIdOutBuilding}`);
      console.log(`Name's: ${this.employeeNameOutBuilding}`);
    } else if (this.currentBadgeIdScanned !== this.badgeIdOutBuilding)
      console.log(
        `!!!WARNING  Badge Number: ${this.currentBadgeIdScanned}  Employee: ${this.currentEmployeeNameScanned} DID NOT ENTER THE BUILDING!!!`
      );
  }
};

// end of object
function scanId(id, name, inside) {
  securityScanner.currentBadgeIdScanned = id;
  securityScanner.currentEmployeeNameScanned = name;
  
  if (inside == "inside") {
    securityScanner.inScan();
    }
}
function scanId(id, name, out) {
  securityScanner.currentBadgeIdScanned = id;
  securityScanner.currentEmployeeNameScanned = name;

  if (out == "out") {
    securityScanner.outScan();
    }
}


scanId("12345", "Arneezy", "inside");
//scanId("12345", "Arneezy", "out");
scanId("56692", "Jamie", "inide");
//scanId("56692", "Jamie", "out");
scanId("78447", "Bobby", "inside");
//scanId("78447", "Bobby", "out");
scanId("47894", "Margie", "inside");
//scanId("47894", "Margie", "out");
scanId("14514", "Chelsea", "inside");
//scanId("14514", "Chelsea", "out");
//scanId("69856", "Joe", "inside");
scanId("69856", "Joe", "out");
//scanId("87234", "Lord 9th", "inside");
scanId("87234", "Lord 9th", "out");
