export interface MenuItem {
    id: number,
    title: string,
    route?: string,
    expanded: boolean,
    children?: MenuItem[]
    action?(): void;

    // constructor(
    //     public id: number,
    //     public title: string,
    //     public route: string,
    //     public isActive: boolean = false,
    //     public children: MenuItem[] = []
    // ) { }

}