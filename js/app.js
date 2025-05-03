const QuizBox = document.querySelector("#QuizBox")
const QuizBoxs = document.querySelector("#QuizBoxs")
const min = document.querySelector("#min")
const min2 = document.querySelector("#min2")
min.classList.add("activeNo")
min2.classList.add("activeNo")
let data2 = ""
let data3 = ""
let me = 0
let puan = 0
let datapuan = 0
const ENDPOINT = "http://localhost:3000/quiz"
let duz_cavab = 0
let sehv_cavab = 0
const QuizShow = (url) =>{
     axios.get(url).then(({data}) =>{
        QuizBox.innerHTML = ""
        datapuan = data.length
        
        data2 = data
         data3 = data2[me]
        console.log(me);
        
        
        
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
const Option = (id,up) =>{
    me++
    console.log(me);
    if(me == datapuan){
        QuizBox.innerHTML = ""
        QuizBoxs.classList.add("m")
        min.classList.remove("activeNo")
min2.classList.remove("activeNo")
    }
    
    
    
    
    
    
    
    
    
    const options = document.querySelectorAll(".options")
    options.forEach((element) => {
        element.style.backgroundColor = "";
    });
    options.forEach((element) =>{
        
        if(element.textContent === id){  
            if(id === up){
                duz_cavab++
                min.innerText = duz_cavab
                
                

            }else{
              sehv_cavab++
              min2.innerText = sehv_cavab
                
            }
            
        }
        
    })
    
    
    
    QuizShow(ENDPOINT)
    }
    

