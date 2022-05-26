<template>
  <div>
    <div>
      <label>Category Transaction</label>
      <select v-model="dataById.categoryTransactionId">
        <option value="1">Pemasukan</option>
        <option value="2">Pengeluaran</option>
      </select>
    </div>
    <div>
      <label>Transaction Amount</label>
      <input placeholder="100000" type="text" v-model="dataById.transactionAmount" />
    </div>
    <div>
      <label>Date</label>
      <input type="date" v-model="dataById.date" />
    </div>
    <div>
      <label>Category Type</label>
      <select v-model="dataById.categoryTypeId">
        <option value="1">Gaji</option>
        <option value="2">Bonus</option>
        <option value="4">Kesehatan</option>
        <option value="12">Makanan</option>
      </select>
    </div>
    <div>
      <label>Description</label>
      <textarea v-model="dataById.description"></textarea>
    </div>
    <div>
      <div class="inline-flex items-end">
        <button @click.prevent="submitEdit">Edit</button>
      </div>
      <div>
        <router-link to="/home">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "dataEdit",
  props: ["dataById"],
  methods: {
    ...mapActions(useCounterStore, ["editDataTransaction"]),
    async submitEdit() {
      try {
        const data = await this.editDataTransaction(this.dataById);
        this.$router.push("/home");
      } catch (error) {
        console.log("error: ", error);
      }
    },
  },
};
</script>

<style></style>
