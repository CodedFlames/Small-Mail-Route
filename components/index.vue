<script setup>
import { router } from "../index";
import { ref, inject } from 'vue';
import { store } from "./assets/store";

const logged = store.logged;


function returns(){
  console.log("CURRENTLY;",logged)
  if (!logged){
    console.log("IN RETURNS() INDEX.VUE, FALSE!");
    return false
  }else{
    console.log("returning TRUE");
    router.push('/');
    return true
  }
}

function test(){
  console.log("Logged:",logged);
}

</script>


<template>
      <!-- <p>
        <input @click="FirstFun()" type="button" value="Test">
        <router-link to="/">Go to Login</router-link>
        <router-link to="/Test">Go to Test</router-link>
      </p> -->
      <button @click="test()" style="text-align: center; color:blue;">TEST-BUTTON (fancy edition)</button>
      <h1 style="color: red;" v-show="returns()">Returning...</h1>
      <nav v-show="logged">
            <ul>
                <li><router-link to="/Home">inbox</router-link></li>
                <li><router-link to="/status">status</router-link></li>
            </ul>
        </nav>
      <router-view></router-view>
</template>


<style>
</style>
