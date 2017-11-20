import { routes as users } from './users'
import { routes as customers } from './customers'
import { routes as products_categories } from './products_categories'
import { routes as orders } from './orders'

export default [ ...users, ...customers, ...products_categories, ...orders ]