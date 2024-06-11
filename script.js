function continuar() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você avistou uma lanterna próxima a você. Deseja pegá-la?: </h3>';
  formation += ' <img src="">';
  formation += '<br>';
  formation += '<button onclick="Escolha1()">Pegar a lanterna</button>';
  formation += '<button onclick="Escolha2()">Seguir em frente</button>';
  $(".principal").append(formation);
}


function Escolha1() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você pegou a lanterna e começou a explorar. Encontrou um espelho, que de repente se quebra e revela uma criatura atrás dele. O que você faz? </h3>';
  formation += ' <img src="imagens/OIG3 (1).jpg">';
  formation += '<br>';
  formation += '<button onclick="Escolha11()"> Lutar usando um caco de vidro como arma </button>';
  formation += '<button onclick="Escolha12()">Ou corre</button>';
  $(".principal").append(formation);
}

function Escolha11() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você derrotou a criatura! Encontrou uma foto sua entre os destroços do espelho. Seu nome é Liam. Você encontrou uma porta, porém está bloqueada por uma criatura que te faz lembrar de todos os momentos ruins da sua vida, usando-os contra você, o que você faz </h3>'
  formation += ' <img src="">';
  formation += '<br>'
  formation += '<button onclick="Escolha121()">Confessa tudo e pede perdão</button>';
  formation += '<button onclick="Escolha112()"> Ou decide lutar contra a criatura</button>';
  $(".principal").append(formation);
}

function Escolha112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você enfrentou a criatura, rebatendo suas falas e tendo uma luta corporal. Você Derrotou a criatura!. Você pegou outra foto, e nela tinha você, uma mulher e um homem,você se lembrou dos seus pais por conta da foto, e de repente a porta foi desbloqueada e você conseguiu fugir, você acordou ofegante no seu quarto e percebendo que aquilo era um sonho';
  formation += '<br>';
  formation += '<button onclick="Escolha113()">Levantar da cama</button>';
  $(".principal").append(formation);
}

function Escolha113() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Você acorda, levanta da sua cama e sai do seu quarto. O que você faz? </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha114()">Explorar a casa</button>';
  formation += '<button onclick="Escolha211()">chame os seus pai</button>';
  $(".principal").append(formation);
}

function Escolha114() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Você explorou a casa e descobriu que não tinha ninguém, só tinha uma porta que você ainda não tinha explorado, você vai ate a porta. O que você faz</h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha1111()"> Abre a porta e entra</button>';
  formation += '<button onclick="Escolha21()"> Ou ignora a porta</button>';
  $(".principal").append(formation);
}

function Escolha1111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você abre a porta e lá tinha uma moça, mas essa moça tinha algo de estranho... Ela te lembrava alguém, ela te lembrava a sua mãe. Essa moça fala que é sua mãe, ela diz que vai te tirar do sonho se você lutar contra ela. O que você faz? </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha11112()"> Lutar contra a sua mãe</button>';
  formation += '<button onclick="Escolha122()">Não luta e aceita ficar naquele sonho </button>';
  $(".principal").append(formation);
}

function Escolha11112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você lutou contra ela, se machucou muito mas conseguiu vencer, você vai até ela, ela está no chão bem machucada, ela te faz lembrar de td sua infância fazendo você acordar do sonho na hora. </h3>'
  formation += '<button onclick="Escolha11111()">Continuar</button>';
  $(".principal").append(formation);
}

var formation = ''
function Escolha11111() {
  formation += '<br>';
  formation += '<h3> VOCÊ VENCEU O JOGO, CONSEGUIU PASSAR POR TODOS OS DESAFIOS!!!. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha()">Eu tentei (: </button>';
  formation += '';
  $(".principal").append(formation);
}



function Escolha12() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você tentou fugir, mas a criatura te alcançou e te matou sufocado com sua própria lanterna. O jogo reiniciou. </h3>'
  formation += '<br>'
  formation += '';
  formation += '';
  $(".principal").append(formation);
}

function Escolha121() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> A criatura não aceita suas desculpas, pois não é um ser racional e não tem sentimentos. Você perdeu. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha122() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você morreu dormindo. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha2() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você ignorou a lanterna e continuou andando. Infelizmente, você caiu em um buraco e reiniciou o jogo. </h3>';
  formation += '<img src="">';
  formation += '<br>';
  formation += '';
  formation += '';
  $(".principal").append(formation);
}

function Escolha21() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você morreu lá de desidratação, fome e o medo te devorou. </h3>';
  formation += '<img src="">';
  formation += '<br>';
  formation += '';
  formation += '';
  $(".principal").append(formation);
}


function Escolha211() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você gritou o nome deles e do nada apareceu um monstro emergiu de uma escuridão e te matou. O jogo reiniciou. </h3>';
  formation += '<img src="">';
  formation += '<br>';
  $(".principal").append(formation);
}

