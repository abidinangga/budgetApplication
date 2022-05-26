<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ data.CategoryTransaction.categoryTransaction }}</td>
    <td>{{ data.description }}</td>
    <td>{{ data.CategoryType.categoryType }}</td>
    <td>Rp.{{rupiah(data.transactionAmount)}}</td>
    <td>{{ data.date }}</td>
    <td>
      <button @click.prevent="editData(data.id)">Edit</button>
      <button @click.prevent="deleteData(data.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "tableHome",
  props: ["data", "index"],
  methods: {
    ...mapActions(useCounterStore, ["deleteTransaction", "getTransactionById"]),
    rupiah(value){
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    deleteData(id) {
      this.deleteTransaction(id);
    },
    editData(id) {
      this.getTransactionById(id);
      this.$router.push("/edit");
    },
  },
};
</script>

<style></style>
