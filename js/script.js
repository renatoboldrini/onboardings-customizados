/* Insira seu código em javascript abaixo */
// var trafego = document.querySelector("#trafego");
// var gerarLeads= document.querySelector("#gerarLeads");
// var linkedin= document.querySelector("#linkedin");
// var googleAdwords= document.querySelector("#googleAdwords");
// var planejamentoConteudo= document.querySelector("#planejamentoConteudo");
// var otimizacaoConteudo= document.querySelector("#otimizacaoConteudo");
// var relacionar= document.querySelector("#relacionar");
// var automacaoSimples= document.querySelector("#automacaoSimples");
// var automacaoJornada= document.querySelector("#automacaoJornada");
// var facebook= document.querySelector("#facebook");
// var abordagemLeads= document.querySelector("#abordagemLeads");
// var inCompanyPersona= document.querySelector("#inCompanyPersona");
// var inCompanyJornada= document.querySelector("#inCompanyJornada");
// var inCompanyMidiasPagas= document.querySelector("#inCompanyMidiasPagas");
// var inCompanyInsideSales= document.querySelector("#inCompanyInsideSales");
// var abordagemLeads= document.querySelector("#abordagemLeads");

var calcular = function(){
	var totalHoras = 0;
	var totalPreco = 0;
	var days = 'Total de 90 dias para o Onboarding';

	$("#resultado").html('');

	$('input[type=checkbox]').each(function () { 
		var sThisVal = (this.checked ? $(this).val() : ""); 
		if(sThisVal != ""){
			var name = $(this).next().text();
            var preco = 450;
			totalHoras += Number(sThisVal);
			totalPreco +=  Number(sThisVal) * preco;
            var line = "<tr scope=\"row\"><td>"+ name +"</td><td>" + Number(sThisVal) + "</td><td>R$" + Number(sThisVal) * preco + "</td></tr>";
            $("#resultado").append(line);
		}
	});
	var line = "<tr style=\"font-weight: bold;\"><td>"+ days +"</td><td>" + Number(totalHoras) + "</td><td>R$" + Number(totalPreco) + "</td></tr>";
    $("#resultado").append(line);
}
