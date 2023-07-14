function loadCats(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('wrapper').innerHTML += `<img class="w-[300px] h-[300px] object-cover" src="${data[0].url}" alt="">`
        document.getElementById('cat-images').style.backgroundColor = '#424c51';
    })
}


function doStuff(){
    document.getElementById('wrapper').innerHTML = '';
    let catNumber = document.getElementById('cat-number').value;
    
    if(catNumber != '' && !isNaN(catNumber)){
        document.getElementById('message').innerHTML = `loading...`;
        console.log(catNumber);
        
        for(i=0;i<catNumber;i++){
            data = loadCats()
            
        }
        document.getElementById('message').innerHTML = `from <a class="underline" target="_blank" href="https://thecatapi.com/">thecatapi.com</a>`;
    }
    else{
        document.getElementById('cat-images').style.backgroundColor = '';
        document.getElementById('message').innerHTML = 'Please enter a number';
    }

}

document.getElementById('cat-number').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        document.getElementById('go').click();
    }
})