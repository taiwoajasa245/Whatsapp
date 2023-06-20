const messageInput = document.getElementById('message-input'); 
const leftSideMainPage = document.getElementById('l-s-main'); 


const allSection = document.querySelector('.all-section');
const loader = document.querySelector('.loader'); 
const loaderTwo = document.querySelector('.loader_2'); 

//// loader

window.addEventListener('load', move()); 
function move(){ 
    const elem = document.getElementById('bar'); 
    elem.style.width = "30em";  
}

window.addEventListener('load', () => { 
     allSection.style.display = ' none'; 
     loaderTwo.style.display = "none";
     
    setTimeout(() => {
        // allSection.style.display = ''; 
        loader.style.display = 'none'; 
        loaderTwo.style.display = "block"; 
    }, 1000);

})

//// loader_2

window.addEventListener('load', move_2()); 
function move_2(){ 
    const elem = document.getElementById('bar_2'); 
    elem.style.width = "30em";  
}

window.addEventListener('load', () => { 
   
    
     
    setTimeout(() => {
        allSection.style.display = 'flex'; 
        // loader.style.display = 'none'; 
        loaderTwo.style.display = "none"; 
    }, 100000);

})



// message

function messageDiv(){ 
    messageInput.style.display = 'block'; 
    leftSideMainPage.style.display = 'none'; 
}

