<template>

  <div class="" id="box">
    <div>
      <img v-bind:src="g.img_url" alt="">
      <h4>{{this.g.goods_desc}}</h4>
      <p>price:{{this.g.price}}</p>
      <!--<p>amount:{{this.g.amount}}</p>-->
      <button @click="payment(g, $store.state.auth.user.id)" class="btn btn-success">Pay</button>
    </div>
  </div>

</template>

// These components will use UserService to request data.

<script>
import GoodsService from '../services/goods.service';



export default {
  name: 'buy',
  data() {
    return {
      g:{}
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    if (!this.currentUser) {
      this.$router.dispatch('/login');
    }
    let g_obj = JSON.parse(this.$route.query.g);
    if(g_obj){
      this.g = g_obj;
    }
  },
  methods:{
    getImage() {
      this.goods.forEach(item => {
        item.img_url = require('../../img/' + item.img_url)
      })
    },
    payment(_g, _buyerid){
      GoodsService.pay(_g, _buyerid);
      alert("Payment success!");
      this.$router.push({name:'home'})
    }
  }
};
</script>

<style>
  #box ul{
    display: flex;
    flex-wrap: wrap;
  }
  #box li{
    padding: 3px;
    list-style: none;
    margin-right: 15px;
    border: 1px solid #eee;
  }
  #box img{
    width: 200px;
    height: 150px;
  }
</style>