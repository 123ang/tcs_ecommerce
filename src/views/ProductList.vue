<template>
<div>
    <v-img contain src="@/assets/product_page_bar.jpg" style="float:left"></v-img>
    <v-row style="margin-top:1px; height:auto;">
        <v-col cols=2 style="text-align:right">
            <p style="color:#deaf45">
                Earings
            </p>
            <p style="color:#deaf45">
                Rings
            </p>

        </v-col>
        <div id="product-bar">

        </div>
        <v-col cols=9>
            <v-img src="@/assets/product_page_bg.jpg">
                <div class="container" style="max-width:1000px">

                    <v-row wrap style="margin-top:10px;background-color:black;">
                        <v-flex v-for="(product, index) in products" :key="index" xs12 sm4 md4>

                            <v-card align="center" justify="center" max-width="300" max-height="400" style="background-color:grey;border-radius: 25px; margin-bottom:10px;margin-left:10px;" @click="product_detail(product.ID)">

                                <div>
                                    <br>
                                    <v-img max-width=250 max-height=250 contain :src="product.cover_photo_link"> </v-img>
                                </div>
                                <div>
                                    <h3 style="color:white;font-size:15px;">
                                        {{ product.name }}

                                    </h3>

                                </div>

                            </v-card>

                        </v-flex>
                    </v-row>
                    <br><br><br><br><br>
                </div>
            </v-img>

        </v-col>
    </v-row>
    <ProductDetails :visible="showProduct" @close="showProduct=false" />
</div>
</template>

<script>
import axios from 'axios';
import store from "../store";
import ProductDetails from '@/components/ProductDetails'
export default {
    components: {
        ProductDetails,

    },
    data() {
        return {
            products: [],
            items: [],
            showProduct: false,
        };
    },
    methods: {
        product_detail(product) {
            store.commit("Product", product);
            this.showProduct = true
        }
    },
    created() {
        axios.get('https://www.starbartersbond.com/tcs/loadCourasel.php').then(resp => {
                this.items = resp.data;

                this.items.forEach(function (item) {
                    item.cover_photo_link = "https://" + item.cover_photo_link;
                });

            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get('https://starbartersbond.com/tcs/get_product.php').then(resp => {
            this.products = resp.data;

            this.products.forEach(function (product) {
                product.cover_photo_link = "https://" + product.cover_photo_link;
            });
        });
    },
};
</script>

<style>
#product-bar {
    background-image: url('~@/assets/product_straight_bar.jpg');
    width: 12px;

}
</style>
