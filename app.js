const userInput = document.getElementById('namaUser');
const timeUser = document.getElementById('timeUser');
const btnAdd = document.getElementById('btnAdd');
const list = document.getElementById('list');

// Ambil dari localStorage
let todos = JSON.parse(localStorage.getItem('todos') || '[]');

// Fungsi untuk menyimpan ke localStorage
function simpanLocalStorage(){
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Fungsi untuk render ulang list dari localStorage
function renderTodos() {
  list.innerHTML = ''; // Hapus list sebelumnya
  todos.forEach((todo, index) => {
    const libaru = document.createElement('li');
    libaru.classList.add('li');
    libaru.textContent = `${todo.judul} -/- ${todo.waktu}`;

    // Tombol selesai
    const btnSelesai = document.createElement('button');
    btnSelesai.textContent = 'selesai';
    btnSelesai.classList.add('btnSelesai');
    btnSelesai.style.marginLeft = '10px';
    btnSelesai.addEventListener('click', function(){
      libaru.style.textDecoration = 'line-through';
      todos[index].done = true;
      simpanLocalStorage();
    });

    // Tombol hapus
    const btnHapus = document.createElement('button');
    btnHapus.textContent = 'hapus';
    btnHapus.classList.add('btnHapus');
    btnHapus.style.marginLeft = '10px';
    btnHapus.addEventListener('click', function(){
      todos.splice(index, 1);
      simpanLocalStorage();
      renderTodos(); // Render ulang list setelah dihapus
    });

    libaru.appendChild(btnSelesai);
    libaru.appendChild(btnHapus);

    if (todo.done) {
      libaru.style.textDecoration = 'line-through';
    }

    list.appendChild(libaru);
  });
}

// Render list saat halaman dimuat
renderTodos();

// Event listener tombol tambah
btnAdd.addEventListener('click', function(e){
  e.preventDefault();
  
  const judul = userInput.value;
  const waktu = timeUser.value;

  if(judul && waktu){
    todos.push({judul, waktu, done: false});
    simpanLocalStorage();
    renderTodos(); // Render ulang list setelah menambah item

    // Reset input
    userInput.value = '';
    timeUser.value = '';
  } else {
    alert('harap jangan kosongkan salah satu input');
  }
});

const container = document.querySelector('.container');

window.addEventListener('DOMContentLoaded', function(){
  if(container){
    container.style.opacity = '0.1'
  }
})

const oke = document.getElementById('oke')
oke.addEventListener('click', function(){
  const warning = document.querySelector('.warning')
  warning.style.display = 'none'
  container.style.opacity = '1'

})