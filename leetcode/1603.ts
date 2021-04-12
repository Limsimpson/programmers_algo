// 1603. Design Parking System
class ParkingSystem {
  count:number[];
  constructor(big: number, medium: number, small: number) {
      this.count = [big, medium, small];
  }
  addCar(carType: number): boolean {
      return this.count[carType - 1]-- > 0;
  }
}