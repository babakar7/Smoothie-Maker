<template>

<div class="edit container" v-show="smoothie">

<h2> Edit {{smoothie.title}} Smoothie </h2>

<form v-on:submit.prevent="">

  <div class="field title">

       <label for="title"> Smoothie Title:</label>

       <input type="text" name="title" v-model="smoothie.title">


       <label > Ingredients</label>

       <input type="text" v-for="(ing,index) in smoothie.ingredients" v-bind:key="index" v-model="smoothie.ingredients[index]">



  </div>

  <button class="btn pink" v-on:click="submit"> UPDATE SMOOTHIE</button>





</form>



  </div>


</template>




<script>
import slugify from 'slugify'
import db from '@/firebase/init'
export default{

  name:'Edit',
  data(){

    return{

      smoothie:{}
    }
  },

  created(){

    let ref = db.collection('smoothies').where('slug', '==' , this.$route.params.slug)
    ref.get().then(snapshot =>{
      snapshot.forEach(doc => {

        this.smoothie = doc.data()
        this.smoothie.id = doc.id
        })
    })
  },

  methods:{

    submit(){

      this.smoothie.slug = slugify(this.smoothie.title, {
      replacement:'-',
      lower:true}),

      db.collection('smoothies').doc(this.smoothie.id).update({
        title: this.smoothie.title,
        ingredients: this.smoothie.ingredients,
        slug: this.smoothie.slug,

      }).then(() =>{


        this.$router.push({name:'Index'})
      }).catch(err =>{


        console.log(err)
      })



  }

  }


}

</script>



<style>



</style>
