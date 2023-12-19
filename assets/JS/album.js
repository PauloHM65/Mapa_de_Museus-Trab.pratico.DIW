const urlMuseu = 'https://jsonserver-diw2--pauloharaujo345.repl.co/museus'
var DadosMuseus = []


function DadosJsonServer(func){
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
    var strM = document.getElementById('foto_dados_autoria')
    mus = DadosMuseus.find(function (elem) { return elem.id == id })
    M = ''
    if (mus) {
        M = `<img id="img_album" src="${mus.i}" style="width:300px;" style="height: 300px;">
            <div id="dados_autoria">
                <P><strong>Descrição </strong></p>
                <p>${mus.resumo}</p>
                <div id="loc_dat_albun">
                    <div>
                        <P><strong>Localização </strong></p>
                        <p>${mus.localizado}</p>
                    </div>
                    <div>
                        <P><strong>Data de Registro </strong></p>
                        <p>22/01/2023(Foto Googel Maps)</p>
                    </div>
                </div>
            </div>`
    } else {
        tela.innerHTML = `Cidade não encontrada`
    }
    strM.innerHTML = M
}
DadosJsonServer(descricaoAlbun)



function mostrafotos() {
    var strM = document.getElementById('row')
    M = ''
    for (let i = 0; i < DadosMuseus.length; i++) {
        var mus = DadosMuseus[i]
        M += `<div class="col-xxl-3 col-md-6 col-sm-12">
                        <div class="card">
                            <a class="linkalbuns" href="PopUp.html?id=${mus.id}" target="_blank">
                                <img class="imgalbum" src="${mus.i}" class="card-img-top"
                                    alt="${mus.i}">
                            </a>
                        </div>
                     </div>`
    }

    strM.innerHTML = M
}
DadosJsonServer(mostrafotos)





document.getElementById('button_destaque').addEventListener('click', function () {
    // Defina a URL para a qual você deseja fazer a requisição POST
    const url = 'https://jsonserver-diw--pauloharaujo345.repl.co/museus';

    // Objeto com os dados que você deseja enviar no corpo da requisição
    const dados = {
        chave1: ''
    };

    // Configuração da requisição
    const configuracao = {
        method: 'POST', // Método HTTP
        headers: {
            'Content-Type': 'application/json' // Tipo de conteúdo no corpo da requisição
        },
        body: JSON.stringify(dados) // Converte os dados para formato JSON
    };

    // Faz a requisição usando fetch
    fetch(url, configuracao)
        .then(response => response.json())
        .then(data => {
            console.log('Resposta:', data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
})

