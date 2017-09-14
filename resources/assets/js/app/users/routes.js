import Main from './components/main';
import NewUser from './components/new-user'
import EditUser from './components/edit-user'

export default [
    {
        path: '/users',
        component: Main,
        children: [
            { path: 'new', component: NewUser },
            { path: ':id', component: EditUser }
        ]
    }
]