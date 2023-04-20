//your code here!
const infiList = document.getElementById('infi-list');

// add initial list items
for (let i = 1; i <= 10; i++) {
  const li = document.createElement('li');
  li.textContent = `List item ${i}`;
  infiList.appendChild(li);
}

// add more list items on scroll
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 7) {
    for (let i = 1; i <= 2; i++) {
      const li = document.createElement('li');
      li.textContent = `List item ${i + infiList.children.length}`;
      infiList.appendChild(li);
    }
  }
});
