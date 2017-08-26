import { routes as user } from '../modeules/user'
import { routes as client } from '../modeules/client'

const root = [
    { path: '/', redirect: '/user' }
]

export default [ ...root, ...user, ...client ]