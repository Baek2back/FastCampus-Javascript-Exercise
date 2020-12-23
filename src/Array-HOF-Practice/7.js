/* eslint-disable prefer-object-spread */
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  // Object.assign
  todos = todos.map(todo => Object.assign({}, todo, { completed: true }));
  // Object spread
  todos = todos.map(todo => ({ ...todo, completed: true }));
  return todos;
}

toggleCompletedAll();

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/
