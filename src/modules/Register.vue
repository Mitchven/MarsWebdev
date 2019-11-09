<template>
<div class="row loginPage">
    <div class="col-md-4"></div>
    <div class="col-md-4">
        <div class="container">
            <div class="card">
                <center>
                    <div class="card-header">EASAKAY</div>
                </center>
                <div class="card-body">
                    <div class="form-group">
                        <label for="username" class="bmd-label-floating">Firstname</label>
                        <input v-model="content.firstname" type="text" class="form-control" id="fname"  placeholder="Enter firstname.." required />
                    </div>
                    <div class="form-group">
                        <label for="lastname" class="bmd-label-floating">Lastname</label>
                        <input v-model="content.lastname" type="text" class="form-control" id="lname" placeholder="Enter lastname..."  required/>
                    </div>
                    <div class="form-group">
                        <label for="username" class="bmd-label-floating">Username</label>
                        <input v-model="content.username" type="text" class="form-control" id="uname" placeholder="Enter username..."  required/>
                    </div>
                    <div class="form-group">
                        <label for="email" class="bmd-label-floating">Email Address</label>
                        <input v-model="content.email" type="email" class="form-control" id="email" placeholder="Enter email..."  required/>
                    </div>
                    <div class="form-group">
                        <label for="password" class="bmd-label-floating">Password</label>
                        <input v-model="content.password" type="password" class="form-control" id="password" placeholder="Enter password..." required />
                    </div>
                    <div class="form-group">
                        <label for="cpassword" class="bmd-label-floating"> Confirm Password</label>
                        <input v-model="content.cpassword" type="password" class="form-control" id="cpassword" placeholder="Enter password..." required />
                    </div>
                    <center>
                        <button id="register2" class="btn btn-primary" @click="submit">
                            Register
                        </button>

                        <div class="ui hidden divider"></div>

                        <div class="ui column grid">
                            <div class="center aligned column">
                                <p>
                                    Got an account? <router-link to="/Login">Log In</router-link>
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
// @import"assets/colors.scss";

// #username{
//   color: $primary !important;
// }
// #pass{
//   color: $primary !important;
</style>

<script>
// import ROUTER from "router";
import AUTH from "services/auth";
export default {
    data() {
        return {
            auth: AUTH,
            content: {
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                password: "",
                cpassword: ""
            }
        };
    },
    methods: {
        submit: function (e) {
            e.preventDefault();
                sessionStorage.setItem("Firstname",this.content.firstname),
                sessionStorage.setItem("Lastname",this.content.lastname),
                sessionStorage.setItem("Username", this.content.username),
                sessionStorage.setItem("Email", this.content.email),
                sessionStorage.setItem("Password", this.content.password),
                AUTH.register(this.content.username, this.content.password);
        }
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
    background-color: gray;
    color: black;
    font-size: 30px;
}

#fname,#lname,#uname,#email,#password,#cpassword{
    width: 97.7%;
    height: 34px;
    padding-left: 5px;
    margin-bottom: 20px;
    margin-top: 8px;
    border-color: black;
    font-size: 16px;
}

#register2 {
    font-size: 20px;
    margin-top: 15px;
    background: linear-gradient(#22abe9 5%, #36caf0 100%);
    border: 1px solid #0F799E;
    padding: 7px 35px;
    border-color: black;
    text-shadow: 0px 1px 0px #13506D;
    font-weight: bold;
    border-radius: 2px;
    cursor: pointer;
    width: 100%;
}

#register2:hover {
    background: linear-gradient(#36caf0 5%, #22abe9 100%);
}

.card-body {
    background-color: gray;
    color: white;
    font-size: 20px;
}
</style>
