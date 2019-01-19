<template>
  <div id="app">

    <Navbar/>

    <router-view/>


  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'
import Edit from '@/components/Edit'


export default {

  name: 'App',

  components:{

    Navbar:Navbar,
    Index:Index,
    AddSmoothie:AddSmoothie,
    Edit:Edit

  }
}
</script>

<style>

</style>
