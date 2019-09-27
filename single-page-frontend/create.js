function makeNewHeroinePage(powers) {
    clearSection('heroine');
    const $h3 = createHeader("Add New Heroine");
    const $form = makeNewHeroineForm(powers)

    appendToSection('heroine', [$h3, $form])
}

function makeNewHeroineForm(powers) {
    const $form = document.createElement('form');
    const $name = createLabelAndInput("name", "Enter Real Name");
    const $super_name = createLabelAndInput("super_name", "Enter Super Name");
    const $label = createSelectLabel("power_id", "Select Power: ");
    const $select = createPowerDropdown(powers);
    $select.name = "power_id";
    const $submit = createSubmit("Add Heroine");

    $form.append(...$name, ...$super_name, $label, $select, $submit)
    $form.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData($form);
        const request = {method: "POST", body: formData};
        fetch("http://localhost:3000/heroines", request)
            .then(response => response.json())
            .then(heroine => location.href = "http://localhost:3001/?id=" + heroine.id);
    });

    return $form;
}

function createLabelAndInput(key, placeholder) {
    const $label = document.createElement('label');
    $label.for = key;
    const $input = document.createElement('input');
    $input.name = key;
    $input.id = key;
    $input.placeholder = placeholder;

    return [$label, $input]
}

function postFormData() {

}