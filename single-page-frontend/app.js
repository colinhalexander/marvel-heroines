window.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/heroines")
        .then(response => response.json())
        .then(heroines => run(heroines));
});

function run(heroines) {
    const urlParams = queryParamsObject();
    const heroineID = urlParams.get('id');
    const powerID = urlParams.get('powerID');
    
    makeHeroinesPage(heroines);
    if (heroineID) {
        const heroine = heroines.find(heroine => heroine.id == heroineID);
        makeHeroineShowPage(heroine);
        if (powerID) {
            makePowerPage(heroine.power);
        }
    }
}



