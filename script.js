const toggle=document.querySelector('.nav-toggle'), links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>links?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
(function(){const saved=localStorage.getItem('heego_theme');if(saved==='dark')document.body.classList.add('dark');document.querySelectorAll('.theme-toggle').forEach(btn=>btn.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('heego_theme',document.body.classList.contains('dark')?'dark':'light')}));})();
