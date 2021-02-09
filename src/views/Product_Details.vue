<template>
 <div class="login container z-depth-1" style="background-color:white">
      <loading :active.sync="isLoading" 

        :is-full-page="fullPage"></loading>
       
      <div
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
                    class="center"

                    style="margin-top:50px"
                    :src="data.cover_photo_link"
                  > </v-img>
                </div>
            </v-col>
            <v-col>
                <div text-align:center>
                  <h3
                    class="service-title"
                    style="color:black;"
                  >{{ data.name }} </h3>
                  <br><br>
                    <h3
                    class="service-title"
                    style="color:black; font-size:20px"
                  >RM {{ data.price }} </h3>
                  <br><br>
                <h3
                    class="service-title"
                    style="color:black; font-size:18px"
                  >Description : {{ data.long_description }} </h3>
                </div>
                <br><br>
                <plusminsfield :value="1" :min="1" v-model="quantity"></plusminsfield>
                <br><br>
                        <button
          v-on:click.prevent="addCart(index)"
          class="btn btn-large btn-extended grey lighten-4 black-text"
        >

            <span v-if="Language == 'en'">Add to Cart</span>
            <span v-if="Language == 'cn'"> 填进我的购物车 </span>
        </button>
                </v-col>
          </v-row>
            </div>
</div>
     
</template>

<script>
import axios from 'axios';
import store from "../store";
import PlusMinusField from '../components/PlusMinusField.vue'
import Loading from 'vue-loading-overlay';
export default {
   components: {
    'plusminsfield': PlusMinusField,
    Loading
  },
  data() {
    return {
      email: null,
      password: null,
      feedback:null,
      datas: [],
      isLoading: false,
      fullPage: true,
      quantity: 1,
    
    };
  },
  methods: {
    addCart(index) {
      var id = this.datas[index].ID;
      var cover_photo_link = this.datas[index].cover_photo_link;
      var name = this.datas[index].name
      var price =  this.datas[index].price
      store.commit("add_to_cart",  {
          id:id,
          cover_photo_link: cover_photo_link,
          name: name,
          price:price,
          quantity:this.quantity
        });
      this.show = true
      //this.$router.push("/");
      
    },
    loadData() {
      this.isLoading = true;
      var domain = 'https://starbartersbond.com/tcs/'
      var script_name = 'get_product_detail.php'
      var web = domain + script_name
      axios.post(web, {
        id: this.Product
      })
      .then(response => {
            this.datas = response.data
            this.datas.forEach(function(data) {
                data.cover_photo_link = "https://" + data.cover_photo_link ;
            });
            //console.log(this.datas)
                
         this.isLoading = false
        }).catch(function (error) {
          console.log(error);
      });
    }
        
  
  },
  created(){
     
      
      this.loadData()
       
      
     
  },
  computed: {
    Language() {
      return this.$store.state.language;
    },
    Product() {
      return this.$store.state.Product;
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
.center {
  display: block;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

</style>