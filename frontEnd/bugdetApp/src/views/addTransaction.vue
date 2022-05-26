<template>
  <div>
    <div>
      <div>
        <h1>Add Transaction</h1>
        <div>
          <label>Date</label>
          <input type="date" v-model="date" />
        </div>
        <div>
          <label>Category Transaction</label>
          <select v-model="categoryTransactionId" @change="category()">
            <option value="1">Pemasukan</option>
            <option value="2">Pengeluaran</option>
          </select>
        </div>
        <div>
          <label>Category Type</label>
          <select v-model="categoryTypeId" :disabled="!categoryTransactionId">
            <option v-for="data in listCategory" :key="data.id" :value="data.id">
              {{ data.categoryType }}
            </option>
          </select>
        </div>
        <div>
          <label>Transaction Amount</label>
          <input placeholder="100000" type="text" v-model="transactionAmount" />
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
import { mapActions, mapState } from "pinia";
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
      listCategory: [],
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["addTransactionAction", "getCategory"]),
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
    category() {
      this.listCategory = [];
      let data = this.dataCategory;
      data.filter((el) => {
        if (el.categoryTransactionId == this.categoryTransactionId) {
          this.listCategory.push(el);
        }
      });
    },
  },
  computed: {
    ...mapState(useCounterStore, ["dataCategory"]),
  },
  created() {
    this.getCategory();
  },
};
</script>

<style></style>
