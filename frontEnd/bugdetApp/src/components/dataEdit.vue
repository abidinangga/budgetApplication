<template>
  <div>
    <div>
      <label class="divLabel">Date</label><br />
      <input class="divInput" type="date" v-model="dataById.date" />
    </div>
    <div>
      <label class="divLabel">Category Transaction</label><br />
      <select class="div-select" v-model="dataById.categoryTransactionId" @change="category()">
        <option value="1">Pemasukan</option>
        <option value="2">Pengeluaran</option>
      </select>
    </div>
    <div>
      <label class="divLabel">Category Type</label><br />
      <select class="div-select" v-model="dataById.categoryTypeId">
        <option v-for="data in dataCategory" :key="data.id" :value="data.id">
          {{ data.categoryType }}
        </option>
      </select>
    </div>
    <div>
      <label class="divLabel">Transaction Amount</label><br />
      <input
        class="divInput"
        placeholder="100000"
        type="text"
        v-model="dataById.transactionAmount"
      />
    </div>
    <div>
      <label class="divLabel">Description</label><br />
      <textarea class="divInput" v-model="dataById.description"></textarea>
    </div>
    <div>
      <div>
        <button class="button-submit" @click.prevent="submitEdit">Edit</button>
      </div>
      <div>
        <router-link class="back" to="/home">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "dataEdit",
  data() {
    return {
      listCategory: [],
      categoryType: "",
    };
  },
  props: ["dataById"],
  methods: {
    ...mapActions(useCounterStore, ["editDataTransaction", "getCategory"]),
    async submitEdit() {
      try {
        const data = await this.editDataTransaction(this.dataById);
        this.$router.push("/home");
      } catch (error) {
        console.log("error: ", error);
      }
    },
    category() {
      this.listCategory = [];
      let data = this.dataCategory;
      data.filter((el) => {
        if (el.categoryTransactionId == this.categoryType) {
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
    this.categoryType = this.dataById.categoryTransactionId;
    if (this.categoryType) {
      this.category();
    }
  },
};
</script>

<style></style>
