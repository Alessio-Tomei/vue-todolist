let app = new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [
            {
                text: 'comprare latte',
                done: false
            },
            {
                text: 'andare dal barbiere',
                done: true
            },
            {
                text: 'salutare i nonni',
                done: false
            },
            {
                text: 'correre',
                done: true
            },
            {
                text: 'palestra',
                done: false
            }
        ]
    },
    methods: {
        addTask: function() {
            if (this.newTask != '') {
                let newTaskObj = {
                    text: this.newTask,
                    done: false
                };
                this.newTask = '';
                this.tasks.push(newTaskObj);
            }
        },
        deleteTask: function(index) {
            this.tasks.splice(index, 1);
        },
        changeDone: function(task) {
            task.done = !task.done;
        }

    }
});