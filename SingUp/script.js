let Upbtn = document.getElementById('Upbtn');
let Inbtn = document.getElementById('Inbtn');
let user = document.getElementById('user-input');
let title = document.getElementById('title');

Inbtn.onclick = function() {
    user.style.maxHeight = '0';
    title.innerHTML = "Sing In";
    Upbtn.classList.add('disable');
    Inbtn.classList.remove('disable');
}

Upbtn.onclick = function() {
    user.style.maxHeight = '60px';
    title.innerHTML = "Sing Up";
    Upbtn.classList.remove('disable');
    Inbtn.classList.add('disable');
}

