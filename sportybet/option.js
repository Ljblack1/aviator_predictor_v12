const btns =  document.querySelectorAll('.btn');
const container = document.querySelector('.login-container');

const input = document.getElementById('id');
const form = document.querySelector('.form');

const alert = document.querySelector('.alert');

const loader = document.querySelector('.small-load');


btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    container.classList.add('show-container');
    loader.style.display = 'flex';
    setTimeout(() => {
      loader.style.display = 'none';
      location.href = 'aviator.html';
    }, 5000)
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = input.value;

  if (id && id === '350') {
    displayAlert('succeded please wait', 'success');
    setTimeout(() => {
      location.href = 'aviator.html';
    }, 1000)
  } else {
    displayAlert('invalid id', 'danger');
  }
  input.value = '';
})

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(action);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(action);
  }, 1000)
}
