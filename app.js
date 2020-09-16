
let button = document.getElementById("btn");

button.addEventListener("click", Speech);

function Speech(){
     
   window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;
   
   let Recognition = new SpeechRecognition();
   Recognition.interimResults =true;
   Recognition.continuous=true;
   let p= document.createElement("p")
   let words =document.querySelector(".words")
   words.appendChild(p);
    
   Recognition.addEventListener("result", (e)=> {
       
        let transcript = [...e.results].map( (result)=>result[0]).map((result)=>result.transcript).join('');
        p.textContent= transcript;
   }
   );

   Recognition.start();

}