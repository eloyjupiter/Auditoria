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

function validarp3b(elemento, elemento1,elemento2) {
    var a = document.getElementById(elemento).value;

    if (a == 2 ) {
        document.getElementById(elemento1).focus();
    }
    else {
        document.getElementById(elemento2).focus();
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

function validarProvincia(region, provincia, siguiente) {
    var a = document.getElementById(region).value;
    var b = document.getElementById(provincia).value;
    if (a=="01") {
        if (b == "13" || b == "28" || b == "24") {
            document.getElementById(siguiente).focus();
        }
        else {
            document.getElementById(provincia).focus();
        }
    }

    if (a == "02") {
        if (b == "02" || b == "07" || b == "22") {
            document.getElementById(siguiente).focus();
        }
        else {
            document.getElementById(provincia).focus();
        }
    }

    if (a == "03") {
        if (b == "01") {
            document.getElementById(siguiente).focus();
        }
        else {
            document.getElementById(provincia).focus();
        }
    }

    if (a == "04") {
        if (b == "03" || b == "04" || b == "10" || b == "16") {
            document.getElementById(siguiente).focus();
        }
        else {
            document.getElementById(provincia).focus();
        }
    }

    if (a == "05") {
        if (b == "08" || b == "30" || b == "11" || b == "12" || b == "23") {
            document.getElementById(siguiente).focus();
        }
        else {
            document.getElementById(provincia).focus();
        }
    }

    if (a == "06") {
        if (b == "09" || b == "18" || b == "25") {
            document.getElementById(siguiente).focus();
        }
        else {
            document.getElementById(provincia).focus();
        }
    }

    if (a == "07") {
        if (b == "06" || b == "19" || b == "14" || b == "20") {
            document.getElementById(siguiente).focus();
        }
        else {
            document.getElementById(provincia).focus();
        }
    }

    if (a == "08") {
        if (b == "05" || b == "15" || b == "26" || b == "27") {
            document.getElementById(siguiente).focus();
        }
        else {
            document.getElementById(provincia).focus();
        }
    }

    if (a == "09") {
        if (b == "32") {
            document.getElementById(siguiente).focus();
        }
        else {
            document.getElementById(provincia).focus();
        }
    }

    if (a == "10") {
        if (b == "29" || b == "17" || b == "21" || b == "31") {
            document.getElementById(siguiente).focus();
        }
        else {
            document.getElementById(provincia).focus();
        }
    }

    function validarncuest(elemento, elemento1) {
        var a = document.getElementById(elemento).value;

        if (a > 20000 && a < 30000) {
            document.getElementById(elemento1).focus();
        }
        else {
            document.getElementById(elemento).focus();
        }
    }
}
function limpiarpantalla() {
    
        document.getElementById('ncuest').value = "";
        document.getElementById('entrev').value = "";
        document.getElementById('resp').value = "";
        document.getElementById('p1').value = "";
        document.getElementById('p2').value = "";
        document.getElementById('p3a').value = "";
        document.getElementById('p3b').value = "";
        document.getElementById('p4').value = "";
        document.getElementById('p5').value = "";
        document.getElementById('p6').value = "";
        document.getElementById('p7').value = "";
        document.getElementById('p8').value = "";
        document.getElementById('p9').value = "";
        document.getElementById('p10').value = "";
        document.getElementById('p11').value = "";
        document.getElementById('p12a').value = "";
        document.getElementById('p12b').value = "";
        document.getElementById('p13').value = "";
        document.getElementById('p14').value = "";
        document.getElementById('ent').value = "";
    //}

}

