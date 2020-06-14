// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            var objetoRetornado = JSON.parse(this.responseText);
            $("#listaDeConteudo").append("<tr>");
            $("#listaDeConteudo").append("<td>" + "id" + "</td>");
            $("#listaDeConteudo").append("<td>" + "Nome" + "</td>");
            $("#listaDeConteudo").append("<td>" + "Salário" + "</td>");
            $("#listaDeConteudo").append("<td>" + "Idade" + "</td>");
            $("#listaDeConteudo").append("<td>" + "Avatar" + "</td>");
            $("#listaDeConteudo").append("<tr>");

            for (var i = 0; i < objetoRetornado.data.length; i++) {
                const popula = objetoRetornado.data[i];
                $("#listaDeConteudo").append("<tr>");
                $("#listaDeConteudo").append("<td>" + popula.id + "</td>");
                $("#listaDeConteudo").append("<td>" + popula.employee_name + "</td>");
                $("#listaDeConteudo").append("<td>" + popula.employee_salary + "</td>");
                $("#listaDeConteudo").append("<td>" + popula.employee_age + "</td>");
                $("#listaDeConteudo").append("<td>" + popula.profile_image + "</td>");
                $("#listaDeConteudo").append("<tr>");

                $("td").css("background-color", "white");
                $("td").css("border", "3px solid black");
                $("td").css("font-weight", "bold");
                $("td").css("color", "black");
            }
            objetoRetornado.data
        } else {

        }
    }
}
xhttp.open("GET", "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/employees", true)
xhttp.send();



$("#salvar").click(function() {
    var xhttp = new XMLHttpRequest();

    var novoEmpregado = {
        name: document.getElementById("name").value,
        salary: document.getElementById("salary").value,
        age: document.getElementById("number").value

    };
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var objetoRetornado = JSON.parse(this.responseText);
                var nome = objetoRetornado.data.name;
                alert("Empregado " + nome + " cadastrado com sucesso")
            } else {

            }
        }
    }
    xhttp.open("POST", "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/create", true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(novoEmpregado));
});


$("#excluir").click(function() {
    var xhttp = new XMLHttpRequest();
    var deletaEmpregado = {
        id: document.getElementById("excluirFuncionario").value,
    };
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var objetoRetornado = JSON.parse(this.responseText);
                var nome = objetoRetornado.data.name;
                alert("Empregado " + nome + " removido com sucesso")
            }
        }
    }
    xhttp.open("DELETE", "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/delete/2", true)
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(deletaEmpregado));
});

$("#cancelar").click(function() {
    document.getElementById('form').reset();
});


$("#editar").click(function() {
    var xhttp = new XMLHttpRequest();
    var editarEmpregado = {
        id: document.getElementById("idEdicao").value,
        name: document.getElementById("nomeEdicao").value,
        salary: document.getElementById("salarioEdicao").value,
        age: document.getElementById("idadeEdicao").value
    };
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var objetoRetornado = JSON.parse(this.responseText);
                var id = objetoRetornado.data.id;
                alert("Empregado com número de id " + id + " modificado")
            }
        }
    }
    xhttp.open("PUT", "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/update/21", true)
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(editarEmpregado));
});