
// hello world

console.log("Hello JavaScript"); 

const leftSideMainPage = document.getElementById('l-s-main'); 
const allSection = document.querySelector('.all-section');
const loader = document.querySelector('.loader'); 
const loaderTwo = document.querySelector('.loader_2'); 

//// loader

window.addEventListener('load', move()); 
function move(){ 
    const elem = document.getElementById('bar'); 
    const loaderSvg = document.querySelector('.loader-svg'); 
    elem.style.width = "30em";  
    loaderSvg.style.height = "70px";
}

window.addEventListener('load', () => { 
         allSection.style.display = ' none'; 
         loaderTwo.style.display = "none";
     
        setTimeout(() => {
                // allSection.style.display = ''; 
                loader.style.display = 'none'; 
                loaderTwo.style.display = "block"; 
            }, 10000);

        })
        
        //// loader_2
        function moveTwo(){ 
                const element = document.getElementById('bar_2');
    console.log(element); 

    element.style.width = "30em";  
} 

// window.addEventListener('load', moveTwo()); 
// function moveTwo(){ 
    //     const element = document.getElementById('bar_2'); 
    
    //     element.style.width = "30em";  
    // }
    
    window.addEventListener('load', () => { 
        
            setTimeout(() => {
        moveTwo(); 
    }, 20000);

    setTimeout(() => {
        allSection.style.display = 'flex'; 
        loader.style.display = 'none'; 
        loaderTwo.style.display = "none"; 
     
    }, 12000);

}); 



// message

const messageInput = document.getElementById('message-input'); 



// New Messages 
    
     const msgVar = (i, n, b, k) =>  { 
        const msg = ` 
    
        <div class="wrapper">
        <div class="msg-des">
         <div class="images">
             <div class="user-dec-image">
             <div class="dec">

                 
             <div class ="s-img">  </div>
                 
                 <div class="main-dec">
                     <h3 id="name-sec">Elon Musk </h3>
                     <p id="online" style="color: #00a884;">online</p>
                 </div>
                </div>

                <div class="all-dec-svg">
                    <div class="search-dec-icon">
                    <span data-testid="search" data-icon="search" class="" style="width: 80px; padding-right: 2em ; "><svg viewBox="0 0 24 24" height="34" width="34" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg></span>
                    </div>
                    <div class="three-dec-dot">
                        <span data-testid="menu" data-icon="menu" class=""><svg viewBox="0 0 24 24" height="34" width="34" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
        <div class="message_div" id="div_message">
           <div class="first-message">
           <div class="msg-chat">
                    <div id="image-1"> 
                
                    </div> 
                    <div class="reply_message">
                    <p class="msg-body"  >
                        Let's build Tesla together Taiwo.
                    </p>
                  </div>
                </div>
                </div>
        </div>
        
        <div class="chat-box">
        <div class="chat-int">
        <div class="chat-wrapper">
        <span data-testid="smiley" data-icon="smiley" class="icon-chat1"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="ekdr8vow dhq51u3o" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg></span>
        <span data-testid="clip" data-icon="clip" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z"></path></svg></span>
        <div class="input-chat-box">
                        <input type="text" id="chat_boox" class="chatBox" placeholder="type a message" >
                    </div>
                    <span onclick="sendMe()" id="send_me" data-testid="send" data-icon="send" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="ekdr8vow dhq51u3o" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg></span>
                
                </div>
                </div>
                
        </div>
    
         </div>`; 
   
        
        messageInput.style.display = 'flex'; 
        leftSideMainPage.style.display = 'none'; 
        messageInput.innerHTML = msg; 

      const msgBody = document.querySelector('.msg-body'); 
      const image_Two = document.querySelector('#image-1'); 
      const nameSection = document.getElementById('name-sec'); 
      const image_One = document.querySelector('.s-img'); 

        image_Two.innerHTML = i; 
        image_One.innerHTML = k;
        msgBody.innerHTML = b; 
        nameSection.innerHTML = n; 
    };

    var ar = {
       ElonMusk:[
        '<img src="images/Musk.jpg" class="dec-img" alt="Musk image">',
        'Elon',
        'we need to talk Taiwo'
       ],
       Bernerd: [ 
        ' <img src="images/Bernerd.jpg" class="male-30-image" alt="connor image">', 
        'Bernerd', 
        'I want to see you on Monday'
       ], 
        Bill: [ 
        ' <img src="images/Bill Gate.jpg" class="male-30-image" alt="connor image">', 
        'Bill Gate', 
        'Come work with me'
       ],
        Carlos: [ 
        ' <img src="images/Carlos Slim.jpg" class="male-30-image" alt="connor image">', 
        'Carlos Slim', 
        'Wow Taiwo You are wonderful at your work'
       ],
        jeff: [ 
        ' <img src="images/Jeff.jpg" class="male-30-image" alt="connor image">', 
        'Jeff ', 
        "let's build together i need you"
       ], 
        larry: [ 
        ' <img src="images/Larry Ellison.jpg" class="male-30-image" alt="connor image">', 
        'Larry Ellison', 
        'Hey how are you Taiwo'
       ],
        larryPage: [ 
        ' <img src="images/Larry Page.jpg" class="male-30-image" alt="connor image">', 
        'Larry Page', 
        'we need to talk'
       ],
        sergeybrin: [ 
        ' <img src="images/sergey Brin.jpg" class="male-30-image" alt="connor image">', 
        'Sergey Brin ', 
        'I have a contract for you'
       ], 
        Steve: [ 
        ' <img src="images/Steve Balmer.jpg" class="male-30-image" alt="connor image">', 
        'Steve Balmer', 
        'Hey Taiwo can we meet'
       ],
        Warren: [ 
        ' <img src="images/Warren Buffett.jpg" class="male-30-image" alt="connor image">', 
        'Warren Buffett', 
        "I have heard alot about you let's meet"
       ]
       
       
    }; 

   

        function message1() {
            msgVar( ar.ElonMusk[0], ar.ElonMusk[1], ar.ElonMusk[2], ar.ElonMusk[0] );  
            
         }
         function message2() {
             msgVar( ar.Bernerd[0], ar.Bernerd[1], ar.Bernerd[2], ar.Bernerd[0]);  
          }
          function message3() {
             msgVar( ar.Bill[0], ar.Bill[1], ar.Bill[2], ar.Bill[0]);  
          }
          function message4() {
             msgVar( ar.Carlos[0], ar.Carlos[1],  ar.Carlos[2], ar.Carlos[0]);  
          }
          function message5() {
             msgVar( ar.jeff[0], ar.jeff[1],  ar.jeff[2], ar.jeff[0]);  
          }
          function message6() {
             msgVar( ar.larry[0], ar.larry[1],  ar.larry[2], ar.larry[0]);   
          }
          function message7() {
             msgVar( ar.larryPage[0], ar.larryPage[1],  ar.larryPage[2], ar.larryPage[0]);    
          }
          function message8() {
             msgVar( ar.sergeybrin[0], ar.sergeybrin[1],  ar.sergeybrin[2], ar.sergeybrin[0]);  
          }
          function message9() {
             msgVar( ar.Steve[0], ar.Steve[1],  ar.Steve[2], ar.Steve[0]);  
          }
          function message10() {
             console.log("hejwlerjlwe");
             msgVar( ar.Warren[0], ar.Warren[1],  ar.Warren[2], ar.Warren[0]);  
          }
     
    

  

    //  chat bot 


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


//  sending the message

const send = document.getElementById('send_me'); 

/// listen to enter key 

const allMsg = document.querySelectorAll('.gap'); 

for (let i = 0; i < allMsg.length; i++) {
    const element = allMsg[i];
    
    element.addEventListener('click', () => {
        var chatKey = document.querySelector('.chatBox');  
        const send = document.getElementById('send_me'); 
    
        chatKey.addEventListener('keypress', event => { 
            if (event.keyCode === 13) {
        
                send.click(); 
                chatKey.value = " "; 
            }
        });
    })
}


function sendMe(){ 
const chatInput = document.querySelector('.chatBox');  
const chatBox = document.getElementById('div_message'); 


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






