'use strict';

window.addEventListener('DOMContentLoaded', event => {
    const id = getQueryParams()[0];

    if (id) {
        fetch(`http://localhost:3000/heroines/${id}`)
            .then(response => response.json())
            .then(heroine => console.log(heroine))
    } else {
        fetch("http://localhost:3000/heroines")
            .then(response => response.json())
            .then(heroines => makeHeroinesList(heroines))
    }
});

function makeHeroinesPage(heroines) {
    const $body = document.querySelector('body');
    const $h3 = createHeader("Heroines");
    generatePowerMenu();
    const $ul = makeHeroinesList(heroines);

    $body.append($h3, $ul);
}

function makeHeroinesList(heroines) {
    const $lis = heroines.map(heroine => makeHeroine(heroine));

    const $ul = document.querySelector('.heroines');
    $ul.append(...$lis);
    return $ul;
}

function makeHeroine(heroine) {
    const $li = createListItem(`${heroine.super_name} (a.k.a. ${heroine.name}) - `);
    $li.className = "heroine";

    const power_url = "http://localhost:3001/powers.html?id=" + heroine.power_id;
    const $a = createLink(power_url, heroine.power.name);
    $li.insertAdjacentElement('beforeend', $a);

    return $li;
}

function generatePowerMenu() {
    fetch("http://localhost:3000/powers")
        .then(response => response.json())
        .then(powers => createPowerMenu(powers));

    function createPowerMenu(powers) {
        const $h3 = document.querySelector('h3');
        const $menu = document.createElement('select');
        const $options = powers.map(power => createOption(power));
        const $showAll = document.createElement('option');
        $showAll

        $menu.append(...$options);
        return $menu;
    }

    function createForm(powers) {
        const $form = document.createElement('form');
        $form.name = "power";

        const $submit = document.createElement('input');
        $submit.type = "submit";
        $submit.value = "Filter";

        $form.append(createPowerMenu(powers), $submit)

        $form.onsubmit = (event) => {
            event.preventDefault();
            
        }
        $h3.insertAdjacentElement('afterend', $form);
    }

    function createOption(power) {
        const $option = document.createElement('option');
        $option.innerText = power.name;
        $option.value = power.id;
        return $option;
    }
}