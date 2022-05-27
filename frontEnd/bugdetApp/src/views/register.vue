<template>
  <div>
    <section>
      <div>
        <div>
          <h1>Budget Application</h1>
        </div>
        <form @submit.prevent="submitRegist" id="login_form" method="POST">
          <label>Name</label>
          <input v-model="username" type="text" placeholder="rich brian" required />
          <label class="text-sm font-medium">Email</label>
          <input v-model="email" type="text" placeholder="example@gmail.com" required />
          <label class="text-sm font-medium">Password</label>
          <input v-model="password" type="password" placeholder="********" required />
          <button type="submit">
            <span>Create Account</span>
          </button>
          <button class="buttonBack">
            <router-link to="/">Back</router-link>
          </button>
        </form>
        <div></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["registAction"]),
    async submitRegist() {
      try {
        await this.registAction({
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
