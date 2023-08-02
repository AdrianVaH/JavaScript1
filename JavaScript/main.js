function tocaSom (idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio)
    if(elemento === null) {
        alert('Elemento não encontrado');
    }
    if(elemento != null){
        if(elemento.localName === 'audio'){
            elemento.play();
        }
    }

}

const listaDeTeclas =  document.querySelectorAll('.tecla'); 

//listaDeTeclas.lenght é um código para quando vc nao sabe o numero exato de teclas, ent vc usa esse comando para se adequar ao tamanho requirido

//console.log() serve para mostrar no inspecionar da pagina oq tal variavel esta representando

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;
    
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    } 
    
    tecla.onkeydown = function (evento) { 
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }
            
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    
}
 

