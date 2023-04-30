<script setup>

</script>


<template>

<section id="PassSection" class="container center col">
    <h1 class="Med">Mail-Route</h1>
    <h1 class="Small">Login</h1>
    <form id="LoginForm" class="container col">
        <input placeholder="Username" class="Small" type="text" id="Username">
        <input placeholder="Password" class="Small" type="password" id="Password">
        <input id="SubmitLog" type="submit" value="Enter">
    </form>
</section>
</template>


<style>
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
    height: 300px;
    width: 300px;
}

#Username,#Password{
    margin: 10px;
}

</style>