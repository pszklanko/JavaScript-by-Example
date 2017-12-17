class ToDoClass {
    constructor() {
        this.tasks = [
            {'task': 'Go to Dentist', isComplete: false},
            {'task': 'Do Gardening', isComplete: true},
            {'task': 'Renew Library Account', isComplete: false}
        ]
        this.loadTasks();
    }

    loadTask() {
        let tasksHtml = this.tasks.reduce((html, task, index) => html +=
        this.generateTaskHtml(task, index), '');
        document.getElementById('taskList').innerHTML = tasksHtml;
    }

    generateTaskHtml(task, index) {
        return `
        <li class="list-group-item checkbox">
            <div class="row">
                <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checbox">
                    <label><input id="toggleTaskStatus" type="checbox"
                    onchange="toDo.toggleTaskStatus(${index})" value="" class=""
                    ${task.isComplete?'checked':''}</label>label>
                </div>
        `
    }
}
let toDo;
window.addEventListener('load', () => {
    toDo = new ToDoClass();
});
