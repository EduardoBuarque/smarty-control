export default {
    changeUserDb (context, payload) {
        context.commit('CHANGE_USER', payload)
    }
}