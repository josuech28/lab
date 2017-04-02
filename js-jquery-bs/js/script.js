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
            console.log(age);
        }
    };

    this._name = name;
    this._yearBirth = dateP;
    // public method
    this.toShow = function () {
        calculateAge();
        if (age != 0) {
            var result =
            "Hola, mi nombre es " + this._name +
            " y tengo " + age + " años."
            showResults(result,'add-success');
        } else {
            showResults("Error, birth year grather than current day",'add-error');
        }
    };
}

// Actions 
$("#btn_calcular_edad").click(function () {
    var name = $("#name").val();
    var age = $("#fecha_nacimiento").val();;
    var res = parseInt(age.substring(0, 4));
    var newUser = new User(name,res);
    newUser.toShow();
    
});

$("#btn_id_selector").click(function () {
    var text = $("#thing1").text();
    showResults(text,"selector-id"); 
});



