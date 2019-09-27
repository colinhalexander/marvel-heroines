function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const power_id = urlParams.get('power');
    return [id, power_id];
}

function createHeader(headerText) {
    const $h3 = document.createElement('h3');
    $h3.innerText = headerText;
    return $h3;
}

function createListFromArray(listItems) {
    const $ul = document.createElement("ul")
    const $lis = listItems.map(listItem => createListItem(listItem));
    $ul.append(...$lis);
    return $ul;
}

function createListItem(text) {
    const $li = document.createElement('li');
    $li.innerText = text;
    return $li;
}

function createLink(url, text) {
    const $a = document.createElement('a');
    $a.href = url;
    $a.innerText = text;
    return $a;
}
