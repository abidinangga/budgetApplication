<template>
  <div class="container">
    <h1 class="main-h">Budget Application</h1>
    <section class="main">
      <form @submit.prevent="submitRegist" method="POST" class="main-box">
        <p class="main-p">Register</p>
        <label class="main-label">Name:</label>
        <input
          class="main-input"
          v-model="username"
          type="text"
          placeholder="rich brian"
          required
        />
        <label class="main-label">Email:</label>
        <input
          class="main-input"
          v-model="email"
          type="text"
          placeholder="example@gmail.com"
          required
        />
        <label class="main-label">Password:</label>
        <input
          class="main-input"
          v-model="password"
          type="password"
          placeholder="********"
          required
        />
        <button class="main-button" type="submit">
          <span>Create Account</span>
        </button>
        <button class="main-button">
          <router-link to="/">Back</router-link>
        </button>
      </form>
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
        this.$swal({
          title: `Success Register`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } catch (error) {
        this.$swal({
          title: `Failed register`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    },
  },
};
</script>

<style></style>
