var tendangnhap = document.getElementsByClassName('tendangnhap');
var tendangnhaplogin = document.getElementById('tendangnhaplogin')
  
window.addEventListener('click', function(e){
	if (document.getElementById('dangnhapp').contains(e.target)){
        window.location = "login/index.html";
  } else{
    alert('Vui lòng đăng nhập');
  }
})

function menuseting(){
    window.location = "login/index.html";
}

window.addEventListener('click', function(e){
	var hienthi = document.getElementById('btn-child')
	if (document.getElementById('menuuu').contains(e.target)){
        hienthi.style.display = 'block';
  } else{
        hienthi.style.display = 'none';
  }
})


function handleLiked(e) {
    e.classList.toggle('like-btn--liked')
}
function handleLiked2(f) {
    f.classList.toggle('like-btn--liked')
}
function handleLiked3(g) {
    g.classList.toggle('like-btn--liked')
}

function hanlecomt1()
{
   var cmt1 = document.getElementById('cmt1')
   cmt1.onclick
}

