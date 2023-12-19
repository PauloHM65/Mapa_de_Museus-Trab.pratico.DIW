const urlMuseu = 'https://jsonserver-diw2--pauloharaujo345.repl.co/museus'
var DadosMuseus = []


function DadosJsonServer(func) {
    fetch(urlMuseu)
        .then(function (response) { return response.json() })
        .then(function (dados) {
            DadosMuseus = dados
            func()
        })


}


let params = new URLSearchParams(location.search)
let id = params.get('id')
function descricaoAlbun() {
    var strM = document.getElementById('aqui')
    mus = DadosMuseus.find(function (elem) { return elem.id == id })
    M = ''
    if (mus) {
        M = `<img id="img_album" src="${mus.i}" style="width:700px;" style="height: 700px;">`

    } else {
        tela.innerHTML = `Cidade não encontrada`
    }
    strM.innerHTML = M
}
DadosJsonServer(descricaoAlbun)



