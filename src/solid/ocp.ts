// OCP: 새로운 코드 추가는 허용하나 기존 코드 변경은 불허한다

// OCP 위반
function notOCP(type: string) {
  if (type === 'A') {
    console.log('A');
  } else if (type === 'B') {
    console.log('B');
  } else if (type === 'C') {
    console.log('C');
  }
}

// OCP 준수
interface Doable {
  do(): void;
}

function doOCP(doable: Doable) {
  doable.do();
}

const a: Doable = {
  do: () => {
    console.log('A');
  },
};

const b: Doable = {
  do: () => {
    console.log('B');
  },
};

const c: Doable = {
  do: () => {
    console.log('C');
  },
};

doOCP(a);
doOCP(b);
doOCP(c);
