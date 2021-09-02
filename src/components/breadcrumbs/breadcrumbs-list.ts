export class BreadcrumbsItem {
    constructor(
        public title: string,
        public route: string
    ) { }
}

export const breadcrumbs: { [key: string]: BreadcrumbsItem[] } = {
    '/users': [
        new BreadcrumbsItem('Users', '/users')
    ],
    '/users/add': [
        new BreadcrumbsItem('Users', '/users'),
        new BreadcrumbsItem('Add', '')
    ],
    // TODO: regexp edit/[number]
    '/users/edit': [
        new BreadcrumbsItem('Users', '/users'),
        new BreadcrumbsItem('Edit', '')
    ],
    '/users/locked': [
        new BreadcrumbsItem('Users', '/users'),
        new BreadcrumbsItem('Locked', '')
    ],
    '/profile': [
        new BreadcrumbsItem('Profile', '')
    ],
};