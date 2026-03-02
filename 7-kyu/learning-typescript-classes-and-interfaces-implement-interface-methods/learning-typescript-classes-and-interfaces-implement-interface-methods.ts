interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}
​
export class Square implements IGeometricFigure {
  private size = 0;
  
  constructor(size:number) {
    this.size = size;  
  }
  
  area = () => {
    return this.size*this.size;
  }
​
  perimeter = () => {
    return this.size*4;
  }
}
​
export class Circle implements IGeometricFigure {
   private radius = 0;
  
  constructor(radius:number) {
    this.radius = radius;  
  }
  
  area = () => {
    return Math.PI*this.radius*this.radius;
  }
​
  perimeter = () => {
    return 2*Math.PI*this.radius;
  }
}
​