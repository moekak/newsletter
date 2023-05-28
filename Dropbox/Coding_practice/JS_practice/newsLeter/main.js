const emailInput = document.getElementById("email");
const btn = document.getElementById("btn")
const labelContainer = document.getElementById('label-container')
console.log(link);

window.addEventListener("load", ()=>{
  emailList = JSON.parse(localStorage.getItem("email"))|| []
//   console.log(emailList);
  
})

btn.addEventListener("click", (e)=>{
      e.preventDefault();
      const email = emailInput.value;
      const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(emailList.includes(emailInput.value)){
           
      } else{
            emailList.push(emailInput.value)
            localStorage.setItem("email", JSON.stringify(emailList))
       
      
           window.location.href = "/thank.html"
      }
   
      // =========VALIDATION CHECK =================
     
      const labelContainer = document.getElementById('label-container')
      const alert = document.getElementById("alert")
      if(emailRegex.test(email)){
            console.log("ok");
            emailInput.style.border = "1.5px solid hsl(231, 7%, 60%)"
            emailInput.style.color = "hsl(231, 7%, 60%)"
            emailInput.style.backgroundColor= "none"
            alert.style.opacity = "0"

            
      }else{
            emailInput.style.border = "1.5px solid hsl(4, 100%, 67%)"
            emailInput.style.color = "hsl(4, 100%, 67%)"
            emailInput.style.backgroundColor= "hsl(4, 100%, 95%)"
            alert.style.opacity = "1"
            
      }
      console.log(labelContainer);

      emailInput.value = ''
})



