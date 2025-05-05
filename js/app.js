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
const Users = document.querySelector("#Users")
const NameInput = document.querySelector("#NameInput")
const SurnameInput = document.querySelector("#SurnameInput")
const SualNext = document.querySelector("#SualNext")
const SualEnd = document.querySelector("#SualEnd")



let surname = ""
let name = ""

QuizBoxs.classList.add('activeNo')

FormINP.addEventListener('submit',(e) =>{
    e.preventDefault()
    if(SurnameInput.value.length > 0 && NameInput.value.length > 0){
        surname = SurnameInput.value
        name = NameInput.value
    }else{
        
        return alert("formu doldur")
    }
    
    
    QuizBoxs.classList.remove('activeNo')
    
   
   
Users.classList.add("activeNo")
FormINP.classList.add("activeNo")
})
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
           
       
       
       
       
       

       
       
           SualEnd.innerText = "/ " + data.length
           
           
    })
    
    
}



QuizShow(ENDPOINT)

SualNext.innerText = 0
const AnswerBoxs = document.querySelector("#AnswerBoxs")

const Option = (id,up) =>{
       
       
       
    data3 = data2[me]
    
        AnswerBoxs.innerHTML += `<h1 class="AnswerTitle" id="AnswerTitle">${data3.question}</h1>
        <div class="questionBox">
            <div class="questionA">
                <p>A)</p>
            <p>${data3.options[0]}</p>
            </div>
            <div class="questionB">
                <p>B)</p>
            <p>${data3.options[1]}</p>
            </div>
            <div class="questionC">
                <p>C)</p>
            <p>${data3.options[2]}</p>
            </div>
            <div class="questionD">
                <p>D)</p>
            <p>${data3.options[3]}</p>
            </div>
        </div>
        <div class="sual_cavab">
            <h1 id="Question">sualin cavabi:</h1>
            <p id="OptionsJs">${data3.correctAnswer}</p>
        </div>
        <div class="user_cavab">
            <h1 id="UserQuestion">senin cavab:</h1>
            <p id="OptionsUser">${id}</p>
        </div>`
    
    
       
       
       
       
       
       
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
              options.forEach((element) =>{
                if(element.innerText == up){
                    element.style.backgroundColor = "green"
                }
              })
              
                
                
            }
            
        }
        
    })
    me++
    SualNext.innerText = me
 
 
    setTimeout(() => {
    if(me == datapuan){
        Swal.fire({
            title: "Imtahan Bitti!",
            text: "cavablari gormek ucun ok basin",
            icon: "success"
            
          });
          
        const SualBtn = document.querySelector("#SualBtn")
        SualBtn.style.display = "block" 
        SualBtn.addEventListener('click',(e) =>{
            AnswerBoxs.style.display = "block"
           
            
        })
        const PointsTitle = document.querySelector("#PointsTitle")
    const SualBox = document.querySelector("#SualBox")
    SualBox.style.display = "none"
        QuizBox.innerHTML = ""
        QuizBoxs.classList.add("m")
        QuizBoxs.classList.add("n")
        Table.classList.remove("activeNo")
        SualBox.classList.remove()
        let arr = {
            name:name,
            surname:surname,
            wrong:min2.innerText,
            correct:min.innerText
        }
        console.log(arr);
        axios.post(ENDPOINT2,arr).then((res) =>{
            if(res.status === 201){
                console.log('ugurla kecdiniz');
                
            }
            
        })
        if (duz_cavab > 19) {
            PointsTitle.innerText = "Mükəmməl! Heç bir səhv yoxdur! 🏆";
        } else if (duz_cavab >= 15) {
            PointsTitle.innerText = "Əla iş! 👏 Amma daha yaxşı ola bilərdi!";
        } else if (duz_cavab >= 10) {
            PointsTitle.innerText = "Yaxşı cəhd! Davam et 💪";
        } else if (duz_cavab >= 5) {
            PointsTitle.innerText = "Çox yaxşı işlədin! Bir az daha diqqət 👍";
        } else {
            PointsTitle.innerText = "Daha çox məşq etməlisən 😕";
        }   
        
        
        
    }
    
    
    
        QuizShow(ENDPOINT)
    }, 300);
   
    }

    
