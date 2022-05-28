<template>
  <tr class="table1-tr">
    <td class="table1-td">{{ index + 1 }}</td>
    <td class="table1-td">{{ data.CategoryTransaction.categoryTransaction }}</td>
    <td class="table1-td">{{ data.description }}</td>
    <td class="table1-td">{{ data.CategoryType.categoryType }}</td>
    <td class="table1-td">Rp. {{ rupiah(data.transactionAmount) }}</td>
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
    ...mapActions(useCounterStore, [
      "deleteTransaction",
      "getTransactionById",
      "getAllTransactionAction",
      "incomeTransaction",
      "expenseTransaction",
      "totalTransaction",
    ]),
    rupiah(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    deleteData(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteTransaction(id);
          this.getAllTransactionAction();
          this.incomeTransaction();
          this.expenseTransaction();
          this.totalTransaction();
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    editData(id) {
      this.getTransactionById(id);
      this.$router.push("/edit");
    },
  },
};
</script>

<style></style>
