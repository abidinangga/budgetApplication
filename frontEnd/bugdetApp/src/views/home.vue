<template>
  <div class="divHome">
    <button class="buttonAdd">
      <router-link to="/add">Add</router-link>
    </button>
    <button @click.prevent="logout">Logout</button>
    <div>
      <div>
        Pemasukan: {{dataIncome}}
      </div>
      <div>
        Pengeluaran: {{dataExpense}}
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Category Transaction</th>
            <th>Description</th>
            <th>Type Transaction</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
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
    ...mapActions(useCounterStore, ["getAllTransactionAction","incomeTransaction","expenseTransaction","totalTransaction"]),
    logout() {
      localStorage.removeItem("access_token");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState(useCounterStore, ["dataAll", "dataIncome", "dataExpense","dataTotal"]),
  },
  created() {
    this.getAllTransactionAction();
    this.incomeTransaction();
    this.expenseTransaction();
  },
};
</script>

<style></style>
