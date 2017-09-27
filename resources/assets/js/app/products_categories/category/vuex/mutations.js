export default {
    'CHANGE_USER': function (state, payload) {
        state.user.name = payload.name;
        console.log(state, payload)
    }
}