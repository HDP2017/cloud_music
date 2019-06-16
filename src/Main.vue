<template>
    <div>

        <v-layout wrap>
            <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute temporary>
                <v-list class="pa-1">
                    <v-list-tile v-if="mini" @click.stop="mini = !mini">
                        <v-list-tile-action>
                            <v-icon>chevron_right</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>

                    <v-list-tile avatar tag="div">
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>John Leider</v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn icon @click.stop="mini = !mini">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>

                <v-list class="pt-0" dense>
                    <v-divider light></v-divider>

                    <v-list-tile v-for="item in items" :key="item.title">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>

                <v-bottom-nav :value="true" absolute color="transparent">
                    <v-btn>
                        <span>主题</span>
                        <v-icon>color_lens</v-icon>
                    </v-btn>

                    <v-btn>
                        <span>设置</span>
                        <v-icon>settings</v-icon>
                    </v-btn>

                    <v-btn>
                        <span>退出</span>
                        <v-icon>power_settings_new</v-icon>
                    </v-btn>
                </v-bottom-nav>

            </v-navigation-drawer>
        </v-layout>

        <v-toolbar dark color="teal lighten-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-btn icon color="red">
                <v-icon>album</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <router-view></router-view>
        <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
            <v-btn color="teal" flat value="recent" @click="go('list')">
                <span>首页</span>
                <v-icon>home</v-icon>
            </v-btn>

            <v-btn color="teal" flat value="favorites" @click="go('home')">
                <span>歌单</span>
                <v-icon>favorite</v-icon>
            </v-btn>

            <v-btn color="teal" flat value="nearby" @click="go('social')">
                <span>圈子</span>
                <v-icon>explore</v-icon>
            </v-btn>
        </v-bottom-nav>

    </div>
</template>

<script>
    export default {
        name: "Main",
        data () {
            return {
                bottomNav: 3,
                drawer: null,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' }
                ],
                mini: false,
                right: null
            }
        },
        created() {
            this.$router.push('home')
        },
        computed: {

        },
        methods: {
            go(address) {
                this.$router.push(address)
            }
        }
    }
</script>

<style scoped>

</style>