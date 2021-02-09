<template>

  <div class="register container z-depth-1" style="background-color:white">
    <h2 
    class="center-align black-text" 
    v-if="Language == 'en'"
    style=" 
    font-weight: bold;
    text-decoration: underline;">
    Profile
    </h2>
        <h2 
    class="center-align black-text" 
    v-if="Language == 'cn'"
    style=" 
    font-weight: bold;
    text-decoration: underline;">
    个人资料
    </h2>
    <form>
    <div v-for="(data, index) in datas"
          :key="index">
      <div class="field email">
        <label for="email" v-if="Language == 'en'">Email:</label>
        <label for="email" v-if="Language == 'cn'">邮箱:</label>
        {{ data.email }}
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
            v-model="data.password"
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
        {{ data.name }}
      </div>
      <div class="field ic">
        <label for="ic" v-if="Language == 'en'">ID Card:</label>
        <label for="ic" v-if="Language == 'cn'">身份证:</label>
        {{ data.ic }}
      </div>
      <div class="field issue_country">
        <label for="issue_country" v-if="Language == 'en'">Issued Country:</label>
        <label for="issue_country" v-if="Language == 'cn'">发行国家:</label>
        {{ data.issue_country }}
      </div>
      <div class="field phone">
        <label for="phone" v-if="Language == 'en'">Contact Number:</label>
        <label for="phone" v-if="Language == 'cn'">联系电话:</label>
          {{ data.ext }} {{ data.contact_number }}
      </div>
      <div class="field dob">
        <label for="dob" v-if="Language == 'en'" >Date of Birth:</label>
        <label for="dob" v-if="Language == 'cn'" >生日日期:</label>
        {{ data.dob }}
      </div>
      <div class="field gender">
        <label for="gender" v-if="Language == 'en'">Gender:</label>
        <label for="gender" v-if="Language == 'cn'">性别:</label>
        {{ data.gender}}
      </div>
      
      
      <div class="field address">
        <label for="address" v-if="Language == 'en'">Address:</label>
        <label for="address" v-if="Language == 'cn'">地址:</label>
        {{ data.address }}
      </div>
       <div class="field address_city">
        <label for="address_city" v-if="Language == 'en'">City:</label>
        <label for="address_city" v-if="Language == 'cn'">城市:</label>
        {{ data.city }}
      </div>
       <div class="field address_postcode">
        <label for="address_postcode" v-if="Language == 'en'">Postcode:</label>
        <label for="address_postcode" v-if="Language == 'cn'">邮编:</label>
        {{ data.postcode }}
      </div>
      <div class="field address_country">
      <label for="address_country" v-if="Language == 'en'">Country:</label>
        <label for="address_country" v-if="Language == 'cn'">国家:</label>
        {{ data.country }}
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
          v-on:click.prevent="update(index)"
          class="btn btn-large btn-extended grey lighten-4 black-text"
        >
            <span v-if="Language == 'en'">Update Password</span>
            <span v-if="Language == 'cn'"> 更新密码 </span>
        </button>
      </div>
    </div>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
import loading from 'vue-full-loading'
export default {
  name: "Profile",
  components: {
    loading
  },
  data: function() {
    return {
        passwordFieldType : 'password',
        feedback: null,
        datas: "",
        show: false,
        label: '',
        overlay: true
    };
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    update: function(index) {
        this.feedback = ""
        
        if(this.Language == 'en') {
        
            if (this.password == "") {
            this.feedback = "You must enter a password";
            return;
            } 
        
        }
        
        if(this.Language == 'cn') {
        if (this.password == "") {
            this.feedback = "你需要输入一个密码";
            return;
        }
        }
        this.feedback = null;
        var domain = 'https://starbartersbond.com/tcs/'
        var script_name = 'update_profile.php'
        var web = domain + script_name
        var password = this.datas[index].password
        this.show = true;
        if(this.Language == 'en') {
          this.label = "Update is processing"
        }
        if(this.Language == 'cn') {
          this.label = "更新在进行中，请耐心等待"
        }
        axios.post(web, 
        {
            email: this.UserEmail,
            password: password,
        
        }).then(response =>{
            this.show = false
            alert(response.data)
            this.show_profile()
        }).catch(function (error) {
        console.log(error);
        });
    },
    show_profile(){
        var domain = 'https://starbartersbond.com/tcs/'
        var script_name = 'show_profile.php'
        var web = domain + script_name
        axios.post(web, 
        {
            email: this.UserEmail,
        
        }).then(response =>{
            this.datas = response.data
        }).catch(function (error) {
        console.log(error);
        });
    }

  },
  created(){
      this.show_profile()
      
  },
  computed: {
    UserEmail() {
      return this.$store.state.Email;
    },
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