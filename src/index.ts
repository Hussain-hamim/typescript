//************Static Members:
class Ride {
  //with static this property now belong to the class not the object(this)
  private static _activeRides: number = 0;

  // start(){this.activeRides++; }
  // now replace (this) with class name
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  // when we make a property or method static they become part of the class and will have only a single instance in memory
  static get activeRides() {
    return Ride._activeRides;
  }
}

// Ride.activeRides = 10; //it's readonly cuz it's static

let ride1 = new Ride();
ride1.start();
//and will have only a single instance in memory
let ride2 = new Ride();
ride2.start();

// now the activeRides property live on class only not object cuz it's static
console.log(Ride.activeRides);
