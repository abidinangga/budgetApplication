import { defineStore } from 'pinia'
import axios from "@/api/axios";
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
  }),
  getters: {
  },
  actions: {
    registAction(payload) {
      console.log("payload: ", payload);
      return axios.post("/register", {
        username: payload.username,
        email: payload.email,
        password: payload.password,
      });
    },
    loginAction(payload) {
      return axios.post("/login", {
        email: payload.email,
        password: payload.password,
      });
    }
  }
})
