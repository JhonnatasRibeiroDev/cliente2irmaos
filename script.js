const final = document.querySelector('.final')
function gerar(){
    const numero = document.querySelector('#numero').value
    const nome = document.querySelector('#nome').value
    const servico = document.querySelector('#servico').value
    const data = document.querySelector('#data').value
    let mensagem = `Olá, ${nome} somos a 2irmãos Motociclo!! Vimos aqui que vc fez ${servico} conosco dia ${data}, gostaríamos de saber seu grau de satisfação com nosso serviço? Aproveitando a oportunidade gostaríamos de saber como esta a sua moto e se a troca de óleo está em dias?`;
    if(numero && nome && servico && data){
        final.innerHTML =`<a href='https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}'>Mandar Mensagem</a>`
    }else{
        alert(`${nome?nome:'Usuário'}, você deixou alguns campos em branco!`)
    }
}
