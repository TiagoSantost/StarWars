document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        pegar_personagem();
        pegarPesoAltura();
        document.querySelector('#personagem').onchange = mostrar_personagem;
    }
}

function pegarPesoAltura(){
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                response = JSON.parse(httpRequest.responseText);

                var lista = document.querySelector('#personagem');
                lista.innerHTML == ""

                    response.results.forEach(function(el) {
                    option = document.createElement('option');      
                    option.innerHTML =  el.name;
                    option.setAttribute('peso', JSON.stringify(el.mass))
                    option.setAttribute('altura', JSON.stringify(el.height))
                    option.setAttribute('nome', JSON.stringify(el.name))
                    
                    lista.appendChild(option);
        
                });

                
            }   
        }
    }

    httpRequest.open('GET', 'https://swapi.dev/api/people/?page=2');
    httpRequest.send();
} 

function pegar_personagem(){
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                response = JSON.parse(httpRequest.responseText);

                var lista = document.querySelector('#lista');
                lista.innerHTML == ""

                    response.results.forEach(function(el) {
                    option = document.createElement('option');      
                    option.innerHTML =  el.name;
                    option.setAttribute('nome', JSON.stringify(el.name))
                    lista.appendChild(option);
        
                });

                
            }   
        }
    }

    httpRequest.open('GET', 'https://swapi.dev/api/people/?page=2');
    httpRequest.send();
}   

function mostrar_personagem(eve){
    selected = eve.target;
    massa = JSON.parse(selected.selectedOptions[0].getAttribute('peso'));
    altura = JSON.parse(selected.selectedOptions[0].getAttribute('altura'));
    nome = JSON.parse(selected.selectedOptions[0].getAttribute('nome'));

    console.log('nome' + nome);
    console.log('Altura' + altura);
    console.log('peso' + massa);

    //if(massa > 100){
    //    var list = document.querySelector("#maior")
     //   li = document.createElement("li");
     //   li.innerHTML = nome;
    //    lista.appendChild(li);
//    }

    
        var lista = document.querySelector("#altura")
        lista.innerHTML = ""
        li = document.createElement("li");
        li.innerHTML = altura;
        lista.appendChild(li);

        var lista = document.querySelector("#peso")
        lista.innerHTML = ""
        li = document.createElement("li");
        li.innerHTML = massa;
        lista.appendChild(li);
    
    
}