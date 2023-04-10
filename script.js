const personnes = [
    {
        prenom: "moustapha", nom: "kandji", telephone: 771390666, mail: "kandjiMous05@gmail.com", solde: 120400, img: 'https://images.unsplash.com/photo-1679601744526-027152f956f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', transaction: [
            // {date:"12/03/2023",sens:1,montant:500},      
            // {date:"18/03/2023",sens:-1,montant:12000},     
            // {date:"1/04/2023",sens:1,montant:14000},
            // {date:"12/06/2023",sens:1,montant:17000},            
            // {date:"12/08/2023",sens:1,montant:17000}    
        ]
    },
    {
        prenom: "kadiata", nom: "bâ", telephone: 773456798, mail: "kadiataba05@gmail.com", solde: 12000, img: 'https://images.unsplash.com/photo-1585906923365-fe0977df23a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        transaction: [
            // {date:"12/03/2023",sens:1,montant:127800},      
            // {date:"18/03/2023",sens:-1,montant:12000},     
            { date: "1/04/2023", sens: 1, montant: 12000 },
        ]
    },
    {
        prenom: "suggar", nom: "daddy", telephone: 773574754, mail: "seugnCHOUGA75@gmail.com", solde: 12000, img: 'https://images.unsplash.com/photo-1679842115390-8084bbb1d4a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        transaction: [
            { date: "12/03/2023", sens: 1, montant: 12000 },
            { date: "18/03/2023", sens: -1, montant: 12000 },
            { date: "1/04/2023", sens: 1, montant: 12000 },
            { date: "12/06/2023", sens: 1, montant: 12000 },
        ]
    }
]

const container = document.querySelector('.container')
const lesDivContainer = document.querySelectorAll('.row')
const data = document.querySelectorAll('.data')
const lastName = document.querySelector('#lastname')
const firstName = document.querySelector('#firstname')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const label = document.querySelectorAll('.label')
const image = document.querySelector('img')
const boutonSuivante = document.querySelector('.next')
const montantTransfert = document.querySelector('#mnt')
const code = document.querySelector('code')
const tbody = document.querySelector('tbody')
const formDroite = document.querySelector('.form')
const boutonPlus = document.querySelector('.btn-detail')
const selectTransact = document.querySelector('#trans')
const boutonEnregistrer = document.querySelector('.enregistrer')
const monSolde = document.querySelector('#solde')
const inputTelephone = document.querySelector('#mnt2')
const boutonNouveauClient = document.querySelector('.addUser')
const modal = document.querySelector('.modal')
const btnAnnulerModal = document.querySelector('.Annuler')
const btnAjouterModal = document.querySelector('.Ajouter')
const nomModal = document.querySelector('.input-nom')
const prenomModal = document.querySelector('.input-prenom')
const telephoneModal = document.querySelector('#telephonemodal')
const emailModal = document.querySelector('.modalEmail')
const soldeModal = document.querySelector('#monSoldemodal')
const photoUtilisateur = document.querySelector('#photoUser')
const SearchByName = document.querySelector('#rechercheParNom')
const messageErreur = document.querySelector('.messErreur')
const boutonOk = document.querySelector('.ok')

let btnAnnuler = document.createElement('button')
btnAnnuler.className = "boutonAnnuler"
btnAnnuler.innerHTML = "cancel"
// tbody.append(btnAnnuler)


let i = 0
afficher(personnes[i])
function afficher(personne) {
    lastName.innerText = personne.nom
    firstName.innerText = personne.prenom
    phone.innerText = personne.telephone
    email.innerText = personne.mail
    solde.innerText = personne.solde
    image.setAttribute('src', personne.img)
    code.innerText = personne.transaction.length
    createElement(personne.transaction)
}

function get_randomElement(tab) {
    return Math.floor((Math.random() * tab.length));
}


boutonSuivante.addEventListener('click', () => {
    i = get_randomElement(personnes)
    afficher(personnes[i])
})
inputTelephone.addEventListener('input', () => {
    let input = inputTelephone.value;
    const result = personnes.filter(personne => personne.telephone.toString().includes(input));
    let suggestion = "";
    if (input != '') {
        result.forEach(resultItem =>
            suggestion += `
            <div class="suggestion">${resultItem.telephone}</div>
            `
        )
        document.getElementById("suggestions").innerHTML = suggestion
    }
    let selectSuggestion = document.querySelectorAll('.suggestion')
    selectSuggestion.forEach(sugger => {
        sugger.addEventListener('click', () => {
            inputTelephone.value = sugger.innerText
        })
    });
    if (suggestion.length != 9) {
        return 0;
    }
})
SearchByName.style.margin = "15px"
SearchByName.addEventListener('input', () => {
    let inputnom = SearchByName.value;
    console.log(inputnom);
    const resultat = personnes.filter(personne => personne.nom.includes(inputnom));
    let sugg = "";
    if (inputnom != '') {
        resultat.forEach(resultatpersonne =>
            sugg += `
                <div class="suggest">${resultatpersonne.nom}</div>
            `
        )
        document.getElementById("suggerer").innerHTML = sugg
    }
    let selectSuggest = document.querySelectorAll('.suggest')
    selectSuggest.forEach(suggerElement => {
        suggerElement.addEventListener('click', () => {
            SearchByName.value = suggerElement.innerHTML
            // afficher()
            personnes.forEach(personne => {
                if (personne.nom == SearchByName.value) {
                    afficher(personne)
                }
            });
        })
    });

})

boutonPlus.addEventListener('click', () => {
    if (formDroite.style.display === 'none') {
        formDroite.style.display = 'block'
    } else {
        formDroite.style.display = 'none'
    }
})

let samaKoppar = 0

boutonEnregistrer.addEventListener('click', () => {
    let samaKoppar = +montantTransfert.value
    const expediteur = getUserByPhone(inputTelephone.value)
    let samaXaliss = {numero: 0, date: new Date().toLocaleDateString(), sens: 0, montant: 0}
    let sens=1

    if (selectTransact.value == 'd') {
        if (inputTelephone.value == "") {
            personnes[i].solde = personnes[i].solde + samaKoppar
            samaXaliss = { numero: 1, date: new Date().toLocaleDateString(), sens: sens, montant: samaKoppar}
            personnes[i].transaction.push(samaXaliss)
        } else if (verifyExistNumber()) {
            personnes[i].solde = personnes[i].solde - samaKoppar
            transfert(inputTelephone.value, samaKoppar)
            sens=2
            samaXaliss = { numero: 1, date: new Date().toLocaleDateString(), sens: sens, montant: samaKoppar , destinataire:inputTelephone.value}
            personnes[i].transaction.push(samaXaliss)
            for (let i = 0; i < personnes.length; i++) {
                if (inputTelephone.value==personnes[i].telephone) {
                    koppar={ numero: 1, date: new Date().toLocaleDateString(), sens: 1, montant: samaKoppar}
                    personnes[i].transaction.push(koppar)
                }    
            }
            console.log(personnes[i]);
            inputTelephone.value=""
            montantTransfert.value=""
            
        } else {
            ali={ numero: 1, date: new Date().toLocaleDateString(), sens: sens, montant: samaKoppar}
            // personnes[i].transaction.push(ali)
            personnes[i].solde = personnes[i].solde - samaKoppar
            setTimeout(() => {
                personnes[i].solde = personnes[i].solde + samaKoppar
                samaXaliss.annuler = true
                afficher(personnes[i])
            }, 2000);
        }

        // samaXaliss = { numero: 1, date: new Date().toLocaleDateString(), sens: sens, montant: samaKoppar}
        // // if (selectTransact.value == 'd') {
        // //     samaXaliss.sens = 1
        // // } else {
        // //     samaXaliss.sens = -1
        // // }
        // personnes[i].transaction.push(samaXaliss)
        // afficher(personnes[i])
        if (samaKoppar <= 500) {
            alert('wa ioe seugn bi ko yapp bay !!')
        }

    } else if (selectTransact.value == 'r') {
        personnes[i].solde = personnes[i].solde - samaKoppar
        sens=-1
        let xaliss={ numero: 1, date: new Date().toLocaleDateString(), sens: sens, montant: samaKoppar}
        personnes[i].transaction.push(xaliss)
    }
    afficher(personnes[i])

})



boutonNouveauClient.addEventListener('click', () => {
    modal.style.display = "flex"
})

btnAnnulerModal.addEventListener('click', () => {
    modal.style.display = "none"
})

btnAjouterModal.addEventListener('click', (e) => {
    personnes.push({ prenom: prenomModal.value, nom: nomModal.value, telephone: telephoneModal.value, mail: emailModal.value, solde: 0, img: photoUtilisateur.value, transaction: [] })
    modal.style.display = "none"
    nomModal.addEventListener('input', function (e) {
        if (e.target.value !== "") {
            e.target.parentNode.classList.add('active-input');
        } else if (e.target.value = "") {
        }
    })
   
    let reader = new FileReader()
    reader.onload = () => {
    }
})


function createElement(tab) {
    tbody.innerHTML = ""
    tab.forEach(transaction => {
        console.log(transaction);
        tdnumero = document.createElement('td')
        tdDate = document.createElement('td')
        tdsens = document.createElement('td')
        tdMontant = document.createElement('td')
        tr = document.createElement('tr')
        tdnumero.innerText = ++i
        tdDate.innerText = transaction.date

        tdsens.innerText = transaction.sens
        tdMontant.innerText = transaction.montant
        tr.append(tdnumero, tdDate, tdsens, tdMontant)
        tbody.append(tr)
        if (tab.annuler == true) {
            tr.style.textDecoration="line-through"
            tdnumero.style.textDecoration = "line-through"
            tdDate.style.textDecoration = "line-through"
            tdsens.innerText = "line-through"
            tdMontant.style.textDecoration = "line-through"
        }
        if (transaction.sens == 2) {
            // btnAnnuler.onclick(getTransaction(transaction))
            tr.append(btnAnnuler)
            btnAnnuler.addEventListener('click',()=>{
                personnes[i].solde+=transaction.montant
                // console.log(montantTransfert);
                // console.log(personnes[i]);
                getTransaction(transaction,personnes[i])
                tr.style.textDecoration="line-through" 

                // if (verifyExistNumber()) {
                //     for (let i = 0; i < personnes.length; i++) {
                //         if (inputTelephone.value==personnes[i].telephone) {
                //              personnes[i].solde=personnes[i].solde+montantTransfert.value
                //         }              
                //     }
                // }

            })
        } 
        // else {
        //     tdsens.innerText = "retrait"
        // }
       
    });
    // for (const transaction of tab) {
        
    // }
}

function verifyExistNumber() {
    let input = inputTelephone.value
    for (let i = 0; i < personnes.length; i++) {
        if (input == personnes[i].telephone) {
            return true
        }
    }
    return false
}
function getUserByPhone(numero) {
    return personnes.find(p => p.telephone == numero)
}

function transfert(numero, montant) {
    for (let i = 0; i < personnes.length; i++) {
        if (numero == personnes[i].telephone) {
            personnes[i].solde += montant
        }

    }
}
function getClientBytelephone(numeroUser){
    for (let i = 0; i < personnes.length; i++) {
        if (numeroUser==personnes[i].telephone) {
            return personnes[i]
        }
        return false 
    }
}

function getTransaction(transaction,personne){
    console.log(transaction,personne);
}