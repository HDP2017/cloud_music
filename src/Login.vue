<template>
    <v-card class="mx-auto" style="max-width: 500px;">
        <v-toolbar color="deep-purple accent-4" cards dark flat>
            <v-spacer></v-spacer>
            <v-card-title class="title font-weight-regular">登录</v-card-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" v-model="form" class="pa-3 pt-4">
            <v-text-field v-model="phone" box color="deep-purple" label="手机号"></v-text-field>
            <v-text-field v-model="password" box color="deep-purple" label="密码"
                          style="min-height: 96px" type="password">
            </v-text-field>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn flat @click="$refs.form.reset()">
                Clear
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="!(password && phone)" @click="login()" class="white--text" color="deep-purple accent-4" depressed>Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {setLocalStorage} from "./utils/localStorage";

    export default {
        name: "Login",
        data: () => ({
            phone: undefined,
            password: undefined,
            form: false,
            isLoading: false
        }),
        created() {
            this.form;
        },
        methods: {
            login() {
                this.$http.get("api/login/cellphone?phone=" + this.phone +"&password=" + this.password).then((data) => {
                    if(data.status == 200) {
                        setLocalStorage("loginStatus", true);
                        this.$router.push('/home');
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>