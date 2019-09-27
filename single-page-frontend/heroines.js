function makeHeroinesPage(heroines) {
    const $h3 = createHeader("The Heroines");
    const powers = getPowers(heroines);
    const $form = createFilterForm(powers, heroines);
    const $ul = createHeroinesList(heroines);
    const $button = createNewHeroineButton(powers);

    appendToSection('heroine-list', [$h3, $form, $ul, $button]);
}

function createHeroinesList(heroines) {
    const heroineLinks = heroines.map(heroineToLink);
    const $ul = createListFromArray(heroineLinks);
    return $ul;
}

function heroineToLink(heroine) {
    const $a = document.createElement('a');
    $a.innerText = `${heroine.super_name}`;

    const urlParams = queryParamsObject();
    if (urlParams.has("powerID")) urlParams.delete("powerID");
    urlParams.set("id", `${heroine.id}`)

    $a.href = `http://localhost:3001?${urlParams.toString()}`

    return $a;
}

function makeHeroineShowPage(heroine) {
    clearSection('heroine');
    const urlParams = queryParamsObject();
    urlParams.set("powerID", `${heroine.power_id}`)

    const $h3 = createHeader(`${heroine.super_name}`);
    const $a = createLink(`http://localhost:3001?${urlParams.toString()}`, heroine.power.name)
    const $ul = createListFromArray([`Alias: ${heroine.name}`, $a]);
    $a.insertAdjacentHTML("beforebegin", "Power: ");

    appendToSection('heroine', [$h3, $ul]);
}

function getPowers(heroines) {
    const ids = [];
    const powers = heroines
        .map(heroine => heroine.power)
        .filter((power) => {
            if (ids.includes(power.id)) {
                return false
            } else {
                ids.push(power.id);
                return true;
            }
        });
    return powers;
}

function createFilterForm(powers, heroines) {
    const $form = document.createElement('form');
    const $label = createSelectLabel("filter", "Filter by Power: ");
    const $select = createPowerDropdown(powers);
    $select.insertAdjacentElement('afterbegin', createShowAllOption());
    const $submit = createSubmit("Filter");

    $form.append($label, $select, $submit);
    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        const powerID = $select.value
        filterByPower(powerID, heroines);
    });

    return $form;
}

function createShowAllOption() {
    const $showAll = document.createElement('option');
    $showAll.value = "0";
    $showAll.innerText = "Show All";
    return $showAll;
}

function createOption(power) {
    const $option = document.createElement('option');
    $option.innerText = `${power.name}`;
    $option.value = `${power.id}`;

    return $option;
}

function filterByPower(powerID, heroines) {
    const $currentList = document.querySelector('#heroine-list > ul');
    const filteredHeroines = (powerID != 0) ? 
                             heroines.filter(heroine => heroine.power_id == powerID) : 
                             heroines;
    const $newList = createHeroinesList(filteredHeroines);
    $currentList.innerHTML = $newList.innerHTML
}

function createNewHeroineButton(powers) {
    const $button = document.createElement('button');
    $button.innerText = "Add New Heroine";
    $button.addEventListener('click', () => {
        makeNewHeroinePage(powers);
    })

    return $button;
}

function makePowerPage(power) {
    const $h3 = createHeader(`${power.name}`);
    const $ul = createListFromArray([`Description: ${power.description}`])

    appendToSection('power', [$h3, $ul]);
}