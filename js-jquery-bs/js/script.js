showResults = function (texto, estilo) {
    var output = $("#mostrarResultado");
    if (output) {
        output.attr("class", estilo);
        output.text(texto);
    }
}
// constructor func
function User(name, dateP) {
    var age;
    // private method
    var calculateAge = function () {
        var date = new Date().getFullYear();
        date = parseInt(date);
        var yearBirth = dateP;
        yearBirth = parseInt(yearBirth);

        if (date <= yearBirth) {
            age = 0; //error
        }
        else {
            age = (date - yearBirth);
        }
    };

    this._name = name;
    this._yearBirth = dateP;
    // public method
    this.toShow = function () {
        calculateAge();
        if (age != 0 && !isNaN(age) && this._name.length  > 0) {
            var result =
                "Hola, mi nombre es " + this._name +
                " y tengo " + age + " años."
            showResults(result, 'add-success');
        } else {
            showResults("Error, remeber write a valid name and birth year", 'add-error');
        }
    };
}

// Actions 
$("#btn_calcular_edad").click(function () {
    var name = $("#name").val();
    var age = $("#fecha_nacimiento").val();;
    var res = parseInt(age.substring(0, 4));
    var newUser = new User(name, res);
    newUser.toShow();

});

$("#btn_id_selector").click(function () {
    var text = $("#thing1").text();
    showResults(text, "selector-id");
});

$("#btn_class_selector").click(function () {
    var text = $(".special").text();
    showResults(text, "selector-class");
});

$("#btn_tag_selector").click(function () {
    var text = $("li[data-troy='true']").text();
    showResults(text, "selector-tag");
});

$("#btn_edit-text-selector").click(function () {
    var fisrtSelect = $("li[data-troy='true']").text();
    var secondSelect = $("li[data-employee='Bob Metz']").text();
    $("li[data-troy='true']").text(secondSelect);
    $("li[data-employee='Bob Metz']").text(fisrtSelect);
    $("li[data-troy='true']").attr("class", "selector-edit-text");
    $("li[data-employee='Bob Metz']").attr("class", "selector-edit-text");
    var result = fisrtSelect + " and " + secondSelect;
    showResults(result, "selector-edit-text");
});

$("#btn_child_selector").click(function () {
    var text = $("div p").text();
    showResults(text, "selector-child");
});

