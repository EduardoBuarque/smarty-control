import { routes as app } from '../app/index'

const root = [
    { path: '/', redirect: '/users' }
]

export default [ ...root, ...app ]