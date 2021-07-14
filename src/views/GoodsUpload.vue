<template>
<div>
    <label>goods name:</label>
    <input type="text" v-model="goods_name"><br><br>
    <label>goods description:</label>
    <input type="text" v-model="goods_desc"><br><br>
    <label>price:</label>
    <input type="text" v-model="price"><br><br>
    <label>image:</label>
    <!--<input type="file" @change="Preview($event)" accept="image/*" ref="showinput"><br><br>-->
    <!--<input type="file"  @change.prevent.stop="upload"><br><br>-->

    <!--<input type="file" name="file" id="file" class="inputfile" />-->
    <!--<label for="file" class='btn btn-success'>Choose a file</label><br><br>-->
    <button @click="submitForm($event)">Submit</button>
</div>

</template>

// These components will use UserService to request data.

<script>
// import GoodsService from '../services/goods.service';



export default {
  name: 'GoodsManager',
  data() {
    return {
      goods_name:"",
      goods_desc:"",
      img:"",
      price: 0.0,
      loading:false

    };
  },
  mounted() {
  },
  methods:{
    submitForm(){

    }

};
</script>

<style>
.inputfile {
  position:absolute;clip:rect(0 0 0 0);
}
</style>