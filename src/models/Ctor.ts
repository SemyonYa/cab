import { CtorItemType } from "src/components/ctor/ctor-item/ctor-item.component";

export class Ctor {
    id: string;
    title: string;
    subtitle: string;
    createdAt: Date;
    authorName: string;
    authorId: string;
    thumb: number;
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

    constructor() {
        this.type = CtorItemType.Text;
    }
}