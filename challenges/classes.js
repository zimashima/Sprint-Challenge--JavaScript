// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker2 {
    constructor(dimensions){
        this.length = dimensions.length;
        this.width = dimensions.width;
        this.height = dimensions.height;
    }
    volume(){
      return this.length*this.width*this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length*this.height + this.width*this.height)
    }
}

//stretch it baby\

class CubeMaker extends CuboidMaker2{
    constructor(attrs){
        super(attrs);
    }
}

const cuboid1 = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  })

const cuboid2 = new CubeMaker({
    length: 20,
    width: 20,
    height: 20
  })
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid1.volume()); // 100
  console.log(cuboid1.surfaceArea()); // 130
  console.log(`This one was made using CubeMaker which is a Child class of CuboidMaker \n The Volume is ${cuboid2.volume()}`); // 100
  console.log(`This one was made using CubeMaker which is a Child class of CuboidMaker \n The Surface Area is ${cuboid2.surfaceArea()}`)
  
  