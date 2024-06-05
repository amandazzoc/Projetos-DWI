universo = "Marvel";
heroi = "Hulk";
if(universo == "Marvel"){
    document.write("O universo escolhido foi: " + universo + "<br>");
    if(heroi == "Hulk"){
        document.write("Seu herói é o: " + heroi );
    }else{
        document.write("O heroi não está na lista");
    }
}
else if(universo == "DC"){
    document.write("O universo escolhido foi: " + universo + "<br>");
    if(heroi == "Mulher Maravilha"){
        document.write("Seu herói é o: " + heroi);
    }else{
        document.write("O heroi não está na lista");
    }
}
else{
    document.write("O universo escolhido não existe");
}