let vieille_dame = {
    age:89,
    nom:{
        prenom:"Anne",
        nomDeFamille:"Gerard",
    },
    moral:"mal",
    objet:"canne",
    parler(){
        if(vieille_dame.moral=="mal"){
            alert('Vous me dérangez et le frappe avec son objet');
        }else if(vieille_dame.moral =="bien"){
            alert('bonjour $(vieil_homme.nom)')
        }
    }
}
let vieil_homme ={
    nom:"Julien",
    adoucir(){
        if(vieille_dame.moral=="mal"){
            vieille_dame.moral=="bien";
        }
    }
}
vieille_dame.parler();
vieil_homme.adoucir();
