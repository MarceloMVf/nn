const Press = document.querySelector('#start');
const titulo = document.querySelector('#inicio')

Press.addEventListener("click", function(){

    if(titulo.textContent == "Clique na imagem"){
        inicio.textContent = ("Talvez a ultima vez que foi visto sorrindo"); 
        document.getElementById("imagestart").src = "imagem/feliz.jpg"; 

        var tagH2 = document.createElement("h2"); 
        var h2Text = document.createTextNode("Quando criança, Sasuke cresceu na sombra de seu irmão mais velho, Itachi Uchiha, que era reconhecido como um prodígio e visto como um gênio pelo clã Uchiha. Sasuke não saía do pé de seu irmão e sempre que podia, chamava seu irmão para brincar ou treinar contigo. Após o massacre do seu clã, Sasuke viveu em um lado sombrio, com sentimentos frios e com apenas um objetivo: se vingar do seu irmão mais velho, Itachi Uchiha. Ele foi visto como forçado a conviver com Naruto e Sakura, já que ele não era muito chegado a fazer amigos e se achava bem diferente dos seus colegas. Logo na primeira introdução do Time 7, Sasuke mostrou grande frieza ao falar de si, chamando muita atenção dos seus colegas e do seu professor.");  
        tagH2.appendChild(h2Text); 
        document.body.appendChild(tagH2); 

    } else if(inicio.textContent == "Talvez a ultima vez que foi visto sorrindo"){
        inicio.textContent = ("O choro de quem descobre a verdade"); 
        document.getElementById("imagestart").src = "imagem/triste.jpg"

        var h2Text = document.createTextNode("Sasuke realizou sua tão desejada vingança, o ódio que carregava pelo seu irmão que aniquilou seu clã foi saciado. Mas, após matar seu irmão, lhe foi revelada a verdade sobre Uchiha Itachi. O motivo dele ter acabado com todo o seu clã, suas verdadeiras intenções, o amor que sentia por Sasuke e a vontade de protege-lo. A aniquilação de seu clã nada mais era do que uma missão carregada à Itachi por Konoha.");  
        tagH2.appendChild(h2Text); 
        document.body.appendChild(tagH2); 

    } else if(inicio.textContent == "O choro de quem descobre a verdade"){
        inicio.textContent = ("O uso dos olhos e seu preço"); 
        document.getElementById("imagestart").src = "imagem/confiante.jpg"

        var h2Text = document.createTextNode("Sasuke, após matar seu irmão, jura vingança a Konoha, vingança essa atrasada por ser filiar a aktsuke, onde teve que lutar com Killer Be. Na luta, Sasuke percebe que embora forte, ainda lhe falta poder para ser o maior ninja e conseguir fazer oque quiser. Mas é claro que sua confiaça não é abalada. Mesmo sabendo que seus olhos o levariam a cegueira, como consequência de seu uso constante, Sasuke vai até o limte, tendo uma evolução de seus olhos posteriormente.");  
        tagH2.appendChild(h2Text); 
        document.body.appendChild(tagH2); 
    } 
 
})