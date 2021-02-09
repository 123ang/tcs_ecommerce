<template>
 <div class="login container z-depth-1" style="background-color:white">
  <h2 
    class="center-align black-text" 
    style=" 
    font-weight: bold;
    text-decoration: underline;"
    v-if="Language == 'en'"
    >
    Login
  </h2>
  <h2 
    class="center-align black-text" 
    style=" 
    font-weight: bold;
    text-decoration: underline;"
    v-if="Language == 'cn'"
    >
    登录
  </h2>
  
      <div class="field email mx-4">
        <label style="" for="email" v-if="Language == 'en'">Email Address:</label>
        <label style="" for="email" v-if="Language == 'cn'">邮箱:</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div class="field password mx-4">
        <label style="font-weight:bold" for="password" v-if="Language == 'en'">Password:</label>
        <label style="font-weight:bold" for="password" v-if="Language == 'cn'">密码:</label>
        <input type="password" id="password" v-model="password" v-on:keyup.enter="login(email,password)">
      </div>
      <div class="field center-align">
        <p
          v-if="feedback"
          class="red-text"
        >{{ feedback }}</p>
        <loading
            :show="show"
            :label="label"
            :overlay="overlay">

        </loading>
        <button @click="login(email,password)" class="btn1 btn-large btn-extended grey lighten-4 black-text"  type="submit" v-if="Language == 'en'">Sign In</button>
        <button @click="login(email,password)" class="btn1 btn-large btn-extended grey lighten-4 black-text"  type="submit" v-if="Language == 'cn'">登录</button>
        <button 
        @click="forget" 
        class="btn1 btn-large btn-extended grey lighten-4 black-text"  
     
        v-if="Language == 'en'"
        style= "margin-left:20px"
        >
        Forget Password</button>
             <button 
        @click="forget" 
        class="btn1 btn-large btn-extended grey lighten-4 black-text"  
  
        v-if="Language == 'cn'"
        style= "margin-left:20px"
        >
        忘记密码</button>
      </div>
  
</div>
     
</template>

<script>
import store from "../store";
import axios from 'axios';
import loading from 'vue-full-loading'
export default {
  components: {
    loading
  },
  data() {
    return {
      email: null,
      password: null,
      feedback:null,
      datas: [],
      show: false,
      label: '',
      overlay: true
    };
  },
  methods: {
    
    login: function(email, password) {
      if(email == null) {
        if(this.Language == 'en') {
          this.feedback = "Please enter your email"
        }
        if(this.Language == 'cn') {
            this.feedback = "请输入邮箱"
          }
        return;
      }
      this.show = true;
      if(this.Language == 'en') {
        this.label = "Login..."
      }
      if(this.Language == 'cn') {
        this.label = "登录。。。"
      }
      var domain = 'https://starbartersbond.com/php_script/'
      var script_name = 'login.php'
      var web = domain + script_name
      axios.post(web, {
        email: email
      })
      .then(response => {
        //console.log(response.data);
        this.show = false
        if(response.data.length == 0) {
          if(this.Language == 'en') {
            this.feedback = "This email is not exist! Please register or contact admin"
          }
          if(this.Language == 'cn') {
            this.feedback = "邮箱不存在！请联络管理员！"
          }
          return;
        }
         
        if(password == response.data.password) {
       
           
            store.commit("IsLoggedIn", true);
            store.commit("Email", this.email);
            store.commit("Status", response.data.status);
            store.commit("Credit", response.data.startoken);
            this.$router.push("/home");
                
            
        }
        else{
          if(this.Language == 'en') {
            this.feedback = "Wrong Password"
          }
          if(this.Language == 'cn') {
            this.feedback = "密码错误"
          }
          return;
        }
          
      })
      .catch(function (error) {
          console.log(error);
      });
         
    } ,
    forget() {
      this.$router.push("/forget-password");
    }
     
        
  
  },
  computed: {
    Language() {
      return this.$store.state.language;
    },
    Status() {
      return this.$store.state.status;
    }

  }
};
</script>

<style>
label{
  font-weight:bold;
  color: black;
}
.btn1 {
  font-weight:bold;
  margin-bottom:20%;
  margin-top:10%;
}

.field {
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 20px;
}

</style>