window.addEventListener('scroll',()=>{
    const parallax=document.querySelector('.parallax');
    let scrollP=window.pageYOffset;
   //  console.log(scrollP);
   parallax.style.transform='translateY('+scrollP*0.5+'px)';
   });