const app = Vue.createApp({
    data() {
        return {
            taskText: "",
            tasks: [],
            isFav: [],
            isHidden: false,
        };
    },
    methods: {
        hideTasks() {
            this.isHidden = !this.isHidden;
        },
        addTask() {
            this.tasks.push(this.taskText);
            this.taskText = "";
        },
        taskFav(index) {
            this.isFav[index] = !this.isFav[index];
        },
        taskDelete(index) {
            this.tasks.splice(index, 1);
        },
        clearTasks() {
            this.tasks = "";
        },
    },
});

app.mount("#app");