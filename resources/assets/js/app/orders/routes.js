import Main from './components/main';
import NewCategory from './components/new-category'

export default [
    {
        path: '/orders', component: Main,
        children: [
            { path: 'categories/new', component: NewCategory }
        ]
    }
]