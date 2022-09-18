
fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jokeData=>{
     const  jokeText=jokeData.attachments[0].text;
     const jokeElement=document.getElementById('Text');
     jokeElement.innerHTML=jokeText+"🤣🤣";
})