<template>

  <!--<div class="" id="box">-->
    <!--<ul>-->
      <!--&lt;!&ndash;eslint-disable-next-line&ndash;&gt;-->
      <!--<li v-for="g in goods">-->
        <!--<div>-->
        <!--<img v-bind:src="g.img_url" alt="">-->
        <!--<h4 style="height:100px; width:260px;padding-left: 5px;-->
        <!--text-align: left;-->
        <!--text-overflow:ellipsis;-->
        <!--overflow: hidden;-->
        <!--white-space: nowrap;">-->
          <!--{{g.goods_desc}}</h4>-->
        <!--<p>price:{{g.price}} Cards</p>-->
          <!--<p>amount:{{g.amount}}</p>-->
          <!--<button @click="gotoBuy(g)" class="btn btn-success">Click to buy</button>-->
        <!--</div>-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->
  <div>
    <img v-bind:src="imgUrl" @click="gotoBuy()"/>
  </div>

</template>

// These components will use UserService to request data.

<script>



export default {
  name: 'Home',
  data() {
    return {
      imgUrl: ""
    };
  },
  created() {
    this.getImage();
  },
  methods:{
    getImage() {
      this.imgUrl = require('../assets/home_logo.gif')
    },
    gotoBuy(){
      this.$router.push('goodsList')
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