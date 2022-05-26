<template>
  <div>
    <div>
      <div>
        <h1>Add Transaction</h1>
        <div>
          <label>Category Transaction</label>
          <select v-model="categoryTransactionId">
            <option value="1">Pemasukan</option>
            <option value="2">Pengeluaran</option>
          </select>
        </div>
        <div>
          <label>Transaction Amount</label>
          <input placeholder="100000" type="text" v-model="transactionAmount" />
        </div>
        <div>
          <label>Date</label>
          <input type="date" v-model="date" />
        </div>
        <div>
          <label>Category Type</label>
          <select v-model="categoryTypeId">
            <option value="1">Gaji</option>
            <option value="2">Bonus</option>
            <option value="4">Kesehatan</option>
            <option value="12">Makanan</option>
          </select>
        </div>
        <div>
          <label>Description</label>
          <textarea v-model="description"></textarea>
        </div>
        <div>
          <div class="inline-flex items-end">
            <button @click.prevent="submitAdd">Submit</button>
          </div>
          <div>
            <router-link to="/home">Back</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "addTransaction",
  data() {
    return {
      categoryTransactionId: "",
      transactionAmount: "",
      date: "",
      categoryTypeId: "",
      description: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["addTransactionAction"]),
    async submitAdd() {
      try {
        const transaction = await this.addTransactionAction({
          categoryTransactionId: this.categoryTransactionId,
          transactionAmount: this.transactionAmount,
          date: this.date,
          categoryTypeId: this.categoryTypeId,
          description: this.description,
        });
        this.$router.push("/home");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
