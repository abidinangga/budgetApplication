<template>
  <div class="container">
    <h1 class="main-h">Budget Application</h1>
    <section class="main">
        <form @submit.prevent="submitLogin"  method="POST" class="main-box">
           <p class="main-p">Login</p>
          <label class="main-label">Email:</label>
          <input class="main-input" v-model="email" type="text" placeholder="roby@gmail.com" required />
          <label class="main-label">Password:</label>
          <input
            v-model="password"
            type="password"
            name="password"
            class="main-input"
            placeholder="********"
            required
          />
          <button class="main-button">
            <span>Login</span>
          </button>
        <div class="main-footer">
          <p class="footer-p">don't have an account?</p>
          <button class="main-button">
            <router-link to="/register">Register</router-link>
          </button>
        </div>
        </form>
    </section>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["loginAction"]),
    async submitLogin() {
      try {
        const data = await this.loginAction({
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("access_token", data.data.access_token);
        this.$router.push("/home");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
