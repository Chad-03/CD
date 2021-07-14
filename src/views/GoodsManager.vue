<template>
  <div>
  <div>
    <h2>Own goods for sale</h2>
  </div>

  <div class="" id="box">
    <ul>
      <!--eslint-disable-next-line-->
      <li v-for="g in goods">
        <div>
        <img v-bind:src="g.img_url" alt="">
        <h4 style="height:100px; width:260px;padding-left: 5px;
        text-align: left;
        text-overflow:ellipsis;
        overflow: hidden;
        white-space: nowrap;">
          {{g.goods_desc}}</h4>
        <p>price:{{g.price}} Cards</p>
          <p>amount:{{g.amount}}</p>
          <button @click="delete_goods(g)" class="btn btn-danger">Delete</button>
        </div>
      </li>
    </ul>
  </div>
  </div>

</template>

// These components will use UserService to request data.

<script>
import GoodsService from '../services/goods.service';



export default {
  name: 'GoodsManager',
  data() {
    return {
      goods: []
    };
  },
  mounted() {
    GoodsService.getSelfGoods(this.$store.state.auth.user.id).then(
            response=>{
              console.log("in home.vue response", response);
              this.goods = response.goods;
              this.getImage()
            }
    );
  },
  methods:{
    getImage() {
      this.goods.forEach(item => {
        item.img_url = require('../../img/' + item.img_url)
      })
    },
    delete_goods(_g){
      GoodsService.delete_goods(_g).then(
              response=>{
                console.log("in home.vue delete response", response);
              });
      GoodsService.getSelfGoods(this.$store.state.auth.user.id).then(
              response=>{
                console.log("in home.vue response", response);
                this.goods = response.goods;
                this.getImage()
              }
      );
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