function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    //var hora = 22
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `It's ${hora}:${minuto} hours.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = './img/imagem-dia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = './img/imagem-tarde.png'
        document.body.style.background = '#b9846f' 
    } else {
        img.src = './img/imagem-noite.png'
        document.body.style.background = '#221919' 

    }    
}