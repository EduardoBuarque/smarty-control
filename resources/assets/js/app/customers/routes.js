import Main from './components/main'
import NewCustomer from './components/new-customer'
import EditCustomer from './components/edit-customer'

export default [
    {
        path: '/customers',
        component: Main,
        children: [
            { path: 'new', component: NewCustomer },
            { path: ':id/edit', component: EditCustomer }
        ]
    }
]