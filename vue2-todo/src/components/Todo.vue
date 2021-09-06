<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{title}}</h1>
    <form @submit.prevent="addTodo"><!-- when this form submitted we can call addTodo fucntion -->
      <label for="newTodo">New Todo</label>
      <input v-model="newTodo" type="text" name="newTodo" id="newTodo"> <!-- whenever user typed in input box its saved to data  -->
      <button type="submit" name="button">Add</button>
    </form>
    <button type="button" name="button" @click="allDone">All Done</button>
    <ol>
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done"><!-- to check that the items is checked or not with v-model to update the value within-->
        <span :class="{done: todo.done}">{{todo.title}}</span>
        <button type="button" @click="removeTodo(todo)">Remove</button>
      </li>
    </ol>
    <!-- <h4>{{ newTodo }}</h4> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Hello Fatkhuri Fazri',
      newTodo: '',
      todos: [], // to save datas
    }
  },
  
  props: {  
    msg: String,
  },

  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = ""; // to clear out the input form after submitted
    },
    removeTodo(todo) {
      const todoIndex =this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1); 
    },
    allDone() {
      this.todos.forEach(todo => {
        todo.done = true;
      });
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.done {
  text-decoration: line-through;
}
</style>
