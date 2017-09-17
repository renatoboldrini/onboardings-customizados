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
	var checkboxes = document.querySelectorAll('[type=checkbox]');
	var sectionResultado = document.querySelector('#resultado');
	var resultado = 0;	

	for(var i in checkboxes){
		var checkbox = checkboxes[i];

		if(checkbox.checked){
			resultado += Number(checkbox.value);
		}
	}

	sectionResultado.innerHTML = resultado;
}
