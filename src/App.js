import Form from "./components/Form";
// import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { useState } from "react";
import { nanoid } from "nanoid";
function App(props){
  const [tasks, setTasks]= useState(props.tasks);

  function addTask(name) {
  const newTask = { id: `todo-${nanoid()}`, name, completed: false };
  setTasks([...tasks, newTask]);
  }

function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    if (id === task.id) {
      console.log(task)
      return {...task, completed: !task.completed}
    }
    return task
  });
  setTasks(updatedTasks)
}

  const taskList = tasks.map((task) => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
      />
    )
  );
const unfinishedTaskCount = tasks.filter((task)=> {
  if (task.completed) {
    return false
  } else {
    return true
  }
}).length;

const headingText = () => {
  if (unfinishedTaskCount === 0) {
    return "Congrats! All tasks complete."
  } else if (unfinishedTaskCount === 1) {
    return `Just 1 task remaining`
  } else
    return `${unfinishedTaskCount} tasks remaining`
};


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      {/* <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div> */}
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
