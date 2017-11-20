export default {
    addProductToOrder ({ commit }, payload) {
        commit('ADD_PRODUCT_TO_ORDER', payload)
    },
    removeProductToOrder ({ commit }, payload) {
        commit('REMOVE_PRODUCT_TO_ORDER', payload)
    },
    removeProductsToOrder ({ commit }) {
        commit('REMOVE_PRODUCTS_TO_ORDER')
    },
    addCustomerToOrder ({ commit }, payload) {
        commit('ADD_CUSTOMER_TO_ORDER', payload)
    },
    cancelOrder ({ commit }) {
        commit('CANCEL_ORDER')
    }
}