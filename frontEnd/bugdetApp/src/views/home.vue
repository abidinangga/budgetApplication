<template>
  <div class="divHome">
    <button class="buttonAdd">
      <router-link to="/add">Add</router-link>
    </button>
    <button @click.prevent="logout">Logout</button>
    <div>
      <div class="income">Income: Rp. {{ rupiah(dataIncome) }}</div>
      <div class="expense">Expense: Rp. {{ rupiah(dataExpense) }}</div>
      <div class="balence">Balence: Rp. {{ rupiah(dataTotal) }}</div>
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
