<template>
<v-app>
  <div id="app" style="height: 100%;background:black;">
    <Navbar />
    
    <div style="background:black" >
      <router-view />
      
    </div>
  </div>
  
  <v-footer
        color="black"
  >
        
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
    SecondFooter
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

