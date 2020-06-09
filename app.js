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
            //tratar API
            var objetoRetornado = JSON.parse(this.responseText);
            $("#listaDeConteudo").append("<tr>");
            $("#listaDeConteudo").append("<td>" + "id" + "</td>");
            $("#listaDeConteudo").append("<td>" + "Nome" + "</td>");
            $("#listaDeConteudo").append("<td>" + "Salário" + "</td>");
            $("#listaDeConteudo").append("<td>" + "Idade" + "</td>");
            $("#listaDeConteudo").append("<td>" + "Avatar" + "</td>");
            $("#listaDeConteudo").append("<td>" + "Editar" + "</td>");
            $("#listaDeConteudo").append("<td>" + "Excluir" + "</td>");
            $("#listaDeConteudo").append("<tr>");

            for (var i = 0; i < objetoRetornado.data.length; i++) {
                const popula = objetoRetornado.data[i];
                $("#listaDeConteudo").append("<tr>");
                $("#listaDeConteudo").append("<td>" + popula.id + "</td>");
                $("#listaDeConteudo").append("<td>" + popula.employee_name + "</td>");
                $("#listaDeConteudo").append("<td>" + popula.employee_salary + "</td>");
                $("#listaDeConteudo").append("<td>" + popula.employee_age + "</td>");
                $("#listaDeConteudo").append("<td>" + popula.profile_image + "</td>");
                $("#listaDeConteudo").append("<td>" + "<a href=" + "#editar" + ">Editar</a>" + "</td>");
                $("#listaDeConteudo").append("<td>" + "<a href=" + "#excluir" + ">Excluir</a>" + "</td>");
                $("#listaDeConteudo").append("<tr>");

                $("td").css("background-color", "white");
                $("td").css("border", "3px solid black");
                $("td").css("font-weight", "bold");
                $("td").css("color", "black");
                $("a").css("color", "blue");
                $("#branco1").css("color", "white");
                $("#branco2").css("color", "white");
                $("#branco3").css("color", "white");
                $("#branco4").css("color", "white");
                $("#branco5").css("color", "white");
                $("#branco6").css("color", "white");
                $("#branco7").css("color", "white");
                $("#branco8").css("color", "white");
                $("#branco9").css("color", "white");
                // $('#listaDeConteudo td').click(function() {
                //     alert($(this).html());
                //  });

            }
            objetoRetornado.data
        } else {

        }
    }
};
xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true)
xhttp.send();