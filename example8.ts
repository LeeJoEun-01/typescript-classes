// Ch6. Classes 08
// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}

class Students {
  // [index: string]: string;
  [index: string]: "male" | "female";
  // string 자리에는 male이나 female만 올 수 있다.

  mark: "male" = "male";
  //a나 b 그룹이나 mark는 항상 있고 항상 남자다.
}

const a = new Students();
a.jade = "male";

console.log(a);

const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(b);

