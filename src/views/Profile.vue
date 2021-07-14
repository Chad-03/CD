<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>
    <!--<p>-->
      <!--<strong>Token:</strong>-->
      <!--{{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}-->
    <!--</p>-->
    <p>
      <strong>username:</strong>
      {{currentUser.username}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <!--<p>-->
      <!--<strong>Coins:</strong>-->
      <!--{{currentUser.coins}}-->
    <!--</p>-->
    <!--<strong>Authorities:</strong>-->
    <!--<ul>-->
      <!--<li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      console.log("123123",this.$store.state.auth.user);
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.dispatch('/login');
    }
  }
  
};


</script>