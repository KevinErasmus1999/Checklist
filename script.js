const checklist = document.getElementById('checklist');

checklist.addEventListener('change', (event) => {
  if (event.target.tagName === 'INPUT') {
    const item = event.target.parentNode.textContent.trim();
    if (event.target.checked) {
      localStorage.setItem(item, 'checked');
    } else {
      localStorage.removeItem(item);
    }
  }
});

// Load checked items from local storage
for (let i = 0; i < localStorage.length; i++) {
  const item = localStorage.key(i);
  if (localStorage.getItem(item) === 'checked') {
    const input = checklist.querySelector(`label:contains('${item}') input`);
    if (input) {
      input.checked = true;
    }
  }
}