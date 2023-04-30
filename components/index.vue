<script setup>
function test(){
    this.$router.push(`/Test`);
}
</script>


<template>
      <p>
        <input type="button" @click="test()" value="Test">
        <router-link to="/">Go to Login</router-link>
        <router-link to="/Test">Go to Test</router-link>
      </p>
      <router-view></router-view>
</template>


<style>
</style>
