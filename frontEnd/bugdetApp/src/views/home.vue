<template>
  <div>
    <button>
      <router-link to="/add">Add</router-link>
    </button>
    <button>
      <router-link to="/edit">Edit</router-link>
    </button>
    <button @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
