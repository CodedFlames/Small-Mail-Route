<script setup>
import { router } from "../index";
import { ref, inject } from 'vue';

const logged = inject('logged');

function returns(){
  if (!logged.value){

    return false
  }else{
    router.push('/')
    return true
  }
}

</script>


<template>
      <!-- <p>
        <input @click="FirstFun()" type="button" value="Test">
        <router-link to="/">Go to Login</router-link>
        <router-link to="/Test">Go to Test</router-link>
      </p> -->
      <h1 style="color: red;" v-show="!returns()">Returning...</h1>
      <nav v-show="loggedin">
            <ul>
                <li><router-link to="/Home">inbox</router-link></li>
                <li><router-link to="/status">status</router-link></li>
            </ul>
        </nav>
      <router-view></router-view>
</template>


<style>
</style>
