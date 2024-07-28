// pages/index/index.js
Page({
  data: {
    user: {
      name: "John Doe",
    },
    tasks: [
      {
        title: "Belajar",
        completed: false,
        id: 1,
        date: "2021-01-01",
        description: "Belajar Bahasa Inggris",
      },
    ],
    view: "hello",
    count: 1,
  },
  onInputTitle: function (e) {
    this.setData({
      newTaskText: e.detail.value,
    });
  },

  onInputDesc: function (e) {
    this.setData({
      newTaskDesc: e.detail.value,
    });
  },

  addTask: function () {
    console.log(this.data.newTaskText);
    if (
      this.data.newTaskText.trim() === "" ||
      this.data.newTaskDesc.trim() === ""
    ) {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: this.data.newTaskText,
      description: this.data.newTaskDesc,
      completed: false,
      date: new Date().toISOString().split("T")[0],
    };

    this.setData({
      tasks: [...this.data.tasks, newTask],
      newTaskText: "",
      newTaskDesc: "",
    });
  },

  toggleComplete: function (e) {
    const taskId = e.target.id;
    const updatedTasks = this.data.tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });

    this.setData({
      tasks: updatedTasks,
    });
  },

  deleteTask: function (e) {
    const taskId = e.target.id;
    const updatedTasks = this.data.tasks.filter((task) => task.id !== taskId);

    this.setData({
      tasks: updatedTasks,
    });
  },
});
