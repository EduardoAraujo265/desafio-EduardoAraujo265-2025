class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    let resultado = { lista:[] };
       const animais =[
                    {nome:'Rex', animal: 'cão', brinquedo: ['RATO','BOLA']},
                    {nome: 'Mimi', animal: 'gato', brinquedo: ['BOLA','LASER']},
                    {nome: 'Fofo', animal: 'gato', brinquedo: ['BOLA','RATO','LASER']},
                    {nome: 'Zero', animal: 'gato', brinquedo: ['RATO','BOLA']},
                    {nome: 'Bola', animal: 'cão', brinquedo: ['CAIXA','NOVELO']},
                    {nome: 'Bebe', animal: 'cão', brinquedo: ['LASER','RATO','BOLA']},
                    {nome: 'Loco', animal: 'jabuti', brinquedo: ['SKATE','RATO']}
                      ];

    let erroanimal = false;
    const brinquedosValidos = ['RATO','BOLA','LASER','NOVELO','CAIXA','SKATE'];
    const brinquedo1 = brinquedosPessoa1.split(",");
    const brinquedo2 = brinquedosPessoa2.split(",");
    const animaisDesejados = ordemAnimais.split(",");


    if(brinquedo1.every(brinquedo => brinquedosValidos.includes(brinquedo)) ){
        
      }else{
        return resultado ={ 
                 erro: 'Brinquedo inválido' 
               };
      };

    if(brinquedo2.every(brinquedo => brinquedosValidos.includes(brinquedo)) ){
        
      }else{
        return { 
                 erro: 'Brinquedo inválido' 
               };
      };

    //encontra os animais inseridos no abrigo, retorna erro se não encontrar
    let nomeAnimal = []; 
    let animaisAdotados = 0;             
    animaisDesejados.forEach((element,index) => {
      nomeAnimal[index] = animais.find(animais => animais.nome === element);
      
      if(!nomeAnimal[index]){
        erroanimal=true;
      }
    });

    if(erroanimal){
      return resultado ={ 
        erro: 'Animal inválido' 
      };
    }else{
    let adotavelPessoa1 = false;
    let adotavelPessoa2 = false;
    let quantidadeBrinquedosCompativeis1 = 0;
    let quantidadeBrinquedosCompativeis2 = 0;
    nomeAnimal.forEach((element,index) => {
      quantidadeBrinquedosCompativeis1 = 0;
      quantidadeBrinquedosCompativeis2 = 0;
      adotavelPessoa1 = false;
      adotavelPessoa2 = false;

      brinquedo1.forEach((elements,indice) => {
                if (nomeAnimal[index].animal === 'jabuti' && animaisAdotados >0) {
            if(elements.includes(nomeAnimal[index].brinquedo)) {

              adotavelPessoa1 = true;
                  } }else{
                      if (nomeAnimal[index].brinquedo[quantidadeBrinquedosCompativeis1] === elements) {

                      if(nomeAnimal[index].animal ==='gato'){
                      elements = 'brinquedo tomado pelo gato!';
                      }
                      quantidadeBrinquedosCompativeis1++;
                  if (quantidadeBrinquedosCompativeis1 === element.brinquedo.length) {
                      adotavelPessoa1 = true;     
                        }
        }
      }});

      brinquedo2.forEach((brinquedo,indice) => {
                      if (nomeAnimal[index].animal === 'jabuti' && animaisAdotados >0) {
            if(elements.includes(nomeAnimal[index].brinquedo)) {
              adotavelPessoa1 = true;
          }}else{
        if (nomeAnimal[index].brinquedo[quantidadeBrinquedosCompativeis2] === brinquedo) {
          quantidadeBrinquedosCompativeis2++;
          if (quantidadeBrinquedosCompativeis2 === element.brinquedo.length) {
            adotavelPessoa2 = true;
          }
        }
      
      }});

      if(animaisAdotados < 3){
        if(!adotavelPessoa1 && !adotavelPessoa2){
          resultado.lista.unshift(`${nomeAnimal[index].nome} - abrigo`);
          }else if(adotavelPessoa1 && adotavelPessoa2){
              resultado.lista.unshift(`${nomeAnimal[index].nome} - abrigo`);
            }else if(adotavelPessoa1){
              resultado.lista.unshift(`${nomeAnimal[index].nome} - pessoa 1`);
              animaisAdotados++;
              }else{
                resultado.lista.unshift(`${nomeAnimal[index].nome} - pessoa 2`);
                animaisAdotados++;
        }
      }

    });
    resultado.lista.sort();
    return resultado;
    
}};
    }



export { AbrigoAnimais as AbrigoAnimais };
