<script setup>
import {default as router } from '../index.ts'

function FirstFun(){
    console.log("Button clicked.");
    router.push('/Test');
}
</script>


<template>
      <p>
        <input @click="FirstFun()" type="button" value="Test">
        <router-link to="/">Go to Login</router-link>
        <router-link to="/Test">Go to Test</router-link>
      </p>
      <router-view></router-view>
</template>


<style>
</style>
