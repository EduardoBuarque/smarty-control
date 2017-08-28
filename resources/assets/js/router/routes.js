import { routes as app } from '../app/index'

const root = [
    { path: '/', redirect: '/user' }
]

export default [ ...root, ...app ]