const userInput = document.getElementById('namaUser');
const timeUser = document.getElementById('timeUser');
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', function(e){
const list = document.getElementById('list');


  e.preventDefault();
  const judul = userInput.value;
  const waktu = timeUser.value;

  if(judul && waktu){
    const libaru = document.createElement('li');
    libaru.classList.add('li')
    libaru.textContent = `${judul} ${waktu}`  
    // tombol selesai

    const btnSelesai = document.createElement('button')
    btnSelesai.textContent = 'selesai'
    btnSelesai.classList.add('btnSelesai')
    btnSelesai.style.marginLeft = '10px'
    btnSelesai.addEventListener('click', function(){
      libaru.style.textDecoration = 'line-through'
    })

    // tombol hapus
    const btnHapus = document.createElement('button')
    btnHapus.textContent = 'hapus'
    btnHapus.classList.add('btnHapus')
    btnHapus.style.marginLeft = '10px'
    btnHapus.addEventListener('click', function(){
      libaru.style.display = 'none'
    })

    libaru.appendChild(btnSelesai)
    libaru.appendChild(btnHapus)

    list.appendChild(libaru)

    userInput.value = ''
    timeUser.value = ''

  }else {
    alert('harap jangan kosongkan salah satu input');
  }
})


