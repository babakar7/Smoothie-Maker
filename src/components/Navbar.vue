<template>

<div class= "navbar">
<nav class="nav-extended indigo darken-2" >

<div class="nav-content">

  <router-link v-bind:to="{name:'Index'}">

    <span> Ninja Smoothies </span>

  </router-link>

  <a class="btn-floating bt-large halfway-fab pink" href="">
    <router-link v-bind:to="{name:'add'}">
      <i class="material-icons">add</i>
     </router-link>

   </a>

 </div>



</nav>

</div>


</template>


<script>

export default{

  name:'Navbar',
  data:function(){

return{


}

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar nav{

  padding: 20px 20px;
}


</style>
