<template>


<div class="add-smoothie container">

<h2 class="center-align indigo-text"> Add new smoothie recipe </h2>

<form v-on:submit.prevent="handleForm">

  <div class="field title">
       <label for="title"> Smoothie Title:</label>

       <input type="text" name="title" v-model="title">
  </div>

  <div class="field title add-ingredient" style="position:relative">


       <label for="add-ingredient"> Add Ingredient:</label>

       <div class= "added" v-for="(ing, index) in ingredients" v-bind:key="index">

        <span> {{ing}} </span>

        <i class="material-icons delete" style="font-size:15px" v-on:click="deleteIngredient(index)">delete</i>

       </div>



       <span style="font-size:12px;position:absolute; right:-300px; top:50px; color:gray "> Press the space key to add an ingredient </span>

       <input type="text" name="add-ingredient" v-on:keyup.space ="addIngredient" v-model="ingredient">
  </div>


<div class="center-align">


  <li v-for="error in errors"> {{error}}</li>

  <div><span v-show="message"> {{message}} </span></div>


<button class="btn pink" v-on:click="submit"> ADD SMOOTHIE</button>

 </div>

</form>

</div>

</template>



<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {

name:'AddSmoothie',

data:function(){

          return{

            title:null,
            ingredients: [],
            ingredient:null,
            errors:[],
            message:null,
            slug:null

        }
    },

    methods:{

      addIngredient:function(){

            if(this.ingredient){
            this.ingredients.push(this.ingredient)
            this.errors = []
          }else{
            this.errors.push('Ingredient cannot be empty')
          }


            this.ingredient=""
      },

      handleForm:function(){

      },

      submit:function(){

        if(!this.title || this.ingredients.length < 1){

          this.errors.push('Please fill in all the fields')
        }
        else {

          this.slug = slugify(this.title, {
          replacement:'-',
          lower:true})


          db.collection('smoothies').add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug

          }).then(() =>{


            this.$router.push({name:'Index'})
          }).catch(err =>{


            console.log(err)
          })

          this.title=""
          this.ingredients =[]
          this.message = "Your recipe was added!"



        }
      },

      deleteIngredient(index){

console.log('it ran')
        this.ingredients.splice(index,1)
      }
    }
}


</script>



<style>
.add-smoothie{

margin-top:60px;
 max-width:500px;
}

.add-smoothie .field{
  margin:20px auto;
}

.added{

  font-size:12px;
  color:gray;
}

.delete{
  cursor:pointer;
}

</style>
