const messageInput = document.getElementById('message-input'); 
const leftSideMainPage = document.getElementById('l-s-main'); 


const allSection = document.querySelector('.all-section');
const loader = document.querySelector('.loader'); 
const loaderTwo = document.querySelector('.loader_2'); 


// //// loader

// window.addEventListener('load', move()); 
// function move(){ 
//     const elem = document.getElementById('bar'); 
//     const loaderSvg = document.querySelector('.loader-svg'); 
//     elem.style.width = "30em";  
//     loaderSvg.style.height = "70px";
// }

// window.addEventListener('load', () => { 
//      allSection.style.display = ' none'; 
//      loaderTwo.style.display = "none";
     
//     setTimeout(() => {
//         // allSection.style.display = ''; 
//         loader.style.display = 'none'; 
//         loaderTwo.style.display = "block"; 
//     }, 10000);

// })

// //// loader_2
// function moveTwo(){ 
//     const element = document.getElementById('bar_2');
//     console.log(element); 
    
//     element.style.width = "30em";  
// } 

// // window.addEventListener('load', moveTwo()); 
// // function moveTwo(){ 
// //     const element = document.getElementById('bar_2'); 
    
// //     element.style.width = "30em";  
// // }

// window.addEventListener('load', () => { 

//     setTimeout(() => {
//         moveTwo(); 
//     }, 20000);

//     setTimeout(() => {
//         allSection.style.display = 'flex'; 
//         loader.style.display = 'none'; 
//         loaderTwo.style.display = "none"; 
     
//     }, 12000);

// }); 



// message

function messageDiv(){ 
    messageInput.style.display = 'block'; 
    leftSideMainPage.style.display = 'none'; 
}

