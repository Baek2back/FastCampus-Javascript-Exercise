const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const createInputTagWithStatus = (type = 'checkbox', isChecked) => {
  const attrSeperator = ' ';
  const status = isChecked ? 'checked' : '';
  return `<input type=${type}${status && attrSeperator + status}>`;
};

function render() {
  let html = '';

  todos.forEach(todo => {
    const { id, content, completed } = todo;
    html += `<li id="${id}">
  <label>${createInputTagWithStatus('checkbox', completed)}${content}</label>
</li>`;
  });

  return html;
}

console.log(render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
