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
          <input
            v-model="email"
            type="text"
            name="username"
            placeholder="roby@gmail.com"
            required
          />
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
export default {};
</script>

<style></style>
