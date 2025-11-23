// ISP: 인터페이스 분리 원칙
// 인터페이스는 자신을 사용하는 클라이언트를 기준으로 분리해야 한다.

// ISP 위반

interface Bird {
  fly(): string;
  tweet(): string;
}

// class Owl implements Bird {
//   fly() {
//     return 'Owl can fly';
//   }
//   tweet() {
//     return 'Owl can tweet';
//   }
// }

// class Penguin implements Bird {
//   fly() {
//     throw new Error('Penguin cannot fly'); // 모든 새가 날 수 있는 것은 아니므로 분리가 필요
//   }
//   tweet() {
//     return 'Penguin can tweet';
//   }
// }

// ISP 준수
interface FlyingBird {
  fly(): string;
}

interface TweetingBird {
  tweet(): string;
}

class Owl implements FlyingBird, TweetingBird {
  fly() {
    return 'Owl can fly';
  }
  tweet() {
    return 'Owl can tweet';
  }
}

class Penguin implements TweetingBird {
  tweet() {
    return 'Penguin can tweet';
  }
}
