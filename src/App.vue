<template>
<v-app>
    <div id="app" style="height: 100%;background:black;">
        <Navbar />
        <router-view />
     
    </div>

    <v-footer color="#212020" id="footer">

        <SecondFooter />

    </v-footer>
</v-app>
</template>

<script>
import Navbar from '@/views/Navbar'
import SecondFooter from '@/views/second_footer'

export default {
    name: 'App',
    components: {
        Navbar,
        SecondFooter,

    },

    computed: {
        UserEmail() {
            return this.$store.state.Email;
        },
        Language() {
            return this.$store.state.language;
        },
    }
}
</script>

<style>


</style>
