<template>
    <div class="divForm">
      <h1 class="main-h">Edit Transaction</h1>
      <div class="divForm-main">
      <editPage
      :dataById="dataById"
      >
      </editPage>
      </div>
    </div>
</template>

<script>
import editPage from "@/components/dataEdit.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "editForm",
  components: {
    editPage,
  },
  methods: {
    ...mapActions(useCounterStore, ["getTransactionById"]),
  },
  computed: {
      ...mapState(useCounterStore, ["dataById"]),
  },
};
</script>

<style></style>
