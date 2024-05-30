
    // const hamburger = document.getElementById('hamburger');
    // const menulink = document.getElementById('links');

    // hamburger.addEventListener('click', function() {
    //     menulink.classList.toggle('links');
    //     hamburger.classList.toggle('hamburger');

        
    // });

    const hamburger =document.getElementById('hamburger');
    const offMenuList =document.querySelector('.off-menu');

    hamburger.addEventListener('click', function(){
     offMenuList.classList.toggle('off-menu');
     hamburger.classList.toggle('hamburger');
    });