<template>
  <tr class="table1-tr">
    <td class="table1-td">{{ index + 1 }}</td>
    <td class="table1-td">{{ data.CategoryTransaction.categoryTransaction }}</td>
    <td class="table1-td">{{ data.description }}</td>
    <td class="table1-td">{{ data.CategoryType.categoryType }}</td>
    <td class="table1-td">Rp. {{rupiah(data.transactionAmount)}}</td>
    <td class="table1-td">{{ data.date }}</td>
    <td class="table1-td new">
      <button @click.prevent="editData(data.id)" class="button-edit">Edit</button>
      <button @click.prevent="deleteData(data.id)" class="button-delete">Delete</button>
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
