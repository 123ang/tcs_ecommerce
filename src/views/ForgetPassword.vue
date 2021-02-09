<template>
 <div class="login container z-depth-1" style="background-color:white">
  <h2 
    class="center-align black-text" 
    style=" 
    font-weight: bold;
    text-decoration: underline;"
    v-if="Language == 'en'"
    >
    Reset Password
  </h2>
  <h2 
    class="center-align black-text" 
    style=" 
    font-weight: bold;
    text-decoration: underline;"
    v-if="Language == 'cn'"
    >
    密码重设
  </h2>
  
      <div class="field email mx-4">
        <label style="" for="email" v-if="Language == 'en'">Email Address:</label>
        <label style="" for="email" v-if="Language == 'cn'">邮箱:</label>
        <input type="email" id="email" v-model="email">
      </div>
     
      <div class="field center-align">
        <p
          v-if="feedback"
          class="red-text"
        >{{ feedback }}</p>
        <button @click="reset" class="btn1 btn-large btn-extended grey lighten-4 black-text"  type="submit" v-if="Language == 'en'">reset</button>
        <button @click="reset" class="btn1 btn-large btn-extended grey lighten-4 black-text"  type="submit" v-if="Language == 'cn'">重设</button>
        
      </div>
  
</div>
     
</template>

<script>
//import store from "../store";
import axios from 'axios';

export default {
  data() {
    return {
      email: null,
      password: null,
      feedback:null,
      datas: [],
 
    };
  },
  methods: {
    
    reset() {
        if(this.email == null || this.email == "") {
            if(this.Language == 'en') {
                this.feedback = "This email is not exist! Please register or contact admin"
            }
            if(this.Language == 'cn') {
                this.feedback = "邮箱不存在！请联络管理员！"
            }
            return
        }
        else{
            axios.post('https://starbartersbond.com/php_script/password_reset.php', {
                email: this.email,
            })
            .then(response => {
                console.log(response.data);
                this.$router.push("/login");
                
            })
            .catch(function (error) {
                console.log(error);
            });
        }
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