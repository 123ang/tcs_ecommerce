<template>
    <div style="color:white; margin-top:100px" class="container">
            <div style="color:white;">
              <v-row>
                <v-col>
                  Payment Methods
                </v-col>
                <v-col>
                  Delivery Services
                </v-col>
                <v-col>
                  Follow Us
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-row style="margin-top:10px">
                        <div
                            v-for="(payment, index) in payments"
                            :key="index"
                            >
                                <div>
                                <v-img
                                    max-width=40
                                    max-height=40
                                    :src="payment.src"
                                    class="ml-2"
                                ></v-img>
                                </div>
                        </div>
                    </v-row>
                </v-col>
                <v-col>
                  <v-row style="margin-top:10px">
                        <div
                            v-for="(delivery_pic, index) in delivery"
                            :key="index"
                            >
                                <div>
                                <v-img
                                    max-width=40
                                    max-height=40
                                    :src="delivery_pic.src"
                                    class="ml-2"
                                ></v-img>
                                </div>
                        </div>
                    </v-row>
                </v-col>
                <v-col>
                    <v-row style="margin-top:10px">
                        <div
                            v-for="(followus_pic, index) in followus"
                            :key="index"
                            >
                                <div>
                                <v-img
                                    max-width=40
                                    max-height=40
                                    :src="followus_pic.src"
                                    class="ml-2"
                                ></v-img>
                                </div>
                        </div>
                    </v-row>
                </v-col>
              </v-row>
            </div>
            <br><br><br><br>
            <v-row style="text-align:center;"  class="justify-center">
            <span>&copy; Copyright {{ (new Date()).getFullYear() }} TCS Ecommerce All Rights Reserved. </span>
            </v-row>
          <br><br>
         
          
    </div>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      payments: [
        {src: require("@/assets/upayme.png")},
        {src: require("@/assets/visa.png")},
        {src: require("@/assets/master.png")},
        {src: require("@/assets/maybank.png")},
      ],
      delivery: [ 
            {src: require("@/assets/gdex.png")},
            {src: require("@/assets/poslaju.jpg")},
            {src: require("@/assets/jt.jpg")},
        ],
      followus: [ 
        {src: require("@/assets/facebook.png")},
        {src: require("@/assets/instagram.png")},
        {src: require("@/assets/twitter.png")},

      ],
    };
  },
  created() {

  },
  computed: {
   
  }
}
</script>

<style>



</style>

