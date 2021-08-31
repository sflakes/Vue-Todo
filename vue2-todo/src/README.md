[x], Create New Todo Form
    <!-- 
    <form>
      <label for="newTodo">New Todo</label>
      <input type="text" name="newTodo" id="newTodo">
      <button type="submit" name="button">Add</button>
    </form> 
    -->
[x], Call a function when the form is submitted
     <!-- 
     <form @submit.prevent="addTodo">
      <label for="newTodo"> New Todo </label>
      <input type="text" name="newTodo" id="newTodo">
      <button type="submit" name="button">Add</button>
    </form>
    <script>
        export default {
            methods: {
                addTodo() {
                    console.log('form submitted');
            }
        },
    }
    </script> 
    -->
[x], Create string property on our data to store the user input
    <!-- 
    <script>
        export default {
            name: 'HelloWorld',
            data() {
                return {
                title: 'Hello Fatkhuri Fazri',
                newTodo: '', <<<======
                }
            },
            props: {  
                msg: String,
            },
            methods: {
                addTodo() {
                console.log('form submitted');
                }
            },
    }
    </script> 
    -->
<!-- [], Watch the property change as we type in the input -->
[x], Log the user input when the form is submitted
    <!-- console.log(this.newTodo); -->
[x], Create an array property on our data for todos
    <!-- todo: [], -->
[x], Push the new todo into the todos array, with done: false
    <!-- addTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false
      })
    } -->
[x], Show the todos in a list
    <!-- <li v-for="todo in todos" :key="todo.title"> -->
[x], Check done on a todo to mark it as done
    <!-- <input type="checkbox" v-model="todo.done"> -->
[x], Show a line through the todo text
    <!-- <span :class="{done: todo.done}">{{todo.title}}</span> -->
[x], Add a button to delete a todo
    <!-- <button type="button" @click="removeTodo(todo)">Remove</button> -->
[], Add a button to mark all todos as done