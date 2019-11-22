/* Função para copiar texto para área de colagem
const copyToClipboard = str => {
     const el = document.createElement('textarea');
     el.value = "teste@teste.com";
     el.setAttribute('readonly', '');
     el.style.position = 'absolute';
     el.style.left = '-9999px';
     document.body.appendChild(el);
     el.select();
     document.execCommand('copy');
     document.body.removeChild(el);
};*/

//Url para pegar codigo de autenticação
//https://api.instagram.com/oauth/authorize?app_id=1049587468713370&redirect_uri=https%3A%2F%2Fyagobmarques.github.io%2Fpage-atelie%2F&scope=user_profile,user_media&response_type=code

//pegando Token de acesso a partir de codigo de autenticação
/*$.post("https://api.instagram.com/oauth/access_token", {
	app_id: "1049587468713370",
	app_secret: "c11d65b89408f36f23b0e2632ac9ab15",
	grant_type: "authorization_code",
	redirect_uri: "https://yagobmarques.github.io/page-atelie/",
	code: "AQCm8wtoE1cTu57CtRfuxj3NmBYU246U_TuZBjemChvyJAzQD4sVFYyH_ALLuqiBIR387GUt_Mjp_MYvJSeZj3Qdah76TB7mykmG5ERiZblGzLWyB6rQYBHO4d2D7LV6XcUVg89rjtDqQKaKKfDjbwx8pO6NiNuGtcIWWhGYgp9kcedq65uiofD263HhIv0NzAIyRbXlb_EAmR8sLhjzYN_VBonTtHQoL8JFDnRKhPD4Zg"
}).done(function( data ) {
	console.log(data);
}).fail(function() {
    alert( "error" );
  });*/

//Usando token de acesso para consultar nó
/*$.get("https://graph.instagram.com/17841401210098030?fields=id,username&access_token=IGQVJYamFURGw5dlVzTnNjQlRUejF3Mk5iejVVNjlXSWM3RThxY3FtMU9qRXhFdnRLSlU2MWtORmc2MXZA0bDZAfWndjR3dOM252d2s4a1R0ekJzZA2p3V1E0Wk5lMndUUlZAyM1NsWEV2WG1kQmsxSzRKbmlRU1JkQkw2S0RR"
).done(function( data ) {
	console.log(data);
}).fail(function() {
    alert( "error" );
});*/
//pegando midia
/*$.get("https://graph.instagram.com/17841401210098030/media?fields=id,caption&access_token=IGQVJYamFURGw5dlVzTnNjQlRUejF3Mk5iejVVNjlXSWM3RThxY3FtMU9qRXhFdnRLSlU2MWtORmc2MXZA0bDZAfWndjR3dOM252d2s4a1R0ekJzZA2p3V1E0Wk5lMndUUlZAyM1NsWEV2WG1kQmsxSzRKbmlRU1JkQkw2S0RR"
).done(function( data ) {
	data.data.forEach(function(d){
		$.get("https://graph.instagram.com/"+d.id+"?fields=id,caption,media_type,media_url,username,timestamp&access_token=IGQVJYamFURGw5dlVzTnNjQlRUejF3Mk5iejVVNjlXSWM3RThxY3FtMU9qRXhFdnRLSlU2MWtORmc2MXZA0bDZAfWndjR3dOM252d2s4a1R0ekJzZA2p3V1E0Wk5lMndUUlZAyM1NsWEV2WG1kQmsxSzRKbmlRU1JkQkw2S0RR"
		).done(function( data1 ) {
			console.log(data1);

		}).fail(function() {
		    alert( "error" );
		});
	});
}).fail(function() {
    alert( "error" );
});*/

var data = {
	access_token: "IGQVJYOUdLX0dTTVNjcVRsb3Fmelk3SmcwN1pOYmtBWENMc0E1eTJHSUhYRVZAoelpqcktkenlpaHpTNldQMzZASR1hPa3NoeExVdVJjTmNJS2tRZAEV0b0dZAaVdiSDJmbFNnSzRZAXy1TV203VnM1LWhPMWlfOGpmODlicm1z",
	user_id: "17841401210098030",
	code: "AQCm8wtoE1cTu57CtRfuxj3NmBYU246U_TuZBjemChvyJAzQD4sVFYyH_ALLuqiBIR387GUt_Mjp_MYvJSeZj3Qdah76TB7mykmG5ERiZblGzLWyB6rQYBHO4d2D7LV6XcUVg89rjtDqQKaKKfDjbwx8pO6NiNuGtcIWWhGYgp9kcedq65uiofD263HhIv0NzAIyRbXlb_EAmR8sLhjzYN_VBonTtHQoL8JFDnRKhPD4Zg",
	imagens: []
};

new Vue({
	el: "#corpo",
	data: data,
	mounted: function(){
        this.getMidia();
    },
	methods: { 
        getMidia: function(){
        	var at = this.access_token;
        	var imagens = [];
        	$.get("https://graph.instagram.com/17841401210098030/media?fields=id,caption&access_token="+at
			).done(function( data ) {
				data.data.forEach(function(d){
					$.get("https://graph.instagram.com/"+d.id+"?fields=id,caption,media_type,media_url,username,timestamp&access_token="+at
					).done(function( data1 ) {;
						imagens.push({
							id: data1.id,
							caption: data1.caption,
							url: data1.media_url
						});
					}).fail(function() {
					    console.log("Erro ao carregar imagem");
					});
				});
				console.log(imagens);
				testezao();
			}).fail(function() {
			    console.log("Erro ao acessar perfil, recebendo token...");
			    this.getToken();
			});
			this.imagens = imagens;
			console.log(this.imagens)
        },
        testezao: function(){
        	alert("a");
        },
        getToken: function(){
        	var codigo = this.code
        	$.post("https://api.instagram.com/oauth/access_token", {
				app_id: "1049587468713370",
				app_secret: "c11d65b89408f36f23b0e2632ac9ab15",
				grant_type: "authorization_code",
				redirect_uri: "https://yagobmarques.github.io/page-atelie/",
				code: codigo
			}).done(function( data ) {
				console.log(data);
			}).fail(function() {
			    alert( "error" );
			});
        }
    }
});