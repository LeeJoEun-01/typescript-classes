abstract class AbstarctPerson {
  protected _name: string = "Mark";

  abstract setName(name: string): void;
}

// abstract class는 new로 생성할 수 없어 오류가 난다.
// new AbstarctPerson()

class Person12 extends AbstarctPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p12 = new Person12();
p12.setName("john");
console.log(p12);