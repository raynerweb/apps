var fs = require('fs');
fs.mkdir('src', function(error){
	if (error){
		console.log('Não foi possivel criar diretorio src.');
		console.log('Verifique se diretorio existe ou se possui permissões necessárias');
	}
});
fs.mkdir('dist', function(error){
	if (error){
		console.log('Não foi possivel criar diretorio dist.');
		console.log('Verifique se diretorio existe ou se possui permissões necessárias');
	}
});
