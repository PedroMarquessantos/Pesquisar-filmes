const apikey = '95d76d57';

const frmPesquisa = document.querySelector("form");

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();
    
    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa == "") {
        alert ('Preencha o Campo!');
        return
    }
    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apikey}`)
    .then(result => result.json())
    .then(json => carregaLista(json));

    const carregaLista = (json) => {
        const listar = document.querySelector("div.listar");
        listar.innerHTML = "";

    

        if (json.Response == 'False') {
            alert('Nenhum filme foi encontrado');
            return
        }

      json.Search.forEach(element => {
            console.log(element); 

        let item = document.createElement("div"); 
        item.classList.add("item");

        item.innerHTML =`<img src="${element.Poster}" /><h2>${element.Title}</h2>`

        listar. appendChild(item);
        
      });
   
    }
}