import { response } from "express"
import { stat } from "fs"
import AuthService from "../services/auth.service"
const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
    ? { status: { loggedIn: true}, user }
    : { status: { loggedIn: flase}, user: null}
export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess'. user)
                    return Promise.resolve(user)
                },
                error => {
                    commit('loginFailure')
                    return Promise.resolve(user)
                }
            )
        },
        logout({ commit }) {
            AuthService.logout()
            commit('logout')
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                response => {
                    commit('registerSuccess')
                    return Promise.resolve(response.data)
                },
                error => {
                    commit('registerFailure')
                    return Promise.reject(error)
                }
            )
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true
            state.user = user
        },
        loginFaliure(state, user) {
            state.status.loggedIn = false
            state.user = null
        },
        logout(state,) {
            state.status.loggedIn = false
        },
        registerSuccess(state) {
            state.status.loggedIn = false
        },
        registerFailure(state) {
            state.status.loggedIn = false
        }
    }
}