export default {
    setCategories ({ commit }, payload) {
        commit('SET_CATEGORIES', payload)
    },
    addCategory ({ commit }, payload) {
        commit('ADD_CATEGORY', payload)
    },
    editCategory ({ commit }, payload) {
        commit('EDIT_CATEGORY', payload)
    },
    addProduct ({ commit }, payload) {
        commit('ADD_PRODUCT', payload)
    },
    editProduct ({ commit }, payload) {
        commit('EDIT_PRODUCT', payload)
    }
}