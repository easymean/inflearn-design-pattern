/**
 * 새로운 기능이 필요하면 새로운 클래스를 추가하면 된다.
 * 예를 들어 GrimpanHistory가 필요하다면 GrimpanHistoryFactory를 추가하면 된다.
 */

// interface
abstract class AbstractGrimpanFactory{
    static createGrimpan(){
        throw new Error('Method not implemented.');
    }

    static createGrimpanMenu(grimpan: Grimpan): GrimpanMenu {
        throw new Error('Method not implemented.');
    }
}

class ChromeGrimpanFactory extends AbstractGrimpanFactory{
    static override createGrimpan(): Grimpan {
        return ChromeGrimpan.getInstance();
    }

    static override createGrimpanMenu(grimpan: Grimpan): GrimpanMenu {
        return ChromeGrimpanMenu.getInstance(grimpan);
    }
}

class FirefoxGrimpanFactory extends AbstractGrimpanFactory{
    static override createGrimpan(): Grimpan {
        return FirefoxGrimpan.getInstance();
    }

    static override createGrimpanMenu(grimpan: Grimpan): GrimpanMenu {
        return FirefoxGrimpanMenu.getInstance(grimpan);
    }
}


abstract class Grimpan{
    // 하위 클래스에서 재정의 가능
    protected constructor(protected canvas: HTMLCanvasElement | null) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas is not found');
        }
    }
    abstract init(): void;

    static getInstance() {
    }
}


class ChromeGrimpan extends Grimpan{
    private static instance: ChromeGrimpan;
    override init(): void {
        throw new Error('Method not implemented.');
    }
    static override getInstance() {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.getElementById('canvas') as HTMLCanvasElement);
        }
        return this.instance;
    }
}

class FirefoxGrimpan extends Grimpan{
    private static instance: FirefoxGrimpan;
    override init(): void {
        throw new Error('Method not implemented.');
    }   
    static override getInstance() {
        if (!this.instance) {
            this.instance = new FirefoxGrimpan(document.getElementById('canvas') as HTMLCanvasElement);
        }
        return this.instance;
    }
}


function main() {
    const grimpan = ChromeGrimpanFactory.createGrimpan();
    const grimpanMenu = ChromeGrimpanFactory.createGrimpanMenu(grimpan);

    grimpan.init();
    grimpanMenu.init();
}


abstract class GrimpanMenu{
    grimpan: Grimpan;
    // 하위 클래스에서 재정의 가능
    protected constructor(grimpan: Grimpan) {
        this.grimpan = grimpan;
    }

    abstract init(): void;
    static getInstance(grimpan: Grimpan): GrimpanMenu {
        throw new Error('Method not implemented.');
    }
}

class ChromeGrimpanMenu extends GrimpanMenu{
    override init(): void {
        throw new Error('Method not implemented.');
    }
    static override getInstance(grimpan: Grimpan): GrimpanMenu {
        return new ChromeGrimpanMenu(grimpan);
    }
}

class FirefoxGrimpanMenu extends GrimpanMenu{
    override init(): void {
        throw new Error('Method not implemented.');
    }
    static override getInstance(grimpan: Grimpan): GrimpanMenu {
        return new FirefoxGrimpanMenu(grimpan);
    }
}  