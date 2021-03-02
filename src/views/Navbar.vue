<template>
<div>
    <v-row class="hidden-sm-and-down">
        <v-col cols=2>
            <v-img id="logo" contain src="@/assets/logo.jpg" @click="home" height="150" width="150">

            </v-img>
        </v-col>
        <v-col cols=10>
            <v-img contain src="@/assets/top_right_corner_resize_top.png" height="100%" style="float:right"> </v-img>
        </v-col>
    </v-row>
    <v-row class="hidden-md-and-up" style="margin-top:-30px;">
        <v-col cols=4> 
            <v-img id="logo" contain src="@/assets/logo.jpg" @click="home" height="100" width="100" style="margin: 40px;">

            </v-img>
        </v-col>
        <v-col cols=8 style="margin-bottom: 10px;">
            <v-img contain src="@/assets/top_right_corner_resize_top.png" height="100%" style="float:right"> </v-img>
        </v-col>
    </v-row>
    <div id="home-bar">
        <v-row style="float:right; margin-right:20px; padding-top:8px;" class="hidden-sm-and-down">
            <v-btn v-if="cn===false" text large color="black" height="40" @click="chinese">中文</v-btn>
            <v-btn v-if="cn===true" text large color="black" height="40" @click="english">English</v-btn>

            <v-btn text large color="black" height="40" v-if="!cn" v-on:click="cart">My Cart</v-btn>
            <v-btn text large color="black" height="40" v-if=" cn" v-on:click="cart">我的手推车</v-btn>

            <v-btn text large color="black" height="40" v-if="!isLoggedIn && !cn" v-on:click="register">Register</v-btn>
            <v-btn text large color="black" height="40" v-if="!isLoggedIn && cn" v-on:click="register">注册</v-btn>
            <v-btn text large color="black" height="40" v-if="!isLoggedIn && !cn" v-on:click="login">Login</v-btn>
            <v-btn text large color="black" height="40" v-if="!isLoggedIn && cn" v-on:click="login">登录</v-btn>
            <v-btn text large color="black" height="40" v-if="isLoggedIn && !cn" v-on:click="logout">Logout</v-btn>
            <v-btn text large color="black" height="40" v-if="isLoggedIn && cn" v-on:click="logout">退出</v-btn>

            <v-app-bar-nav-icon x-large @click="drawer = !drawer" color="black" style="display: block;
                            margin-left: auto;
                            margin-right: auto;
                            height:40px;">
            </v-app-bar-nav-icon>
            <v-navigation-drawer v-model="drawer" temporary fixed right style="background-color:black;" hide-overlay>
                <v-list nav dense style="background-color:black;">
                    <v-list-item-group>
                        <v-list-item>
                            <v-list-item-title style="color:yellow;" @click="products">TCS Products</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-row>
        <div class="hidden-md-and-up" style="float:right;">
             <v-app-bar-nav-icon x-large @click="drawer = !drawer" color="black" style="display: block;
                            margin-left: auto;
                            margin-right: 30px;
                            height:40px; padding-bottom: 16px;">
            </v-app-bar-nav-icon>
            <v-navigation-drawer v-model="drawer" temporary fixed right style="background-color:black;" hide-overlay>
                <v-list nav dense style="background-color:black;">
                    <v-list-item-group>
                        <v-list-item>
                            <v-list-item-title style="color:yellow;" @click="products">TCS Products</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                     <v-list-item-group>
                        <v-list-item>
                            <v-list-item-title style="color:yellow;" @click="cart">My Cart</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                     <v-list-item-group>
                        <v-list-item>
                            <v-list-item-title style="color:yellow;" @click="register">Register</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                     <v-list-item-group>
                        <v-list-item>
                            <v-list-item-title style="color:yellow;" @click="IsLoggedIn">Login</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                     <v-list-item-group>
                        <v-list-item>
                            <v-list-item-title style="color:yellow;" @click="logout">Logout</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </div>
    </div>
</div>
</template>

<script>
import store from "../store";
import { mdiMenuDown, mdiClose } from "@mdi/js";
export default {
    name: "Navbar",
    data() {
        return {
            cn: false,
            search: null,
            drawer: false,
            icons: {
                mdiMenuDown,
                mdiClose,

            },
        };
    },

    methods: {

        logout: function () {
            store.commit("IsLoggedIn", false);
            store.commit("Email", "");
            this.$router.push("/login");

        },
        home: function () {
            this.$router.push("/");
        },
        cart: function () {
            this.$router.push("/cart");
        },
        login: function () {
            this.$router.push("/login");

        },
        register: function () {
            this.$router.push("/Register");

        },
        products: function () {
            this.$router.push("/tcs-products");

        },
        chinese: function () {
            this.cn = true;
            store.commit("language", "cn");

        },
        english: function () {
            this.cn = false;
            store.commit("language", "en");
        },
        closeNav() {
            this.drawer = false;

        },

    },
    created() {
        store.commit("language", "en");
        //window.addEventListener('beforeunload', this.logout)
    },
    computed: {
        UserEmail() {
            return this.$store.state.Email;
        },
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        },
        Language() {
            return this.$store.state.language
        },

    },

};
</script>

<style>
.btn {
    font-weight: bold;
}

select.swal2-select {
    display: none !important;
}

#logo {
    float: left;
    margin: 20px;
    width: 50%;
    height: 150px;

}

#home-bar {
    background-image: linear-gradient(to right, black, black, black, gold,gold, yellow);
    height: 30px;
    width: 100%;
}

#right_corner_bar {
    float: right；
}
</style>
