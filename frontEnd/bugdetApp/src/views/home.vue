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
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </div>
    <table class="table1">
      <thead class="table-head">
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

<style></style>
