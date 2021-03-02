<template>
<div>

    <div class="container">
        <section id="home">

            <span class="italic-word">Live Gold Price (per gram) : </span>
            <table class="hidden-sm-and-down GoldTable">
                <thead>
                    <tr>
                        <th>Type of Gold</th>
                        <th>24K</th>
                        <th>22k</th>
                        <th>21K</th>
                        <th>18K</th>
                        <th>14K</th>
                        <th>Premium Item</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rate</td>
                        <td>RM {{ retail_price[1].RO }}</td>
                        <td>RM {{ retail_price[2].RO }}</td>
                        <td>RM {{ retail_price[3].RO }}</td>
                        <td>RM {{ retail_price[4].RO }}</td>
                        <td>RM {{ retail_price[5].RO }}</td>
                        <td>RM {{ retail_price[0].RO }}</td>
                    </tr>
                </tbody>
            </table>
            <table class="hidden-md-and-up GoldTable">
                <thead>
                    <tr>
                        <th>Type of Gold</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rate</td>
                    </tr>
                </tbody>
            </table>
            <table class="hidden-md-and-up GoldTable">

                <tr>
                    <td style="color:white">24K</td>
                    <td class="phone-gold-price">RM {{ retail_price[1].RO }}</td>
                </tr>
                <tr>
                    <td style="color:white">22K</td>
                    <td class="phone-gold-price">RM {{ retail_price[2].RO }}</td>
                </tr>
                <tr>
                    <td style="color:white">21K</td>
                    <td class="phone-gold-price">RM {{ retail_price[3].RO }}</td>
                </tr>
                <tr>
                    <td style="color:white">18K</td>
                    <td class="phone-gold-price">RM {{ retail_price[4].RO }}</td>
                </tr>
                <tr>
                    <td style="color:white">14K</td>
                    <td class="phone-gold-price">RM {{ retail_price[5].RO }}</td>
                </tr>
                <tr>
                    <td style="color:white">Premium Item</td>
                    <td class="phone-gold-price">RM {{ retail_price[0].RO }}</td>
                </tr>

            </table>
            <br><br><br>
            <v-row>
                <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.cover_photo_link" contain>

                    </v-carousel-item>
                </v-carousel>
            </v-row>

        </section>

    </div>
    <div>
        <v-row>
            <v-col cols=8 style="position: relative;">
                <v-img id="left_bottom_corner" contain src="@/assets/left_corner.png">

                </v-img>
            </v-col>
            <v-col cols=4>
                <v-img contain id="right_bottom_corner" src="@/assets/right_star.png">

                </v-img>
            </v-col>
        </v-row>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import store from "../store";
export default {
    data() {
        return {
            products: [],
            items: [],
            retail_price: []
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
        axios.get('https://unihash-ecosystem.com/tcs/get_retail_price.php').then(resp => {
            this.retail_price = resp.data;

            console.log(resp.data)
        });
    },
};
</script>

<style>
.GoldTable {
    width: 100%;
    margin: 0px;
    border-radius: 0px;
    border-top-width: 0px;

    border-color: #FFFFFF;
    border-collapse: separate;
    border-spacing: 0;
    border-top-style: solid;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.GoldTable>table,
th,
td {
    border: 1px solid white !important;
    text-align: center !important;
}

.GoldTable>thead {
    font: normal normal normal sans-serif;
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;

}

.GoldTable>thead>tr>th {
    color: #FFFFFF;
    background-color: #000000;
    background-image: none;
    vertical-align: top;
}

.phone-gold-price {
    color: #000000;
    background-color: #FFCB05;

}

.GoldTable>tbody>tr {
    color: #000000;
    background-color: #FFCB05;
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

.navbar-nav .nav-item .nav-link {
    color: white;
}

.navbar-nav .nav-item.active .nav-link,
.navbar-nav .nav-item:hover .nav-link {
    color: #c8c918;
}

.active {
    color: #c8c918;
}

#left_bottom_corner {
    height: 100%;
    float: left;
    position: absolute;
    bottom:-40px;
   
}

#right_bottom_corner {
    height: 100%;
    float: right;

}

</style>
