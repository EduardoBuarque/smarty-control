import { routes as app } from '../app/index'

const root = [
    { path: '/', redirect: '/orders' }
]

export default [ ...root, ...app ]