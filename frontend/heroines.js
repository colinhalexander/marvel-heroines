window.addEventListener('DOMContentLoaded', event => {
    fetch("http://localhost:3000/heroines")
        .then(response => response.json())
        .then(heroines => makeHeroinesList(heroines))
});

function makeHeroinesList(heroines) {
    const list = heroines.map(heroine => makeHeroine(heroine));

    $ul = document.querySelector('.heroines');
    $ul.append(...list);
}

function makeHeroine(heroine) {
    const $li = document.createElement('li');
    $li.innerText = `${heroine.super_name} (a.k.a. ${heroine.name}) `;
    $li.className = "heroine";

    $button = document.createElement('button');
    $button.className = "show";
    $button.innerText = "Read More";
    $button.addEventListener('click', () => {
        location.href = "http://localhost:3001/powers.html?id=" + heroine.id;
    });
    $li.appendChild($button);

    return $li;
}