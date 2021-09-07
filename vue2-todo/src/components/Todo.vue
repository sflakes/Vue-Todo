<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div class="todo">
      <form @submit.prevent="addTodo">
        <!-- when this form submitted we can call addTodo fucntion -->
        <label for="newTodo"></label>
        <input v-model="newTodo" type="text" name="newTodo" id="newTodo" placeholder="Add something?"/>
        <!-- whenever user typed in input box its saved to data  -->
        <button type="submit" name="button">Add</button>
      </form>
      <button type="button" name="button" @click="allDone">All Done</button>
    </div>
     <ol>
        <li v-for="todo in todos" :key="todo.title">
          <input
            type="checkbox"
            v-model="todo.done"
            style="margin-right: 30px;"
          /><!-- to check that the items is checked or not with v-model to update the value within-->
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <button type="button" @click="removeTodo(todo)">Remove</button>
        </li>
      </ol>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Vue2 Todo App",
      newTodo: "",
      todos: [], // to save datas
    };
  },

  props: {
    msg: String,
  },

  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = ""; // to clear out the input form after submitted
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    allDone() {
      this.todos.forEach((todo) => {
        todo.done = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  color: rgb(211, 211, 235);
}
.todo {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.todo button {
  padding: 10px 30px;
  border-radius: 5px;
  border: transparent;
}

.todo input {
  padding: 10px 15px;
  width: 800px;
  border-radius: 5px;
  border: transparent;
  text-align: left;
}
.done {
  text-decoration: line-through;
}

ol li button {
  margin-left: 30px;
}
</style>
