import { CtorItemType } from "src/components/ctor/ctor-item/ctor-item.component";

export class Ctor {
    id: string;
    title: string;
    subtitle: string;
    createdAt: Date;
    authorName: string;
    authorId: string;
    thumbId: number;
    tag: string;
    items: CtorItem[];

    constructor() {
        this.items = [new CtorItem()];
    }
}

export class CtorItem {
    id: number;
    /** CtorItemType */
    type: string;
    value: string;
    ctorId: number;

    constructor(ctorId: number = null) {
        this.type = CtorItemType.Text;

        if (ctorId) {
            this.ctorId = ctorId;
        }
    }
}