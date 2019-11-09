import ROUTER from 'router'
export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        this.user = user
    },
    register(email, password) {
        this.registeredUser.push({
        email : email,
        password : password
        })
        ROUTER.push("/Login");
    },
    login(email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].email === email && this.registeredUser[i].password === password) {
                ROUTER.push('/Dashboard')
                return this.registeredUser[i]

            }
        }
        return null
    },
    logout() {
        this.user = null
        ROUTER.push('/Login')
    },

    update(){
        this.user = null
        ROUTER.push('/EditProfile')
    },

    save(){
        this.user = null
        ROUTER.push('/PersonalInfo')
    }

}