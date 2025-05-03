const QuizBox = document.querySelector("#QuizBox")
const ENDPOINT = "http://localhost:3000/quiz"
const cavab = ""
const QuizShow = (url) =>{
     axios.get(url).then(({data}) =>{
        data.options.forEach(element => {
        });
        
        
        
        QuizBox.innerHTML += `<h1 class="question">${data.question}</h1>
                <div class="options-box">
                    <p class="options" onclick="Option('${data.options[0]}','${data.correctAnswer}')">${data.options[0]}</p>
                    <p class="options" onclick="Option('${data.options[1]}','${data.correctAnswer}')">${data.options[1]}</p>
                    <p class="options" onclick="Option('${data.options[2]}','${data.correctAnswer}')">${data.options[2]}</p>
                    <p class="options" onclick="Option('${data.options[3]}','${data.correctAnswer}')">${data.options[3]}</p>
                </div>`

        
        
        
     })
     
     
}


QuizShow(ENDPOINT)
const Option = (id,up) =>{
    
    const options = document.querySelectorAll(".options")
        options.forEach((element) => {
            element.style.backgroundColor = "";
        });
       options.forEach((element) =>{
        
        if(element.textContent === id){  
            id === up ? element.style.backgroundColor = "green" : element.style.backgroundColor = "red"
            console.log(id);
            
        }
        
       })
        
    }
    

