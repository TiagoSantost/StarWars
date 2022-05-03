document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        pegarPesoAltura();
        pegar_Planetas();
        document.querySelector('#personagem').onchange = mostrar_personagem;
        document.querySelector('#planetas').onchange = mostrar_planeta;
    }
}


//Planeta
function pegar_Planetas(){
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                response = JSON.parse(httpRequest.responseText);

                var lista = document.querySelector('#planetas');
                lista.innerHTML == ""

                    response.results.forEach(function(el) {
                    option = document.createElement("option");      
                    option.innerHTML =  el.name;
                    option.setAttribute('clima', JSON.stringify(el.climate))
                    option.setAttribute('nome', JSON.stringify(el.name))
                    lista.appendChild(option);
                });

                
            }   
        }
    }

    httpRequest.open('GET', 'https://swapi.dev/api/planets/?page=2');
    httpRequest.send();
}   


function mostrar_planeta(ev){
    selected = ev.target;
    const planeta_temperate = [];
    const planeta_frozen = [];

   for(let i = 0; i<selected.length; i++){
      pegar_clima = JSON.parse(selected[i].getAttribute('clima'));
       if(pegar_clima == 'frozen'){
            planeta_frozen.push(JSON.parse(selected[i].getAttribute('nome')));
       }
   }   

   if (planeta_frozen.length == 0){
     var lista = document.querySelector("#gelo");
        lista.innerHTML = "Não existe planeta frozen"
        
   }else{
   var lista = document.querySelector("#gelo")
   n =  JSON.parse(selected.selectedOptions[0].getAttribute('nome'))
   lista.innerHTML = "Planeta Gelado é: " 
   p = document.createElement("p");
   p.innerHTML = planeta_frozen ;
   lista.appendChild(p);

   }
   var lista = document.querySelector("#nome")
    n =  JSON.parse(selected.selectedOptions[0].getAttribute('nome'))
    lista.innerHTML = "Clima do Planeta:" + n ;
    p = document.createElement("p");
    p.innerHTML = JSON.parse(selected.selectedOptions[0].getAttribute('clima'));
    lista.appendChild(p);
   
    
    for(let i = 0; i<selected.length; i++){
       pegar_clima = JSON.parse(selected[i].getAttribute('clima'));
        if(pegar_clima == 'temperate'){
            planeta_temperate.push(JSON.parse(selected[i].getAttribute('nome')));
        }
    }   
    
     var lista = document.querySelector("#contar")
     lista.innerHTML = "Quantidade de planetas com o clima TEMPERATE"
     p = document.createElement("p");
     p.innerHTML = planeta_temperate.length;
     lista.appendChild(p);

}




//Pessoas
function pegarPesoAltura(){
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                response = JSON.parse(httpRequest.responseText);

               
                var lista = document.querySelector('#personagem');
               
               
                    response.results.forEach(function(el) {
                    option = document.createElement('option');      
                    option.innerHTML =  el.name;
                    option.setAttribute('peso', JSON.stringify(el.mass))
                    option.setAttribute('altura', JSON.stringify(el.height))
                    option.setAttribute('nome', JSON.stringify(el.name))
                    option.setAttribute('pele', JSON.stringify(el.skin_color))
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
    const altura_personagem = [];
    const cor_personagem = [];
    const peso_personagem = [];
    const nome_personagens = [];

    nome_global =  JSON.parse(selected.selectedOptions[0].getAttribute('nome'))
    
    
    //Logica  altura maior ou igual a 180
    for(let i = 0; i<selected.length; i++){
        pegar_altura = JSON.parse(selected[i].getAttribute('altura'));
        if(pegar_altura >= 180){
            altura_personagem.push(JSON.parse(selected[i].getAttribute('nome')))
        }
    }   
   

    //Logica cor da pele verde
   for(let i = 0; i<selected.length; i++){
    comparar_cor = JSON.parse(selected[i].getAttribute('pele'));
     if(comparar_cor == 'green'){
       cor_personagem.push(JSON.parse(selected[i].getAttribute('nome')))
    }
}   
    

   //Logica Massa maior que 100
   for(let i = 0; i<selected.length; i++){
    comparar_peso = JSON.parse(selected[i].getAttribute('peso'));
     if(comparar_peso > 100){
        peso_personagem.push(JSON.parse(selected[i].getAttribute('nome')))
    }
}   
    


    //Logica exibir nome
    for(let i = 0; i<selected.length; i++){
        nome_personagens.push(JSON.parse(selected[i].getAttribute('nome')))
     }
  

   
    //Jogar nome no html
    var lista = document.querySelector("#lista")
    lista.innerHTML = "Lista de Personagens"
     p = document.createElement("p");
     p.innerHTML = nome_personagens;
    lista.appendChild(p);

    
   //Jogar massa html
   var lista = document.querySelector("#maior")
   lista.innerHTML = "Personagens Com massa maior que 100";
   p = document.createElement("p");
   p.innerHTML = peso_personagem;
   lista.appendChild(p);

    //Jogar altura html
     var lista = document.querySelector("#altura")
        lista.innerHTML = "Altura do" +  nome_global
        p = document.createElement("p");
        p.innerHTML =  JSON.parse(selected.selectedOptions[0].getAttribute('altura'));
        lista.appendChild(p);

        //Jogar massa Html
        var lista = document.querySelector("#peso")
        lista.innerHTML = "O peso do " + nome_global 
        p = document.createElement("p");
        p.innerHTML =  JSON.parse(selected.selectedOptions[0].getAttribute('peso'));
        lista.appendChild(p);
        
        //Jogar Cor html

        var lista = document.querySelector("#cor")
        lista.innerHTML = "Personagens Verdes"
        p = document.createElement("p");
        p.innerHTML = cor_personagem ;
        lista.appendChild(p);
    
    
}
