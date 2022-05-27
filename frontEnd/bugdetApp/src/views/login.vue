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

<style>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(../assets/pict2.jpg);
  background-size: cover;
}
.main-h {
  font-size: 2rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-align: center;
  font-family:'Lobster', cursive;
}
.main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Courgette', cursive;
}
.main-box{
  width: 30%;
  height: 60%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(233, 228, 224);
  border-radius: 10px;
  opacity: 0.8;
}
.main-p{
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(2, 2, 2);
  text-align: center;
}
.main-label{
  font-size: 1rem;
  font-weight: bold;
  color: rgb(0, 0, 0);

}
.main-input{
  width:70%;
  height: 5%;
  border: 1px solid rgb(255, 255, 255);
  padding: 1%;
  margin: 1%;
  border-radius: 10px;

}
.main-button{
  margin-top: 1px;
  padding: 5px 10px;
  font-family: 'Courgette', cursive;
}
.main-footer{
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Courgette', cursive;
}
.footer-p{
  font-size: 1rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
}
</style>
