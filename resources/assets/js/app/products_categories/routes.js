import Main from './components/main';

import { routes as categories } from './category'
import { routes as products } from './products'

const root = [
    {
        path: '/products_categories',
        component: Main,
        redirect: 'products_categories/products',
        children: [
            ...categories, ...products
        ]
    }
]

export default [ ...root ]