var dnv = 's'
var num, chute;
num = Math.floor(Math.random() *10);

//Laço de repetição aciona caso valor inserido or menor 0 e maior 9
do{
  chute=prompt("Digite um numero de 0 a 9: ");  
}while(chute < 0 || chute >9);


for(var cont=1; num != chute; cont++){
  do{
    chute=prompt("Digite um numero de 0 a 9: ");  
  }while(chute < 0 || chute > 9);

}

alert("Você acertou na tentativa "+cont);

