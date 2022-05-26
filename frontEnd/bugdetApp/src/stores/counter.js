import { defineStore } from "pinia";
import axios from "@/api/axios";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    dataAll: [],
    dataIncome: [],
    dataExpense: [],
    dataCategory: [],
    dataById: [],
  }),
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
    async getAllTransactionAction() {
      try {
        const data = await axios.get("/transaction", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataAll = data.data;
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async incomeTransaction(){
      try {
        const data = await axios.get("/transaction/income", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataIncome = data.data;
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async expenseTransaction(){
      try {
        const data = await axios.get("/transaction/expense", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataExpense = data.data;
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async getCategory(){
      try {
        const data = await axios.get("/category", {});
        this.dataCategory = data.data;
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async deleteTransaction(id){
      try {
        const data = await axios.delete(`/transaction/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async getTransactionById(id){
      try {
        const data = await axios.get(`/transaction/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataById = data.data;
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async editTransaction(payload){
    },
  },
});
