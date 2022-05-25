<template>
  <div>
    <section>
      <div>
        <button>
          <router-link to="/home">Home</router-link>
        </button>
        <div>
          <h1>Budget Application<span></span></h1>
        </div>
        <form @submit.prevent="submitLogin" id="login_form" action="" method="POST">
          <label>Email</label>
          <input v-model="email" type="text" placeholder="roby@gmail.com" required />
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            name="password"
            placeholder="********"
            required
          />
          <button>
            <span>Login</span>
          </button>
        </form>
        <div>
          <p>belum punya akun?</p>
          <button>
            <router-link to="/register">Register</router-link>
          </button>
        </div>
      </div>
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
