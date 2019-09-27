window.addEventListener('DOMContentLoaded', event => {
    const id = getQueryParams();
    
    fetch(`http://localhost:3000/powers/${id}`)
        .then(response => response.json())
        .then(power => displayPowerInfo(power));
});

function displayPowerInfo(power) {
    const $body = document.querySelector('body');
    const $div = createPowerDiv(power);
    $body.appendChild($div);
}

function createPowerDiv(power) {
    const $div = document.createElement('div');
    const $h3 = createHeader(`Power: ${power.name}`);
    const $ul = createPowerList(power);

    $div.append($h3, $ul);
    return $div;
}

function createPowerList(power) {
    const $heroinesList = createListFromArray(relatedHeroines(power));

    const listItems = [`Description: ${power.description}`, "Heroines with this power:"];
    const $ul = createListFromArray(listItems);

    $ul.insertAdjacentElement('beforeend',$heroinesList)
    return $ul;
}

function relatedHeroines(power) {
    const names = power.heroines.map(heroine => heroine.super_name);
    return names;
}