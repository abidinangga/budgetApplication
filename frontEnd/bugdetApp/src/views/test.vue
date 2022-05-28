<template>
<div id="my-pie-chart-container">
  <div id="my-pie-chart"></div>
  <div id="legenda">
    <div class="entry">
      <div id="color-brown" class="entry-color"></div>
      <div class="entry-text">pengeluaran</div>
    </div>
    <div class="entry">
      <div id="color-black" class="entry-color"></div>
      <div class="entry-text">pemasukan</div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "test",
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
#my-pie-chart-container {
  display: flex;
  align-items: center;
}

#my-pie-chart {
  background: conic-gradient(rgb(226, 140, 140) 0.00%, black 0.00% 0.55%, blue 0.55% 6.08%, green 6.08% 13.68%, yellow 13.68% 23.27%, orange 23.27% 40.47%, red 40.47%);
  border-radius: 50%;
    width: 150px;
    height: 150px;
}

#legenda {
  margin-left: 20px;
  background-color: white;
  padding: 5px;
}

.entry {
  display: flex;
  align-items: center;
}

.entry-color {
    height: 10px;
    width: 10px;
}

.entry-text {
  margin-left: 5px;
}

#color-red {
  background-color: red;
}

#color-orange {
  background-color: orange;
}

#color-yellow {
  background-color: yellow;
}

#color-green {
  background-color: green;
}

#color-blue {
  background-color: blue;
}

#color-black {
  background-color: black;
}

#color-brown {
  background-color: brown;
}
</style>