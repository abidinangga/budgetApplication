import { defineStore } from "pinia";
import axios from "@/api/axios";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({}),
  getters: {},
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
    },
    addTransactionAction(payload) {
      return axios.post(
        "/transaction",
        {
          categoryTransactionId: payload.categoryTransactionId,
          transactionAmount: payload.transactionAmount,
          date: payload.date,
          categoryTypeId: payload.categoryTypeId,
          description: payload.description,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
    },
  },
});
