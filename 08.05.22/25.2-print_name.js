obj = {
  name: "Moshe",
  printName() {
    console.log(this.name)
  },
  printNameAfterSec() {
    setTimeout(this.printName.bind(obj), 1000);
  }
}
obj.printName();
obj.printNameAfterSec();
