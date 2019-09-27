function queryParamsObject() {
    return new URLSearchParams(window.location.search);
}

function createHeader(text) {
    const $h3 = document.createElement('h3');
    $h3.innerText = text;
    return $h3;
}

function createListFromArray(listItems) {
    const $ul = document.createElement("ul")
    const $lis = listItems.map(listItem => createListItem(listItem));
    $ul.append(...$lis);
    return $ul;
}

function createListItem(content) {
    const $li = document.createElement('li');

    if (typeof content === "string") {
        $li.innerText = content
    } else if (typeof content === "object") {
        $li.appendChild(content);
    }

    return $li;
}

function createLink(url, text) {
    const $a = document.createElement('a');
    $a.href = url;
    $a.innerText = text;
    return $a;
}

function clearSection(sectionID) {
    document.getElementById(sectionID).innerHTML = "";
}

function appendToSection(sectionID, elementList) {
    const $section = document.getElementById(sectionID);
    $section.append(...elementList)
}

function createPowerDropdown(powers) {
    const $select = document.createElement('select');

    const $options = powers.map(createOption)
    $select.append(...$options);

    return $select;
}

function createSelectLabel(key, text) {
    const $label = document.createElement('label');
    $label.for = key;
    $label.innerText = text;

    return $label;
}

function createSubmit(value) {
    const $submit = document.createElement('input');
    $submit.type = "submit";
    $submit.value = value;

    return $submit;
}