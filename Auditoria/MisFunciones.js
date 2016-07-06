function tab(field, event) {
    if (event.which == 13 /* IE9/Firefox/Chrome/Opera/Safari */ || event.keyCode == 13 /* IE8 and earlier */) {
        for (i = 0; i < field.form.elements.length; i++) {
            if (field.form.elements[i].tabIndex == field.tabIndex + 1) {
                field.form.elements[i].focus();
                if (field.form.elements[i].type == "text") {
                    field.form.elements[i].select();
                    break;
                }
            }
        }
        return false;
    }
    return true;
}

function salto1(elemento1, elemento2, elemento3) {
    if (document.getElementById(elemento1).value == 1) {
        document.getElementById(elemento2).focus();
    }
    else {
        document.getElementById(elemento3).focus();
    }
}

function salto6(elemento1, elemento2, elemento3) {
    if (document.getElementById(elemento1).value == 6) {
        document.getElementById(elemento2).focus();
    }
    else {
        document.getElementById(elemento3).focus();
    }
}

function salto3(elemento1, variable1, elemento2, elemento3) {
    if (document.getElementById(elemento1).value == variable1) {
        document.getElementById(elemento2).focus();
    }
    else {
        document.getElementById(elemento3).focus();
    }
}

function salto2(elemento) {

    document.getElementById(elemento).focus();
}

function validar13(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a > 0 && a < 10) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validarSN(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a > 0 && a < 3) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validar15(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a > 0 && a < 6) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}


function validarMes(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a == "01" || a == "02" || a == "03" || a == "04" || a == "05" ||
        a == "06" || a == "07" || a == "08" || a == "09" || (a > 9 && a < 13)) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function salto4(elemento, elemento1,elemento3) {
    var a = document.getElementById(elemento).value;

    if (a == "01" || a == "02" || a == "03" || a == "04" || a == "05" ||
        a == "06" || a == "07" || a == "08" || a == "09" || (a > 9 && a < 13)) {
        document.getElementById(elemento1).focus();
    }
    else if (a == 13) {
        document.getElementById(elemento3).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validarDia(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a == "01" || a == "02" || a == "03" || a == "04" || a == "05" ||
        a == "06" || a == "07" || a == "08" || a == "09" || (a > 9 && a < 32)) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validarAno(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a > 2010 && a < 2026) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validarRegion(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a == "01" || a == "02" || a == "03" || a == "04" || a == "05" ||
        a == "06" || a == "07" || a == "08" || a == "09" || a == 10) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validarProvincia(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a == "01" || a == "02" || a == "03" || a == "04" || a == "05" ||
        a == "06" || a == "07" || a == "08" || a == "09" || (a > 9 && a < 33)) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}


function validar14(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a > 0 && a < 5) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validar16(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a > 0 && a < 7) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validar17(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a > 0 && a < 8) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validar09(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a < 10) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validar113(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a > 0 && a < 14) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validarEdad(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a == "00" || a == "01" || a == "02" || a == "03" || a == "04" || a == "05" ||
        a == "06" || a == "07" || a == "08" || a == "09" || (a > 9 && a < 100)) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}

function validardos(elemento, elemento1) {
    var a = document.getElementById(elemento).value;

    if (a == "00" || a == "01" || a == "02" || a == "03" || a == "04" || a == "05" ||
        a == "06" || a == "07" || a == "08" || a == "09" || (a > 9 && a < 20)) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento).focus();
    }
}


function NCuest(elemento) {
    document.getElementById(elemento).focus();
}

function TresDigitos() {
    Txt = Trim(document.getElementById('tbNCuest').value).length;
    if (Txt < 3) {
        //alert("El campo textbox debe contener al menos 10 caracteres");
        document.getElementById('tbNCuest').focus();
        //return false;
    }
}


