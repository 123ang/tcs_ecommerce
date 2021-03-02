<template>
 <div class="login container z-depth-1" style="background-color:white">
      <div v-if="datas.length == 0" class="field center-align">
        Cart is empty
      </div>
      <div
            v-else 
            v-for="(data, index) in datas"
              :key="index"
              xs12
              sm4
              md4
            >
              
            <v-row>
            <v-col>
                <div>
               
                  <v-img
       
                    contain
                    :src="data.cover_photo_link"
                    style="max-height:100px;max-width:100px;margin-top:50px"
                  > </v-img>
                </div>
            </v-col>
            <v-col>
                <div text-align:center>
                  <h3
                    class="service-title"
                    style="color:black;font-size:20px"
                  >{{ data.name }} </h3>
                  
                  <h3
                    class="service-title"
                    style="color:black; font-size:15px"
                  >RM {{ data.price }} </h3>
                
                  <plusminsfield v-model="data.quantity"></plusminsfield>
                </div>

      
                </v-col>
                <v-col>
                <br><br><br>
                 <v-btn
                    color="red"
                    @click="remove_item(index)"
                  > Remove </v-btn>
                </v-col>
          </v-row>
          
        </div>
        <br><br><br>
        <div class="field center-align">
            <button
            v-on:click.prevent="checkout"
            class="btn btn-large btn-extended grey lighten-4 black-text"
            
            >
                <span v-if="Language == 'en'">Check Out</span>
                <span v-if="Language == 'cn'"> 给钱 </span>
            </button>
        </div>
</div>
     
</template>

<script>

import store from "../store";
import PlusMinusField from '../components/PlusMinusField.vue'
export default {
  components: {
    'plusminsfield': PlusMinusField
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
      checkout() {
      
        this.$router.push("/billing-details");

      },
      remove_item(index) {
        store.commit('drop_from_cart', index);
      }
  
  },
  created(){
     this.datas = this.Cart
     //console.log(this.datas)
  },
  computed: {
    Language() {
      return this.$store.state.language;
    },
    Cart() {
      return this.$store.state.Cart;
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