import Main from './components/main';
import NewProduct from './components/new-product'
import EditProduct from './components/edit-product'

export default [
    {
        path: '/products_categories/products',
        component: Main,
        children: [
            { path: 'new/:id', component: NewProduct },
            { path: ':id_cat/:id', component: EditProduct }
        ]
    }
]