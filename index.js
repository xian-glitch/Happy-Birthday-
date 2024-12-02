const button = document.getElementById('end');
const animate = document.getElementById('birtday');
const form = document.querySelector('.container');
const othButton = document.getElementById('other');
const container = document.getElementById('division');
const body = document.getElementById('mainbod');
const next = document.querySelector(".next");
const end = document.getElementById('the-end')

function myfunction(){
    body.style.backgroundColor = ('white');
    othButton.style.borderColor = ('black');
    othButton.style.visibility = ('hidden');
    end.style.visibility = ('visible')
}

function myOth(){
    location.reload()
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(button.onclick){
        animate.style.visibility = ('visible');
        button.style.visibility = ('hidden');
        othButton.style.visibility = ('visible')
        
    }else{   
    }; 
    
   
    
})


