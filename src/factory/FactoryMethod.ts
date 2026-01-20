/**
 * OCP & SRP 만족하는 Factory Method Pattern
 */

// interface
abstract class AbstractGrimpanFactory{
    static createGrimpan(){
        throw new Error('Method not implemented.');
    }
}


abstract class Grimpan{
    // 하위 클래스에서 재정의 가능
    protected constructor(protected canvas: HTMLCanvasElement | null) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas is not found');
        }
    }

    static getInstance() {
    }
}

// concrete class
class ChromeGrimpan extends Grimpan{
    private static instance: ChromeGrimpan;

    static override getInstance() {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.getElementById('canvas') as HTMLCanvasElement);
        }
        return this.instance;
    }
}

class FirefoxGrimpan extends Grimpan{
    private static instance: FirefoxGrimpan;

    static override getInstance() {
        if (!this.instance) {
            this.instance = new FirefoxGrimpan(document.getElementById('canvas') as HTMLCanvasElement);
        }
        return this.instance;
    }
}

class ChromeGrimpanFactory extends AbstractGrimpanFactory{
    static override createGrimpan(): Grimpan {
        return ChromeGrimpan.getInstance();
    }
}

class FirefoxGrimpanFactory extends AbstractGrimpanFactory{
    static override createGrimpan(): Grimpan {
        return FirefoxGrimpan.getInstance();
    }
}

function main() {
    const chromeGrimpanFactory = ChromeGrimpanFactory.createGrimpan();
    const firefoxGrimpanFactory = FirefoxGrimpanFactory.createGrimpan();
}
