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
        </form>
        <div></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
