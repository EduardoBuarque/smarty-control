export default {
    "ADD_PRODUCT_TO_ORDER": function (state, payload) {
        const product = state.order.products.find((i) => i.id == payload.id)
        if (!product) {
            state.order.products.push(Object.assign({quant: 1}, payload))
        } else {
            product.quant++
        }
    },
    "REMOVE_PRODUCT_TO_ORDER": function (state, payload) {
        const product = payload
        product.quant--

        if (!product.quant){
            const index = state.order.products.indexOf(product)
            state.order.products.splice(index, 1)
        }
    },
    "REMOVE_PRODUCTS_TO_ORDER": function (state) {
        state.order.products = []
    },
    "ADD_CUSTOMER_TO_ORDER": function (state, payload) {
        state.order.customer = payload
    },
    "CANCEL_ORDER": function (state) {
        state.order.customer = {}
        state.order.products = []
    },
}