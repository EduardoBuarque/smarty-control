export default {
    'SET_CATEGORIES': function (state, payload) {
        state.categories = payload
    },
    'ADD_CATEGORY': function (state, payload) {
        state.categories.push(payload)
    },
    'EDIT_CATEGORY': function (state, payload) {
        const { id } = payload

        state.categories.forEach((i) => {
            if (i.id == id) Object.assign(i, payload)
        })
    },
    'ADD_PRODUCT': function (state, payload) {
        state.categories.forEach(i => {
            if (i.id == payload.category_id)
                i.products.push(payload)
        })
    },
    'EDIT_PRODUCT': function (state, payload) {
        state.categories.forEach((category) => {
            category.products.forEach(i => {
                if (i.id == payload.id) Object.assign(i, payload)
            })
        })
    },
}