/* eslint-disable prefer-object-spread */
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  // Object.assign
  todos = todos.map(todo => {
    const { id: todoId, completed } = todo;
    return Object.assign({}, todo, {
      completed: todoId === id ? !completed : completed
    });
  });

  // Object spread
  todos = todos.map(todo => {
    const { id: todoId, completed } = todo;
    return {
      ...todo,
      complted: todoId === id ? !completed : completed
    };
  });
  return todos;
}

toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
