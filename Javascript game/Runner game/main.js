const startgame = document.getElementById('startbtn').addEventListener('click', function(){
    document.getElementById('game').style.display = "block"
});

    document.addEventListener('keyup', function(){
        jump()
    })
    const character = document.getElementById('character')
    const block = document.getElementById('block')
    function jump() {
    
        if(character.classList != "animate"){
            character.classList.add("animate")
        }
        setTimeout(function(){
            character.classList.remove("animate")
    
        },500)
    }
    const checkdead = setInterval(() => {
        const characterTop =parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        const blockleft =parseInt(window.getComputedStyle(block).getPropertyValue("left"))
        if(blockleft < 75 && blockleft > 1 && characterTop >= 120){
            alert("Game Over");
            block.style.animation = "none";
            block.style.display = "none"
            const loader = document.getElementById('loader');
            loader.style.display = "none"
            const loader2= document.getElementById('loader2')
            loader2.style.display = "block"
    
        }
        
    }, 10);
    function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
      }
      
      function fadeOut(){
        setInterval(loader, 3000);
      }
      
      window.onload = fadeOut;
