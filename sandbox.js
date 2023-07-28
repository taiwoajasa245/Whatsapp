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

const messageInput = document.getElementById('message-input'); 


function messageFuc(){ 

    messageInput.style.display = 'block'; 
    leftSideMainPage.style.display = 'none'; 
        
}; 

// chat bot 
const chatBox = document.getElementById('div_message'); 
const chatInput = document.querySelector("#chat_box");
const send = document.getElementById('send_me'); 
// const replyHandle = document.querySelector('.msg-body');
const me = document.querySelector('.bat'); 

/// listen to enter key 

chatInput.addEventListener('keypress', event => { 
    if (event.keyCode === 13) {
        send.click(); 
        chatInput.value = " "; 
    }
}); 

// setting the time fuction 
window.addEventListener('load', function(){ 
    const setTime = document.querySelectorAll('#time'); 
    const timeEl = setTime.length; 
    for(let i=0; i<timeEl; i++) { 
        const getTime = new Date();
        const time =` ${getTime.getHours()}:${getTime.getMinutes()}`; 
        setTime[i].innerHTML = time;
    }

}); 



function sendMe(){ 
    const inputValue = String(chatInput.value); 
    const div = document.createElement("div"); 
    if( inputValue === " "){ 
        alert('input Empty'); 
    }else { 
        div.innerHTML = inputValue;
        div.classList.add('input_message'); 
        chatBox.appendChild(div); 
        inputValue === " "; 

        setTimeout(() => {
            var onlineStatus = document.getElementById("online"); 
            onlineStatus.innerText = "typing..."; 
        }, 1000);

        setTimeout(() => {
            var onlineStatus = document.getElementById("online"); 
            onlineStatus.innerText = "online"; 
        }, 4000);
       


        setTimeout(() => {
            var msgArray = [ 
                "I see you would like to work with me Taiwo", 
                "Well that is good we will gladly accept you Taiwo", 
                "You are the best", 
                "You a welcome anytime Taiwo"
        
            ];
        
            const rando =String(msgArray[Math.round(Math.random() * 3)]);
            const divs = document.createElement("div"); 
        
            divs.innerHTML = `
             <div class='msg-chat'> 
                <img src='images/Musk.jpg' style='margin-top: 10px;' class='chat_box img' alt='musk'>
                <div style='margin-top: 10px;' class='reply_message'> 
                  <p class='bat'>${rando}</p> 
                </div>
            </div> `
        
            divs.classList.add('first_message'); 
            chatBox.appendChild(divs); 
        }, 4000);

    }
}



