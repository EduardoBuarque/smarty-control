import Main from './components/main';
import NewUser from './components/new-category'
import EditCategory from './components/edit-category'

export default [
    {
        path: 'categories',
        component: Main,
        children: [
            { path: 'new', component: NewUser },
            { path: ':id', component: EditCategory }
        ]
    }
]