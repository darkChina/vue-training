const App = {
    data() {
        return {
            title: "Counter",
            counter: 0
        }
    }
}

Vue.createApp(App).mount("#app");