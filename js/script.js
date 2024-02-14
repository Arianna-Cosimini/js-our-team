/*  
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


Wayne Barnett	 Founder & CEO	         wayne-barnett-founder-ceo.jpg
Angela Caroll	 Chief Editor	         angela-caroll-chief-editor.jpg
Walter Gordon	 Office Manager	         walter-gordon-office-manager.jpg
Angela Lopez	 Social Media Manager 	 angela-lopez-social-media-manager.jpg
Scott Estrada	 Developer	             scott-estrada-developer.jpg
Barbara Ramos	 Graphic Designer	     barbara-ramos-graphic-designer.jpg


MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

*/


// Creo array di oggetti
const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Desiner",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];




// Itero sugli oggetti all'interno dell'array
const member = document.getElementById("member")
for (let i = 0; i < team.length; i++) {
    const peopleOfteam = team[i];
    console.log(peopleOfteam)
    let result = ""

    let newElement = document.createElement("div");
    newElement.classList.add("col-4");

    let name = team[i].nome;
    let role = team[i].ruolo;
    let foto = team[i].foto;
    newElement.innerHTML =
    `<img class = "card-img w-100" src="img/${foto}"/>
        <h3 class="founder">${name}</h3>
        <span class="founder-span">${role}</span>`




    member.append(newElement)


    // Itero sulle proprietà degli oggetti
    // e stampo in console le informazioni per ogni membro del team
    for (let key in peopleOfteam) {
        result += (`${key} : ${peopleOfteam[key]}`)
        console.log(result)


    }


}









