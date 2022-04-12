// Ch6. Classes 07

class Person4 {
  public readonly name: string = "Mark";
  private readonly country: string = "Korea";

  public constructor(public _name: string, private age: number) {
    // constructor(생성자)안에서만 readonly가 달려있는 private 프로퍼티의 값을 지정해줄 수 있지만 다른 곳에서는 에러가 난다. 
    this.country = "USA"
  }
  
  // error
  // hello() {
  //   this.country ="China";
  // }
}

const p4: Person4 = new Person4("Anna", 34);

console.log(p4.name); // get => get을 하는 함수 getter
// error 
// p4.name = "joeun"; // set => set을 하는 함수 setter

console.log(p4);