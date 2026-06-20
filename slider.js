document.addEventListener('DOMContentLoaded', function(){
    const slides = Array.from(document.querySelectorAll('.slide'));
    const dotsContainer = document.querySelector('.dots');
    let idx = 0;
    const interval = 4500;

    // build dots
    slides.forEach((s,i)=>{
        const btn = document.createElement('button');
        btn.setAttribute('aria-label','Slide '+(i+1));
        btn.addEventListener('click',()=>{ show(i); resetTimer(); });
        dotsContainer.appendChild(btn);
    });

    const dotButtons = Array.from(dotsContainer.children);
    function updateDots(){ dotButtons.forEach((b, i)=> b.classList.toggle('active', i===idx)); }

    function show(i){ slides.forEach(s=>s.classList.remove('active')); idx = (i+slides.length)%slides.length; slides[idx].classList.add('active'); updateDots(); }

    document.querySelector('.prev').addEventListener('click', ()=>{ show(idx-1); resetTimer(); });
    document.querySelector('.next').addEventListener('click', ()=>{ show(idx+1); resetTimer(); });

    let timer = setInterval(()=> show(idx+1), interval);
    function resetTimer(){ clearInterval(timer); timer = setInterval(()=> show(idx+1), interval); }

    // initialize
    show(0);
});
