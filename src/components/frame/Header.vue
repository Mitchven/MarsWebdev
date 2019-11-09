<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="bg-green" variant="info">
      <b-navbar-brand href="#" class="text text-light" id="title">Easakay</b-navbar-brand>
      <li>
                        <a href="/Pictures">
                            <i class="images.png"></i>
                        </a>
                    </li>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <button @click="redirect('/Login')" class="text text-dark" id="login">Login</button>
            <button @click="redirect('/Register')" class="text text-dark" id="register">Register</button>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";
#title {
  color: $jess !important;
}
#login,#register {
  border-radius: 15%;
}
</style>
<script>
import ROUTER from "router";
export default {
  methods: {
    redirect(router) {
      ROUTER.push(router);
    }
  }
};
</script>
