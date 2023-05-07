<script setup>
import { router } from "../../index"
import axios from 'axios';
// import * as dotenv from "dotenv";

let TryAgain = false;

function Check(){
    const data = event.target.elements;
    axios.get(`${import.meta.env.VITE_TESTIP}/pass/${data.Password.value}`).then((call)=>{
        console.log("In call.")
        console.log("STATUS:", call.data.status)
        if (call.data.status === false){
            TryAgain = true;
            console.log("INSIDE CHECK, VAL;",TryAgain);
        }else{
            router.push('/Test');
        }
    })
}


</script>


<template>
<section v-show="TryAgain" id="PassSection" class="container center col">
    <h1 class="Med">Mail-Route</h1>
    <h1 class="Small">Login</h1>
    <h3 class="red" >login failed, check your password.</h3>
    <form @submit.prevent="Check()" id="LoginForm" class="container col">
        <input placeholder="Username" class="Small" type="text" id="Username">
        <input placeholder="Password" class="Small" type="password" id="Password">
        <input id="SubmitLog" type="submit" value="Enter">
    </form>
</section>
</template>


<style>

.red{
    color: red;
}

#SubmitLog{
    align-self: center;
    height: auto;
    width: 60px;
}

html{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#PassSection{
    box-shadow: 0px 0px 10px 5px black;
    margin: 0%;
    height: 350px;
    width: 300px;
}

#Username,#Password{
    margin: 10px;
}

</style>