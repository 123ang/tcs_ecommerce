<template>

  <div class="navbar">
    <nav class="nav-extended" style="background-color:black !important">
      <div class="nav-content">
        <v-row>
          <v-col>
          <router-link :to="{ name: 'MainPage' }" >
            <img

              src="../assets/logo_TCS.webp"
              style="margin-left:100px;border: none;padding: 0;background: none;max-width:100px;max-height:100px;margin-top:20px;max-width:100px"
            >
          </router-link>
          </v-col>
         
          <v-toolbar-title>
    
          <v-col>

          
            <v-btn
              v-if="cn===false"
              text
              large
              color="white"
              height="100"
              @click="chinese"
            >中文</v-btn>
            <v-btn
              v-if="cn===true"
              text
              large
              color="white"
              height="100"
              @click="english"
            >English</v-btn>
          
            
            <v-btn       
              text
              large
              color="white"
              height="80"
              v-if="!cn"
              v-on:click="cart"
            >My Cart</v-btn>
            <v-btn       
              text
              large
              color="white"
              height="80"
              v-if=" cn"
              v-on:click="cart"
            >我的手推车</v-btn>
            
            <v-btn         
              text
              large
              color="white"
              height="80"
              v-if="!isLoggedIn && !cn"
              v-on:click="register"
            >Register</v-btn>
            <v-btn         
              text
              large
              color="white"
              height="80"
              v-if="!isLoggedIn && cn"
              v-on:click="register"
            >注册</v-btn>
            <v-btn       
              text
              large
              color="white"
              height="80"
              v-if="!isLoggedIn && !cn"
              v-on:click="login"
            >Login</v-btn>
            <v-btn       
              text
              large
              color="white"
              height="80"
              v-if="!isLoggedIn && cn"
              v-on:click="login"
            >登录</v-btn>
            <v-btn        
              text
              large
              color="white"
              height="80"
              v-if="isLoggedIn && !cn"
              v-on:click="logout"
            >Logout</v-btn>
                    <v-btn        
              text
              large
              color="white"
              height="80"
              v-if="isLoggedIn && cn"
              v-on:click="logout"
            >退出</v-btn>
          </v-col>
          </v-toolbar-title>
        </v-row>
      </div>
    </nav>
  </div>

</template>


<script>
import store from "../store";


export default {
  name: "Navbar",
  data() {
    return {
      cn:false,
      search:null,
    };
  },

  methods: {
   
    logout: function() {
      store.commit("IsLoggedIn", false);
      store.commit("Email", "");
      this.$router.push("/login");
  

    },
    topup:function() {
      this.$router.push("/topup-startoken");
    },
    cart: function() {
        this.$router.push("/cart");
    },
    login: function() {
      this.$router.push("/login");
      
    },
    register: function() {
      this.$router.push("/Register");
       
    },
   
    chinese: function() {
      this.cn = true;
      store.commit("language", "cn");
     
    },
    english: function() {
      this.cn = false;
      store.commit("language", "en");
    },
    
  },
  created() {
      store.commit("language", "en");
      //window.addEventListener('beforeunload', this.logout)
  },
  computed: {
    UserEmail() {
      return this.$store.state.Email;
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    Language() {
      return this.$store.state.language
    },

    
  },
  
};
</script>

<style>
.btn {
  font-weight:bold;
}
select.swal2-select {
    display: none !important;
}
</style>