function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  console.log(this)
}

Square.prototype.isSquare = function() {
  if(this.a === this.c && this.b === this.d) {
    return true;
  }
  else {
    return false;
  }
 }

// True -  equal edges
const sqrEqual = new Square(4,8,4,8);
console.log(sqrEqual.isSquare());
// False - unequal
const sqrUnequal = new Square(4,6,10,3);
console.log(sqrUnequal.isSquare());
