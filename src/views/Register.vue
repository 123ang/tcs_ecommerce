<template>

  <div class="register container z-depth-1" style="background-color:white">
    <h2 
    class="center-align black-text" 
    v-if="Language == 'en'"
    style=" 
    font-weight: bold;
    text-decoration: underline;">
    Registration
    </h2>
        <h2 
    class="center-align black-text" 
    v-if="Language == 'cn'"
    style=" 
    font-weight: bold;
    text-decoration: underline;">
    注册
    </h2>
    <form>
      <div class="field email">
        <label for="email" v-if="Language == 'en'">Email:</label>
        <label for="email" v-if="Language == 'cn'">邮箱:</label>
        <input
          type="email"
          id="email"
          v-model="email"
        >
      </div>
      <div class="field password"> 
       
        <v-row>
          <v-col>
           <label for="password"  v-if="Language == 'en'">Password:</label>
           <label for="password"  v-if="Language == 'cn'">密码:</label>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col>
          <input
            :type="passwordFieldType"
            id="password"
            v-model="password"
          >
            </v-col>
          <v-col>
             <v-btn fab small dark @click="switchVisibility()">
                <v-icon>remove_red_eye</v-icon>
            </v-btn>
            
          </v-col>
        </v-row>
      </div>
      <div class="field name">
        <label for="name" v-if="Language == 'en'">Name:</label>
        <label for="name" v-if="Language == 'cn'">名字:</label>
        <input
          type="text"
          id="name"
          v-model="name"
        >
      </div>
   
     
      <div class="field phone">
        <label for="phone" v-if="Language == 'en'">Contact Number:</label>
        <label for="phone" v-if="Language == 'cn'">联系电话:</label>
        <input
          type="text"
          id="phone"
          v-model="phone"
        >
      </div>
      <div class="field dob">
        <label for="dob" v-if="Language == 'en'" >Date of Birth:</label>
        <label for="dob" v-if="Language == 'cn'" >生日日期:</label>
        <input type="date" id="dob" name="dob" v-model="dob">
      </div>
      <div class="field gender">
        <label for="gender" v-if="Language == 'en'">Gender:</label>
        <label for="gender" v-if="Language == 'cn'">性别:</label>
        <select
          id="gender"
          v-model="gender"
        >
          <option
            disabled
            value=""
          >
            <span v-if="Language == 'en'">Please select one</span>
            <span v-if="Language == 'cn'"> 请选一个</span>
          </option>
          <option value="M" >
            <span v-if="Language == 'en'"> Male </span>
            <span v-if="Language == 'cn'"> 男 </span>
          </option>
          <option value="F">
            <span v-if="Language == 'en'"> Female </span>
            <span v-if="Language == 'cn'"> 女 </span>
          </option>
        </select>
        <v-divider></v-divider>
      </div>
      
      
      <div class="field address">
        <label for="address" v-if="Language == 'en'">Address:</label>
        <label for="address" v-if="Language == 'cn'">地址:</label>
        <input
          type="text"
          id="address"
          v-model="address"
        >
      </div>
       <div class="field address_city">
        <label for="address_city" v-if="Language == 'en'">City:</label>
        <label for="address_city" v-if="Language == 'cn'">城市:</label>
        <input
          type="text"
          id="address_city"
          v-model="address_city"
        >
      </div>
       <div class="field address_postcode">
        <label for="address_postcode" v-if="Language == 'en'">Postcode:</label>
        <label for="address_postcode" v-if="Language == 'cn'">邮编:</label>
        <input
          type="text"
          id="address_postcode"
          v-model="address_postcode"
        >
      </div>
      <div class="field address_country">
      <label for="address_country" v-if="Language == 'en'">Country:</label>
        <label for="address_country" v-if="Language == 'cn'">国家:</label>
        <input
          type="text"
          id="address_country"
          v-model="address_country"
        >
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
        <button
          v-on:click.prevent="verify()"
          class="btn btn-large btn-extended grey lighten-4 black-text"
        >
            <span v-if="Language == 'en'"> Register </span>
            <span v-if="Language == 'cn'"> 注册 </span>
        </button>
      </div>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
import loading from 'vue-full-loading'
export default {
  name: "register",
  components: {
    loading
  },
  data: function() {
    return {
      email: "",
      password: "",
      name:"",
      phone:"",
      dob:"",
      gender:"",
      address: "",
      address_city:"",
      address_postcode:"",
      address_country:"",
      feedback: null,
      passwordFieldType : 'password',
      show: false,
      label: '',
      overlay: true,

    };
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    verify() {
      this.feedback = ""
        
        if(this.Language == 'en') {
        if (this.email == "") {
          this.feedback = "You must enter an email";
          return;
        } 
        if (this.password == "") {
          this.feedback = "You must enter a password";
          return;
        } 
        if (this.name == "") {
          this.feedback = "You must enter a name";
          return;
        } 
      
        if (this.phone == "") {
          this.feedback = "You must enter a phone number";
          return;
        } 
        if (this.dob == "") {
          this.feedback = "You must enter a date of birth";
          return;
        } 
        if (this.gender == "") {
          this.feedback = "You must choose a gender";
          return;
        } 
        if (this.address == "") {
          this.feedback = "You must enter a address";
          return;
        } 
        if (this.address_city == "") {
          this.feedback = "You must enter a city";
          return;
        } 
        if (this.address_postcode == "") {
          this.feedback = "You must enter a postcode";
          return;
        } 
        if (this.address_country == "") {
          this.feedback = "You must enter a country";
          return;
        } 
     
      }
        
      if(this.Language == 'cn') {
        if (this.email == "") {
          this.feedback = "你需要输入一个邮箱";
          return;
        } 
        if (this.password == "") {
          this.feedback = "你需要输入一个密码";
          return;
        } 
        if (this.name == "") {
          this.feedback = "你需要输入一个名字";
          return;
        } 
     
        if (this.phone == "") {
          this.feedback = "你需要输入一个联络电话";
          return;
        } 
        if (this.dob == "") {
          this.feedback = "你需要输入一个生日日期";
          return;
        } 
        if (this.gender == "") {
          this.feedback = "你需要选择一个性别";
          return;
        } 

        if (this.address == "") {
          this.feedback = "你需要输入一个地址";
          return;
        } 
        if (this.address_city == "") {
          this.feedback = "你需要输入一个城市";
          return;
        } 
        if (this.address_postcode == "") {
          this.feedback = "你需要输入一个邮编";
          return;
        } 
        if (this.address_country == "") {
          this.feedback = "你需要输入一个国家";
          return;
        } 
      
      
      }

      this.register();
    },
    
    register: function() {
      this.show = true;
      if(this.Language == 'en') {
        this.label = "Register is processing"
      }
      if(this.Language == 'cn') {
        this.label = "注册户口在进行中，请耐心等待"
      }
      this.feedback = null;
      var domain = 'https://starbartersbond.com/tcs/'
      var script_name = 'register.php'
      var web = domain + script_name
      axios.post(web, 
        {
          email: this.email,
          password: this.password,
          name: this.name,
  
          phone: this.phone,
          dob: this.dob,
          gender: this.gender,
          address: this.address,
          address_city: this.address_city,
          address_postcode: this.address_postcode,
          address_country: this.address_country,
      
        }
      ).then(data =>{
          this.show = false;
          if(data.data == "done") {
            alert(data.data)
            this.$router.push("/login");
          }
          else {
             alert(data.data);
          }
          
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      
  
    }
  },
  computed: {
    Language() {
      return this.$store.state.language;
    }
  
  }

}
</script>

<style>
select {
  display: inline-block;
  border-bottom: 1px solid #9e9e9e;
}
label {
  font-weight: bold;
  color: black;
}
h2 {
  font-size: calc(20px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
select {
  display:block !important;
}
</style>