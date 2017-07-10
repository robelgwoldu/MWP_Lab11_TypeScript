interface sides{
    width:number;
    length:number;
}


class Polygon{
    constructor(public sides:sides){}

    calcSize() {
        return this.sides.width * this.sides.length;
    }
}

let sides:sides = {
    length:5,
    width:2
}

class rectangle extends Polygon{
    constructor(){
        super(sides);
    }
}

let rec = new rectangle();
console.log(rec.calcSize());
