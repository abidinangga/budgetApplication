<template>
  <div class="divForm">
    <h1 class="main-h">Add Transaction</h1>
    <div class="divForm-main">
      <div>
        <label class="divLabel">Date:</label>
        <br />
        <input class="divInput" type="date" v-model="date" />
      </div>
      <div>
        <label class="divLabel">Category Transaction:</label>
        <br />
        <select class="div-select" v-model="categoryTransactionId" @change="category()">
          <option class="div-select" value="1">Pemasukan</option>
          <option class="div-select" value="2">Pengeluaran</option>
        </select>
      </div>
      <div>
        <label class="divLabel">Category Type:</label><br />
        <select class="div-select" v-model="categoryTypeId" :disabled="!categoryTransactionId">
          <option v-for="data in listCategory" :key="data.id" :value="data.id">
            {{ data.categoryType }}
          </option>
        </select>
      </div>
      <div>
        <label class="divLabel">Transaction Amount:</label><br />
        <input class="divInput" placeholder="100000" type="text" v-model="transactionAmount" />
      </div>
      <div>
        <label class="divLabel">Description:</label><br />
        <textarea class="divInput" v-model="description"></textarea>
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

<style>


.divForm {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(253, 246, 236);
  border-radius: 10px;
  opacity: 0.8;
}
.divForm-main {
  width: 30%;
  height: 70%;
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(183, 202, 219);
  border-radius: 10px;
  opacity: 0.8;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}
.divInput {
  margin: 2px;
  padding: 1px;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: solid 1px gray;
  font-family: 'Courgette', cursive;
}
.div-select {
  margin: 2px;
  padding: 5px;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: solid 1px gray;
  font-family: 'Courgette', cursive;
}
.button-submit {
  background: #34f03a;
  color: rgb(2, 0, 0);
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  border-radius: 5px;
  margin: 1px 5px;
  border: solid 1px gray;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  font-family: 'Courgette', cursive;
}
.divLabel {
  margin: 2px;
  padding: 1px;
  width: 50%;
  height: 20px;
  font-size: 15px;
  font-weight: bold;
  color: rgb(0, 0, 0);
}
.back{
  margin: 5px 5px;
  padding: 4px;
  width: 50%;
  height: 20px;
  font-size: 15px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background: red;
  border-radius: 5px;
  border: solid 1px gray;
  font-family: 'Courgette', cursive;
}
</style>
