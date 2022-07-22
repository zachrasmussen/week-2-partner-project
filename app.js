const players = [
    {
        name: 'playerOne',
        health: 100,
        gold: 0,
        lvl: 0,
        img: 'https://art.pixilart.com/5ae0ff3fc3c5e01.png'
    },
    {
        name: 'playerTwo',
        health: 100,
        gold: 0,
        lvl: 0,
        img: 'https://cdn.imgbin.com/10/22/17/imgbin-final-fantasy-viii-final-fantasy-the-4-heroes-of-light-final-fantasy-iv-final-fantasy-x-watching-Bz8VewCbwRG8eKxjis2ZcgPsi.jpg'
    }
]

const boss = {
    name: 'badBoss',
    health: 100,
    img: 'https://img.favpng.com/1/6/1/minecraft-pixel-art-shy-guy-mario-png-favpng-1iRGcB78bcDia3eCs07Yq6TSs_t.jpg'
}


function drawPlayers() {
    let template = ''
    players.forEach(player => {
        console.log('this works')
        template += `
        <div class="col-2 mx-3 mt-3 p-2 border border-5 border-light bg-dark">
                <span class="d-flex justify-content-between">
                    <p class="text-light">${player.name}</p>
                    <img class="characters img-fluid me-2" src="${player.img}" alt="">
                </span>
                <p class="text-light">${player.health} :</p>
                <p class="text-light">${player.gold} :</p>
                <p class="text-light">${player.lvl} :</p>
            </div>`
    })
    let playersElm = document.getElementById('players')
    console.log('this part works')
    playersElm.innerHTML = template
}
drawPlayers()

function drawBoss() {
    let template = ''
    template += `<section class="col-3 p-2 border border-5 border-light" onclick="attack()">
        <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" aria-label="Danger example"
                style="width: ${boss.health}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>">
        <h1 class="text-light text-center" >${boss.name}</h1>

        <img class="offset-3 boss-img"
            src="${boss.img}"
            alt="">
    </section>`
    let bossElm = document.getElementById('boss')
    console.log('this part works')
    bossElm.innerHTML = template
}
drawBoss()

function attack() {
    console.log('attacking');
    let attacked = boss[0]
    console.log('attacked',);
    boss.health -= 5
    console.log(boss.health)
    drawBoss()
}
attack()