<template>
  <div class="container">
    <h1 class="main-h">Budget Application</h1>
    <section class="main">
        <form @submit.prevent="submitLogin"  method="POST" class="main-box">
           <p class="main-p">Login</p>
          <label class="main-label">Email</label>
          <input class="main-input" v-model="email" type="text" placeholder="roby@gmail.com" required />
          <label class="main-label">Password</label>
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
          <p class="footer-p">belum punya akun?</p>
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

<style>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(../assets/pict2.jpg);
}
.main-h {
  font-size: 2rem;
  font-weight: bold;
  color: black;
  text-align: center;
}
.main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-box{
  width: 50%;
  height: 50%;
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 246, 246);
  border-radius: 10px;

}
.main-p{
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-align: center;
}
.main-label{
  font-size: 1rem;
  font-weight: bold;
  color: black;
}
.main-input{
  width:70%;
  height: 5%;
  border: 1px solid #999;
  padding: 1%;
  margin: 1%;
  border-radius: 10px;
}
.main-button{
  margin-top: 8px;
  padding: 5px 10px;
}
.main-footer{
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-p{
  font-size: 1rem;
  font-weight: bold;
  color: black;
}
</style>
