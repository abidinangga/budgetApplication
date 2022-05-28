<template>
  <div class="divForm1">
    <h1 class="main-h1">Add Transaction</h1>
    <div class="divForm-main1">
      <div>
        <label class="divLabel1">Date:</label>
        <br />
        <input class="divInput1" type="date" v-model="date" />
      </div>
      <div>
        <label class="divLabel1">Category Transaction:</label>
        <br />
        <select class="div-select1" v-model="categoryTransactionId" @change="category()">
          <option class="div-select1" value="1">Pemasukan</option>
          <option class="div-select1" value="2">Pengeluaran</option>
        </select>
      </div>
      <div>
        <label class="divLabel1">Category Type:</label><br />
        <select class="div-select1" v-model="categoryTypeId" :disabled="!categoryTransactionId" >
          <option v-for="data in listCategory" :key="data.id" :value="data.id">
            {{ data.categoryType }}
          </option>
        </select>
      </div>
      <div>
        <label class="divLabel1">Transaction Amount:</label><br />
        <input class="divInput1" placeholder="100000" type="text" v-model="transactionAmount" />
      </div>
      <div>
        <label class="divLabel1">Description:</label><br />
        <textarea class="divInput1" v-model="description" placeholder="beli makan malam"></textarea>
      </div>
      <div>
        <div >
          <button class="button-submit" @click.prevent="submitAdd">Submit</button>
        </div>
        <div>
          <router-link class="back" to="/home">Back</router-link>
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
