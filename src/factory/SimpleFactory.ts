/**
 * Simple Factory Pattern
 * SRP 위반: 클래스의 변경이유가 타입이 추가되거나(1) 각 인스턴스 생성자에 변경자가 생기는 경우(2)
 * 변경 이유가 2개이므로 단일책임 위반
 */
function grimpanFactory(type: string) {
    if (type === 'chrome') {
      return ChromeGrimpan.getInstance();
    } else if (type === 'firefox') {
      return FirefoxGrimpan.getInstance();
    } else if (type === 'edge') {
      return EdgeGrimpan.getInstance();
    } else {
      throw new Error('Invalid type');
    }
}
  
function main() {
    const chromeGrimpan = grimpanFactory('chrome');
    const firefoxGrimpan = grimpanFactory('firefox');
    const edgeGrimpan = grimpanFactory('edge');
  
    console.log(chromeGrimpan);
    console.log(firefoxGrimpan);
    console.log(edgeGrimpan);
}
  
class ChromeGrimpan {
    private static instance: ChromeGrimpan;

    private constructor(canvas: HTMLCanvasElement | null) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas is not found');
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.getElementById('canvas') as HTMLCanvasElement);
        }
        return this.instance;
    }
}

class FirefoxGrimpan {
    private static instance: FirefoxGrimpan;

    private constructor(canvas: HTMLCanvasElement | null) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas is not found');
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new FirefoxGrimpan(document.getElementById('canvas') as HTMLCanvasElement);
        }
        return this.instance;
    }
}

class EdgeGrimpan {
    private static instance: EdgeGrimpan;

    private constructor(canvas: HTMLCanvasElement | null) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas is not found');
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new EdgeGrimpan(document.getElementById('canvas') as HTMLCanvasElement);
        }
        return this.instance;
    }
}


