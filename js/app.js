const QuizBox = document.querySelector("#QuizBox")
const QuizBoxs = document.querySelector("#QuizBoxs")
const Table = document.querySelector("#Table")
const min = document.querySelector("#min")
const min2 = document.querySelector("#min2")
Table.classList.add("activeNo")
let data2 = ""
let data3 = ""
let me = 0
let puan = 0
let datapuan = 0
const ENDPOINT = "http://localhost:3000/quiz"
const ENDPOINT2 = "http://localhost:3000/user"
let duz_cavab = 0
let sehv_cavab = 0
const FormINP = document.querySelector("#FormINP")
const NameInput = document.querySelector("#NameInput")
const SurnameInput = document.querySelector("#SurnameInput")



QuizBoxs.classList.add('activeNo')

FormINP.addEventListener('submit',(e) =>{
    e.preventDefault()
    QuizBoxs.classList.remove('activeNo')
    const QuizShow = (url) =>{
        axios.get(url).then(({data}) =>{
           QuizBox.innerHTML = ""
           datapuan = data.length
           
           data2 = data
            data3 = data2[me]
           
           
           
               try{
                   QuizBox.innerHTML = `<h1 class="question">${data3.question}</h1>
                   <div class="options-box">
                       <button class="options" onclick="Option('${data3.options[0]}','${data3.correctAnswer}')">${data3.options[0]}</button>
                       <button class="options" onclick="Option('${data3.options[1]}','${data3.correctAnswer}')">${data3.options[1]}</button>
                       <button class="options" onclick="Option('${data3.options[2]}','${data3.correctAnswer}')">${data3.options[2]}</button>
                       <button class="options" onclick="Option('${data3.options[3]}','${data3.correctAnswer}')">${data3.options[3]}</button>
                   </div>`
               }catch{
                   console.log("Salam");
                   
               }
               
           
           
           
           
           
   
           
           
           
        })
        
        
   }
   
   
   
   QuizShow(ENDPOINT)
   
   let arr = {
    name:NameInput.value,
    surname:SurnameInput.value,
    wrong:min2.innerText,
    correct:min.innerText,
}
console.log(arr);
axios.post(ENDPOINT2,arr).then((res) =>{
    if(res.status === 201){
        console.log('ugurla kecdiniz');
        
    }
    
})

})



const Option = (id,up) =>{
       
       
       
       
       
       
       
       
       
       
    const options = document.querySelectorAll(".options")
    options.forEach((element) => {
        element.style.backgroundColor = "";
    });
    options.forEach((element) =>{
        
        if(element.textContent === id){  
            if(id === up){
                element.style.backgroundColor = "green"
                duz_cavab++
                min.innerText = duz_cavab
                

            }else{
                element.style.backgroundColor = "red"
              sehv_cavab++
              min2.innerText = sehv_cavab
                
                
            }
            
        }
        
    })
    me++
    
 
 
    setTimeout(() => {
    if(me == datapuan){
        QuizBox.innerHTML = ""
        QuizBoxs.classList.add("m")
        Table.classList.remove("activeNo")
        
        
        
    }
    
    
    
        QuizShow(ENDPOINT)
    }, 500);
    }


