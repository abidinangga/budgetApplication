<template>
  <div class="divHome">
    <h1 class="main-h">Budget Application</h1>
      <div class="head">
        <div class="header-home">
          <div class="income">Income: Rp. {{ rupiah(dataIncome) }}</div>
          <div class="expense">Expense: Rp. {{ rupiah(dataExpense) }}</div>
          <div class="balence">Balence: Rp. {{ rupiah(dataTotal) }}</div>
        </div>
        <div class="header-right">
          <button class="buttonAdd">
            <router-link to="/add">Add</router-link>
          </button>
          <button @click.prevent="logout" class="logout">
            Logout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <table class="table1">
        <thead>
          <tr class="table1-tr">
            <th class="table1-th">No</th>
            <th class="table1-th">Category Transaction</th>
            <th class="table1-th">Description</th>
            <th class="table1-th">Type Transaction</th>
            <th class="table1-th">Amount</th>
            <th class="table1-th">Date</th>
            <th class="table1-th">Action</th>
          </tr>
        </thead>
        <tbody>
          <tableHome
            v-for="(data, index) in dataAll"
            :index="index"
            :key="data.id"
            :data="data"
          ></tableHome>
        </tbody>
      </table>
  </div>
</template>
<script>
import tableHome from "@/components/tableHome.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "home",
  components: {
    tableHome,
  },
  methods: {
    ...mapActions(useCounterStore, [
      "getAllTransactionAction",
      "incomeTransaction",
      "expenseTransaction",
      "totalTransaction",
    ]),
    logout() {
      localStorage.removeItem("access_token");
      this.$router.push("/");
    },
    rupiah(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  computed: {
    ...mapState(useCounterStore, ["dataAll", "dataIncome", "dataExpense", "dataTotal"]),
  },
  created() {
    this.getAllTransactionAction();
    this.incomeTransaction();
    this.expenseTransaction();
    this.totalTransaction();
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
.divHome{
  display: flex;
  flex-direction: column;
  background: rgb(255, 248, 243);
}
.header-home {
  margin-top: 0.5rem;
  display: flex;
  column-gap: 2rem;
  margin-bottom: 20px;
  padding-top: 2%;
  padding-bottom: 2%;
}
.header-right {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  column-gap: 0.5rem;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttonAdd {
  background-color: #9bb3b9;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
.logout {
  display: flex;
  align-items: center;
}
.icon {
  width: 30px;
  height: 30px;
}
.income {
  font-size: 1rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-align: center;
  box-shadow: 16px 5px 25px -5px rgba(102, 222, 147, 0.56);
  -webkit-box-shadow: 16px 5px 25px -5px rgba(102, 222, 147, 0.56);
  -moz-box-shadow: 16px 5px 25px -5px rgba(102, 222, 147, 0.56);
  padding: 20px 20px;
  background-color: rgb(102, 222, 147);
}
.expense {
  font-size: 1rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-align: center;
  box-shadow: 16px 5px 25px -5px rgba(255, 97, 109, 0.56);
  -webkit-box-shadow: 16px 5px 25px -5px rgba(255, 97, 109, 0.56);
  -moz-box-shadow: 16px 5px 25px -5px rgba(255, 97, 109, 0.56);
  padding: 20px 20px;
  background-color: rgb(255, 97, 109);
}
.balence {
  font-size: 1rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-align: center;
  box-shadow: 16px 5px 25px -5px rgba(255, 234, 201, 0.56);
  -webkit-box-shadow: 16px 5px 25px -5px rgba(255, 234, 201, 0.56);
  -moz-box-shadow: 16px 5px 25px -5px rgba(255, 234, 201, 0.56);
  padding: 20px 20px;
  background-color: rgb(255, 234, 201);
}
</style>
