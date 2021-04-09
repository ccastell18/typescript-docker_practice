class Vehicle {
  
  protected honk(): void{
    console.log('beep')
  }
}

//a child class because it extends Vehicle
//drive is overwritten
class Car extends Vehicle {
  private drive(): void{
    console.log('vroom')
  }

  startDriving(){
    this.drive()
    this.honk()
  }
}

const car = new Car()

car.startDriving()
