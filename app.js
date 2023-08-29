const App = {
  data() {
    return {
      title: "Note list",
      placeholder: "add note title...",
      inputValue: "",
      notes: ["note 01" , "note 02"]
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNote() {
        this.notes.push(this.inputValue);
        this.inputValue = "";
    },
    removeNote() {
      this.notes.push(this.inputValue);
  },
    keyPressHandler(event) {
      if(event.key === "Enter") {
        this.addNote();
      }
    }
  },
};

Vue.createApp(App).mount("#app");
