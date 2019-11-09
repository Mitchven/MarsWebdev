<template>
<div class="row loginPage">
    <div class="col-md-4"></div>
    <div class="col-md-4">
        <div class="container">
            <div class="card">
                <center>
                    <div class="card-header">LOGIN</div>
                </center>
                <div class="card-body">
                    <div class="form-group">
                        <label for="email" class="bmd-label-floating">Username</label>
                        <input v-model="username" type="username" class="form-control" id="uname" placeholder="Enter username..." />
                    </div>
                    <div class="form-group">
                        <label for="pwd" class="bmd-label-floating">Password</label>
                        <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter password..." />
                    </div>
                    <center>
                        <button id="login1" class="btn btn-primary" @click="submit">
                            Login
                        </button>
                        <div class="ui hidden divider"></div>

                        <div class="ui column grid">
                            <div class="center aligned column">
                                <p>
                                    Don't have an account? <router-link to="/Register">Register</router-link>
                                </p>
                            </div>
                        </div>

                    </center>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "assets/colors.scss";

#username {
    color: $primary !important;
}

#pass {
    color: $primary !important;
}
</style>

<script>
import AUTH from 'services/auth'
export default {
    data() {
        AUTH
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        submit: function (e) {
            e.preventDefault();
            AUTH.login(this.username, this.password)
        },

    }
};
</script>

<style>

.container {
    width: 400px;
    height: 210px;
    margin: 50px auto;
    font-family: 'Droid Serif', serif;
    position: relative;

}

.card-header {
    background-color: aqua;
    color: white;
    font-size: 30px;
}

#uname,#password{
    width: 97.7%;
    height: 34px;
    padding-left: 5px;
    margin-bottom: 20px;
    margin-top: 8px;
    border-color: black;
    font-size: 16px;
}

#login1 {
    font-size: 20px;
    margin-top: 15px;
    background: linear-gradient(#22abe9 5%, #36caf0 100%);
    border: 1px solid #0F799E;
    padding: 7px 35px;
    color: white;
    text-shadow: 0px 1px 0px #13506D;
    font-weight: bold;
    border-radius: 2px;
    cursor: pointer;
    width: 100%;
}

#login1:hover {
    background: linear-gradient(#36caf0 5%, #22abe9 100%);
}

.card-body {
    background-color: black;
    color: white;
    font-size: 20px;
}
</style>
