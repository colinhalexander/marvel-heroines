window.addEventListener('DOMContentLoaded', event => {
    const id = getQueryParams();
    if (!id) {
        fetch("http://localhost:3000/powers")
            .then(response => response.json())
            .then(powers => makePowersList(powers))
    } else {
        fetch(`http://localhost:3000/powers/${id}`)
        .then(response => response.json())
        .then(power => displayPowerInfo(power))
    }
});

function makePowersList(powers) {
    const list = powers.map(power => makePower(power));

    $ul = document.querySelector('.powers');
    $ul.append(...list);
}

function makePower(power) {
    const $li = document.createElement('li');
    $li.innerText = `${power.name}: ${power.description} `;
    $li.className = "power";

    $button = document.createElement('button');
    $button.className = "show";
    $button.innerText = "Read More";
    $button.addEventListener('click', () => {
        location.href = "http://localhost:3001/powers.html?id=" + power.id;
    });
    $li.appendChild($button);

    return $li;
}

function displayPowerInfo(power) {
    $body = document.querySelector('body');

    $div = document.createElement('div');
    $h3 = document.createElement('h3');
    $h3.innerText = `Power: ${power.name}`;
    $ul = document.createElement('ul');

    $body.appendChild($div);
    $div.append($h3, $ul);

    $li = document.createElement('li');
    $li.innerText = `Description: ${power.description}`;
    $ul.appendChild($li);
}

function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id;
}