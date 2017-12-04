import Main from './components/main'
import NewCustomer from './components/new-customer'
import EditCustomer from './components/edit-customer'

export default [
    {
        path: '/config',
        component: Main,
        children: [
            { path: 'new', component: NewCustomer },
            { path: ':id/edit', component: EditCustomer }
        ]
    }
]