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

function mostraDadosAlbun() {
    var strM = document.getElementById('albuns_destaque')
    M = ''
    for (let i = 0; i < DadosMuseus.length; i++) {
        var mus = DadosMuseus[i]
        M += `<div class="col-xxl-2 col-md-4 col-sm-12">
        <a class="linkalbuns" href="album.html?id=${mus.id}">
            <div class="card" style="width: 216px, hight: 254px;">
                <img src="${mus.i}" class="card-img-top" alt="assets/img/masp.png">
                <div class="card-body">
                    <h3><strong>${mus.nome}</strong></h3>
                    <p class="card-text">${mus.resumo}
                    </p>
                </div>
            </div>
        </a>
    </div>`
    }

    strM.innerHTML = M
}
DadosJsonServer(mostraDadosAlbun)


function dadosCarrosel() {
    var str = document.getElementById('cccc')
    C = ''

    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            //*******
            var imgs = DadosMuseus[i]
            C += `<div class="carousel-item active">
            <a href="album.html?id=${imgs.id}">
                <img src="${imgs.i}" style="width: 400px;" style=" height: 300px;"
                    class="d-block w-100" alt="${imgs.nome}">
            </a>
         </div>`
        } else {
            var imgs = DadosMuseus[i]
            C += `<div class="carousel-item">
                <a href="album.html?id=${imgs.id}">
                    <img src="${imgs.i}" style="width: 400px;" style=" height: 300px;"
                        class="d-block w-100" alt="${imgs.nome}">
                </a>
            </div>`
        }

    }

    str.innerHTML = C
}
DadosJsonServer(dadosCarrosel)




function mostraMap() {
    // ----------------------------------------------
    // IMPORTANTE: Crie uma conta no Mapbox e adicione  
    // sua accessToken na linha abaixo
    const centralLatLong = [-43.936167922, -19.925902963]

    mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bG9oZW5yaXF1ZTEiLCJhIjoiY2xwbXBrOG82MDIybzJtcGJ1ZTNkb3gzciJ9.VeKXaKzmPAUS7I0kwn9arg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: centralLatLong,
        zoom: 13
    });


    // ----------------------------------------------
    // Adiciona marcadores para unidades da PUC Minas
    DadosMuseus.forEach((uni) => {
        let popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<p><a href="album.html?id=${uni.id}" target="_blank">${uni.nome}</a></p>
                ${uni.cidade}`);
        const marker = new mapboxgl.Marker()
            .setLngLat(uni.localizado)
            .setPopup(popup)
            .addTo(map);
    })


    // Adiciona um marcador com nossa posição no mapa

}
DadosJsonServer(mostraMap)












