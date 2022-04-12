// Ch6. Classes 01~04

class Person {
  public name: string = "Mark";  // initialize 방법 1
  public age: number;  // age!: number; 느낌표의 의미 => 프로퍼티를 초기화하지 않아도 에러를 내지 않겠다

  // constructor(age: number) { // initialize 방법 2
  //   this.age = age;
  // }


  // 생성자
  public constructor(name: string, age?: number) { // ? => age가 꼭 정해져야 되는 것은 아니다
    if (age === undefined) {
      //따라서 age가 정해지지 않았을 경우로 따로 명시해주어야 에러가 안일어난다.
      this.name = name;
      this.age = 20;
    } else {
      this.name = name;
      this.age = age;
    }
  }

  // 메서드
  public async init() {

  }
}

const p1: Person = new Person("John",39); //object 

console.log(p1);