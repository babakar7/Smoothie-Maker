<template>

<div class="index container">


  <div class="card" v-for="smoothie in smoothies" v-bind:key="smoothie.id">

    <div class="card-content">

      <i class="material-icons delete" v-on:click="remove(smoothie.id)"> delete</i>


            <router-link v-bind:to="{name:'Edit', params:{slug:smoothie.slug}}">



              <i class="material-icons edit">edit</i>

             </router-link>



      <h2 class="indigo-text">  {{smoothie.title}}</h2>


      <ul class="ingredients" >


      <li v-for="(ing,index) in smoothie.ingredients" v:key="index">


        <span class="chip">{{ing}}  </span>

      </li>


      </ul>

    </div>
  </div>



</div>

</template>

<script>
// import what we exported in init
import db from '@/firebase/init'
export default {
  name: 'Index',
  data () {
    return {


      smoothies:[]
    }
  },

  methods:{

    remove:function(id){


      db.collection('smoothies').doc(id).delete()
      .then(() =>{

        this.smoothies = this.smoothies.filter(smoothie => {
                return smoothie.id !== id
              })
      })



    }
  },

  created:function(){

    db.collection('smoothies').get()
    .then(snapshot => {
      snapshot.forEach(doc =>{

// id doesnt come from data but doc
      //  console.log(doc.data(), doc.id)

      let smoothie = doc.data()

      smoothie.id = doc.id

      this.smoothies.push(smoothie)

      })
    })



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.index{

  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  margin-top:60px;

}

.card{
  flex-basis: 45%;
}


h2{

  font-size:25px;
  text-align:center;
}

.ingredients li {

  display:inline-block;
}

.delete{
position:absolute;
top:5px;
right:5px;
cursor:pointer;
color:#aaaa;


}


.edit{
position:absolute;
left:5px;
top:5px;

cursor:pointer;
color:#aaaa;

}

</style>
