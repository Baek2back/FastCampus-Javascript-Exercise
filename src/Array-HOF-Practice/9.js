const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  const candidates = todos.map(todo => todo.id);
  return Math.max(...candidates);
}

console.log(getMaxId()); // 3
