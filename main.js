document.querySelector("#run").addEventListener("click", onClickExecute);


function onClickExecute(){

const input = document.querySelector('input[name="what"]:checked').value;

switch (input) {
    case '1':
        ajaxCallHtml("data/1-get-html-article.html", ajaxGetHtml);
      break;
      case '2':
        ajaxCallJSON("data/2-get-contacts-list.json", ajaxCallJSON);
      break;
      case '3':
        ajaxCallHtml("data/3-get-html-movies.html", ajaxGetHtml);
      break;
      case '4':
        ajaxCallJSON("data/4-get-json-movies.json", ajaxCallJSON);
      break;

}

}

function ajaxCallHtml(page){

    fetch(page)
    .then(response => ajaxGetHtml(response))
    .catch(error => alert("Erreur : " + error));

}

async function ajaxCallJSON(page){

    fetch(page)
    .then(response => ajaxGetJson(response))
    .catch(error => alert("Erreur : " + error));

}

async function ajaxGetHtml(response){
    let html = document.querySelector("em");
    html.innerHTML = await response.text();

}

async function ajaxGetJson(response){
    
    const input = document.querySelector('input[name="what"]:checked').value;

    if(input == 2){
        let html = document.querySelector("em");
        json = await response.json();
    
        json.forEach((index) => {
    
            html.innerHTML += '<p><b>'+index.firstName+'</b></p>';
            html.innerHTML += '<p>'+index.phone+'</p>';
            console.log(index.firstName) //value
          })
    }else{
        console.log(response); //value
        let html = document.querySelector("em");
        json = await response.json();
    
        json.forEach((index) => {

            html.innerHTML +=`<ul class="movie-list"> <li><img src="images/${index.cover}"><p><strong>${index.title}</strong> - <em>${index.duration}</em></p></li>` + '</ul>';
    
 
           
          })
    }

}


