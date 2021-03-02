<template>
<v-dialog  v-model="show" max-width="800px">
    <v-card>
 
            <v-img src="@/assets/product_details_bg.jpg">
            <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>

            <div v-for="(data, index) in datas" :key="index" xs12 sm4 md4>

                <v-row>
                    <v-col cols=6>
                        <div>

                            <v-img class="center" style="margin-top:50px" :src="data.cover_photo_link"> </v-img>
                        </div>
                    </v-col>
                    <v-col cols=6>
                        <div text-align:center>
                            <h3 style="color:black;">{{ data.name }} </h3>
                            <h3 style="color:black; font-size:18px">Description : {{ data.long_description }} </h3>

                            <b>
                                <h3 style="color:black; font-size:20px">RM {{ data.price }} </h3>
                            </b>

                        </div>
                        Quantity : <plusminsfield :value="1" :min="1" v-model="quantity"></plusminsfield>
                        <br><br>
                        <button v-on:click.prevent="addCart(index)" class="btn btn-large btn-extended grey lighten-4 black-text">

                            <span v-if="Language == 'en'">Add to Cart</span>
                            <span v-if="Language == 'cn'"> 填进我的购物车 </span>
                        </button>
                        <br><br>
                    </v-col>
                </v-row>
            </div>
            </v-img>

    </v-card>
</v-dialog>
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
    props: ['visible'],
    data() {
        return {
            email: null,
            password: null,
            feedback: null,
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
            var price = this.datas[index].price
            store.commit("add_to_cart", {
                id: id,
                cover_photo_link: cover_photo_link,
                name: name,
                price: price,
                quantity: this.quantity
            });
            this.show = true
            this.$router.push("/");

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
                    this.datas.forEach(function (data) {
                        data.cover_photo_link = "https://" + data.cover_photo_link;
                    });
                    //console.log(this.datas)

                    this.isLoading = false
                }).catch(function (error) {
                    console.log(error);
                });
        }

    },
    created() {

        this.loadData()

    },
    computed: {
        Language() {
            return this.$store.state.language;
        },
        Product() {
            return this.$store.state.Product;
        },
        show: {
            get() {
                return this.visible
            },
            set(value) {
                if (!value) {
                    this.$emit('close')
                }
            }
        },

    }
};
</script>

<style>
#dialog-box {
    background-image: url('~@/assets/product_details_bg.jpg');
}
</style>
