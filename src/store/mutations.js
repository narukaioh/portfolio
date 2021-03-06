
export default {
    'LOGIN' (state, payload) {
        state.user = payload.user
        state.token = payload.token
    },
    'LOGOUT' (state) {
        state.user = { name: '', email: '', level: ''}
        state.token = ''
    },
    'SET_TOKEN' (state, token) {
        state.token = token
    },
    'SET_USER' (state, user) {
        state.user.name = user.name
        state.user.email = user.email
    }
}