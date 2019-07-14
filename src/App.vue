<template>
<!--  <v-app>-->
<!--    <v-toolbar app>-->
<!--      <v-toolbar-title class="headline text-uppercase">-->
<!--        <span>Vuetify</span>-->
<!--        <span class="font-weight-light">MATERIAL DESIGN</span>-->
<!--      </v-toolbar-title>-->
<!--      <v-spacer></v-spacer>-->
<!--      <v-btn-->
<!--        flat-->
<!--        href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--        target="_blank"-->
<!--      >-->
<!--        <span class="mr-2">Latest Release</span>-->
<!--      </v-btn>-->
<!--    </v-toolbar>-->

<!--    <v-content>-->
<!--      <HelloWorld/>-->
<!--    </v-content>-->
<!--  </v-app>-->
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import {getLocalStorage} from "./utils/localStorage";

export default {
  name: 'App',
  data () {
    return {
      user: ''
    }
  },
  created() {
    this.user = getLocalStorage('loginStatus');
    if(!this.user) {
      this.$router.push('login');
    }

  }
}
</script>
