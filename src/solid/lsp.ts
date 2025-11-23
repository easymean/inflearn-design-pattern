// LSP: 리스코프 치환 원칙
// 부모 객체를 자식 객체로 교체했을 때 타입 에러가 발생하면 안된다.

class Animal {
  constructor(public name: string) {}
}

class Bird extends Animal {
  fly() {
    return `${this.name} can fly`;
  }
}

class Penguin extends Bird {
  constructor() {
    super('Penguin');
  }
  //   override fly() {
  //     // LSP 위반: 타입 에러 발생
  //     throw new Error(`${this.name} cannot fly`);
  //   }

  override fly() {
    return `${this.name} cannot fly`;
  }
}

console.log(new Bird('Owl').fly());
console.log(new Penguin().fly());
// 부모 -> 자식으로 변경해도 타입에러가 발생하지 않아야 한다.
