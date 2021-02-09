<template>
  <div class="container z-depth-1">
      <section id="home">

        <v-row class="pb-12">
          <v-carousel
            cycle
            height="200"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item 
            v-for="(item,i) in items"
              :key="i"
              :src="item.cover_photo_link"
              contain
            >
              
        
            </v-carousel-item>
          </v-carousel>
        </v-row>
        
      </section>
      <section id="product_list">
        <v-row wrap>
         <v-flex
            v-for="(product, index) in products"
              :key="index"
              xs12
              sm4
              md4
            style="margin-top:20px;margin-left:0px"
            >
              
              <v-card
                align="center"
                justify="center"
                max-width=250
                max-height=500
                style="background: white;"
                @click="product_detail(product.ID)"
              >

                <div>
                  <br>
                  <v-img
                    class="other-service-img"
                    contain
                    :src="product.cover_photo_link"
                  > </v-img>
                </div>
                <div>
                  <h3
                    class="service-title"
                    style="color:black;"
                  >{{ product.name }} </h3>
                    <h3
                    class="service-title"
                    style="color:black; font-size:20px"
                  >RM {{ product.price }} </h3>
                </div>
                <br><br><br><br><br>
              </v-card>
      
            </v-flex>
          </v-row>
      </section>
  </div>
</template>

<script>
import axios from 'axios';
import store from "../store";
export default {
  data() {
    return {
      products: [],
      items: []
    };
  },
  methods: {
    product_detail(product) {
       store.commit("Product", product);
       this.$router.push("/product-details");
    }
  },
  created() {
      axios.get('https://www.starbartersbond.com/tcs/loadCourasel.php').then(resp => {
          this.items = resp.data;
          
          this.items.forEach(function(item) {
            item.cover_photo_link = "https://" + item.cover_photo_link ;
      });
          console.log(this.items)
      });
      axios.get('https://starbartersbond.com/tcs/get_product.php').then(resp => {
          this.products = resp.data;
        
          this.products.forEach(function(product) {
            product.cover_photo_link = "https://" + product.cover_photo_link ;
      });
      });
  },
};
</script>