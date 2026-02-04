function verificar(){
var nome= window.document.getElementById('txtt')
var senha= window.document.getElementById('txts')
var res= window.document.getElementById('res')
if(nome.value== ''|| senha.value==''){
    window.alert('Verifique os dados e tente novamente')
    
}else if(senha.value.length<7 )
    { window.alert('A senha deve ter no minimo 7 caracteres')
    
}

else{
    window.location.href = 'novo.html'
}


}