import Vue from 'vue'
import Vuex from 'vuex'
import { resetRouter } from '@/router'
import { sidebarStatus, token } from '@/utils/storage'
import LoginApi from "@/service/mainApis/LoginApi";

Vue.use(Vuex)

const loginApi = new LoginApi();

export default new Vuex.Store({
  state: {
    sidebar: {
      opened: sidebarStatus.get() ? !!+(sidebarStatus.get() || true) : true,
      withoutAnimation: false
    },
    device: 'desktop',

    token: token.get(),
    name: '',
    avatar: ''
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
      if (state.sidebar.opened) {
        sidebarStatus.set(1);
      } else {
        sidebarStatus.set(0);
      }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      sidebarStatus.set(0);
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },

    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },

    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        loginApi.login(username.trim(), password).then(response => {
          if (response.data) {
            const { data } = response;
            commit('SET_TOKEN', data);
            token.set(data);
            resolve();
          } else {
            reject(new Error());
          }
        }).catch(error => {
          reject(error);
        })
      })
    },
  
    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        resolve()
      })
    },
  
    // user logout
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        token.set("") // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      })
    },
  
    // remove token
    resetToken({ commit }) {
      return new Promise(resolve => {
        token.set("") // must remove  token  first
        commit('RESET_STATE')
        resolve()
      })
    }
  },
  modules: {
  }
})
