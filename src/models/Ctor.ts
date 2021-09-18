import { CtorItemType } from "src/components/ctor/ctor-item/ctor-item.component";

export class Ctor {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    price: number;
    createdAt: Date;
    authorName: string;
    authorId: string;
    thumbId: number;
    tag: string;
    items: CtorItem[];
    isActive: boolean;

    constructor() {
        this.isActive = true;
        this.items = [];
        // this.items = [new CtorItem()];
    }
}

export class CtorItem {
    id: number;
    /** CtorItemType */
    type: string;
    value: string;
    ctorId: number;

    constructor(ctorId: number) {
        this.type = CtorItemType.Text;

        if (ctorId) {
            this.ctorId = ctorId;
        }
    }
}