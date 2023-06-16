const messageInput = document.getElementById('message-input'); 
const leftSideMainPage = document.getElementById('l-s-main'); 


const allSection = document.querySelector('.all-section');
const loader = document.querySelector('.loader'); 

//// loader

window.addEventListener('load', move()); 
function move(){ 
    const elem = document.getElementById('bar'); 
    elem.style.width = "30em";  
}

window.addEventListener('load', () => { 
     allSection.style.display = ' none'; 
     
    setTimeout(() => {
        allSection.style.display = 'flex'; 
        loader.style.display = 'none'; 
    }, 1000);

})

// message

function messageDiv(){ 
    messageInput.style.display = 'block'; 
    leftSideMainPage.style.display = 'none'; 
}

