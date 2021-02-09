<template>

  <div class="register container z-depth-1" style="background-color:white">
    <h2 
    class="center-align black-text" 
    v-if="Language == 'en'"
    style=" 
    font-weight: bold;
    text-decoration: underline;">
    Payment Details
    </h2>
        <h2 
    class="center-align black-text" 
    v-if="Language == 'cn'"
    style=" 
    font-weight: bold;
    text-decoration: underline;">
    付费详情
    </h2>
    <form>

        <div class="field name">
            <label for="name" v-if="Language == 'en'">Name:</label>
            <label for="name" v-if="Language == 'cn'">名字:</label>
            <input
            type="text"
            id="name"
            v-model="name"
            >
        </div>
        
        <div class="field contact_number">
            <label for="contact_number" v-if="Language == 'en'">Contact Number:</label>
            <label for="contact_number" v-if="Language == 'cn'">联络号码:</label>
            <input
            type="text"
            id="contact_number"
            v-model="contact_number"
            >
        </div>
     
      <div class="field payment">
        <label for="payment" v-if="Language == 'en'">Payment:</label>
        <label for="payment" v-if="Language == 'cn'">付费方式:</label>
        <v-radio-group
              v-model="payment"
              column
        >
            <v-radio
                label="Credit Card"
                color="blue"
                value="Credit Card"
            ></v-radio>
            <v-radio
                label="Bank in"
                color="blue"
                value="Bank in"
            ></v-radio>
         </v-radio-group>
      </div>
    
      <div class="field address">
        <label for="address" v-if="Language == 'en'">Shipping Address:</label>
        <label for="address" v-if="Language == 'cn'">地址:</label>
        <input
          type="text"
          id="address"
          v-model="address"
        >
      </div>
       <div class="field address_city">
        <label for="address_city" v-if="Language == 'en'"> Shipping City:</label>
        <label for="address_city" v-if="Language == 'cn'">城市:</label>
        <input
          type="text"
          id="address_city"
          v-model="address_city"
        >
       </div>
        <div class="field address_state">
        <label for="address_state" v-if="Language == 'en'"> Shipping State:</label>
        <label for="address_state" v-if="Language == 'cn'">州:</label>
        <input
          type="text"
          id="address_state"
          v-model="address_state"
        >
      </div>
       <div class="field address_postcode">
        <label for="address_postcode" v-if="Language == 'en'">Shipping Postcode:</label>
        <label for="address_postcode" v-if="Language == 'cn'">邮编:</label>
        <input
          type="text"
          id="address_postcode"
          v-model="address_postcode"
        >
      </div>
      <div class="field address_country">
      <label for="address_country" v-if="Language == 'en'">Shipping Country:</label>
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
        <v-btn
          v-on:click.prevent="verify()"
          class="btn btn-large btn-extended grey lighten-4 black-text"
        >
            <span v-if="Language == 'en'">Pay</span>
            <span v-if="Language == 'cn'">付钱 </span>
        </v-btn>
      </div>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
import loading from 'vue-full-loading'
import store from "../store";
export default {
  name: "register",
  components: {
    loading
  },
  data: function() {
    return {
     
      name:"",
      contact_number: "",
      payment:"Credit Card",
     
      address: "",
      address_city:"",
      address_state:"",
      address_postcode:"",
      address_country:"",
      feedback: null,

      show: false,
      label: '',
      overlay: true,

    };
  },
  methods: {
    verify() {
      this.feedback = ""
        
        if(this.Language == 'en') {
            if (this.name == "") {
                this.feedback = "You must enter a name";
                return;
            } 
            if (this.contact_number == "") {
                this.feedback = "You must enter a contact number";
                return;
            } 
            if (this.payment == "") {
                this.feedback = "You must enter a payment method";
                return;
            } 
           
            if (this.address == "") {
                this.feedback = "You must enter a address";
                return;
            } 
            if (this.address_state == "") {
                this.feedback = "You must enter a state";
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

        if (this.name == "") {
          this.feedback = "你需要输入一个名字";
          return;
        } 
     
        if (this.payment == "") {
          this.feedback = "你需要输入一个付款方式";
          return;
        } 
        if (this.contact_number == "") {
            this.feedback = "你需要输入一个联络电话";
            return;
        } 

        if (this.address == "") {
          this.feedback = "你需要输入一个地址";
          return;
        } 
        if (this.address_state == "") {
          this.feedback = "你需要输入一个州";
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
        console.log("press!")
      this.pay();
    },
    
    pay: function() {
     this.show = true;
      if(this.Language == 'en') {
        this.label = "Payment is processing"
      }
      if(this.Language == 'cn') {
        this.label = "付款在进行中，请耐心等待"
      }
      this.feedback = null;
      var domain = 'https://starbartersbond.com/tcs/'
      var script_name = 'payment.php'
      var web = domain + script_name
      axios.post(web, 
        {
         
          name: this.name,
          contact_number: this.contact_number,
          payment: this.payment,
          
          address: this.address,
          address_city: this.address_city,
          address_state: this.address_state,
          address_postcode: this.address_postcode,
          address_country: this.address_country,
          cart: JSON.stringify(this.Cart)
      
        }
      ).then(data =>{
           this.show = false;
            console.log(data.data)
          store.commit("clean_cart", this.Cart);
          this.$router.push("/");
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      
  
    }
  },
  computed: {
    Language() {
      return this.$store.state.language;
    },
    Cart() {
      return this.$store.state.Cart;
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