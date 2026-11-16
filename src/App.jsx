import './style.css';

import StudentCard from './components/StudentCard.jsx';
import { useState } from 'react';
import StudentForm from './StudentForm.jsx';
import pro from './assets/pro.webp'
import bro from './assets/bro.avif'
import woman from './assets/woman.webp'
import gra from './assets/gra.avif'

function App() {

    const  [etudiants,setEtudiants] = useState([
    {
    id:1,
    nom:"Rhouma",
    prenom:"Montassar",
    Email:'montassarrhouma82@gmail.com',
    telephone:'95884692',
    filiere:"genie logiciel et system d information",
    Annee:"2éme annee",
    Groupe:"GLSI2",
    ville:"Mahdia",
    image : pro,
    },

    {
    id:2,
    nom:'Mariem',
    prenom:'Marzouk',
    Email:"mariemmarouk@gmail.com",
    telephone:'98765432',
    filiere:"genie logiciel et system d information",
    Annee:"2éme annee",
    Groupe:"GLSI2",
    ville:"nabeul",
    image : woman,
   },

    {
    id:3,
    nom:"amine",
    prenom:"Guesmi",
    Email:"ahmedbenschalah@gmail.com",
    telephone:'98765431',
    filiere:"genie logiciel et system d information",
    Annee:"2éme annee",
    Groupe:"GLSI2",
    ville:"Mahdia",
    image : bro,
    },
    {
    id:3,
    nom:"Maram",
    prenom:"benali",
    Email:"marambenali@gmail.com",
    telephone:'98765431',
    filiere:"genie logiciel et system d information",
    Annee:"2éme annee",
    Groupe:"GLSI2",
    ville:"sfax",
    image : gra,
    }
  ]);
      {etudiants.map((etudiant) => (
      <StudentCard
        key={etudiant.id}
        id={etudiant.id}
        nom={etudiant.nom}
        prenom={etudiant.prenom}
        Email={etudiant.Email}
        telephone={etudiant.telephone}
        filiere={etudiant.filiere}
        Annee={etudiant.Annee}
        Groupe={etudiant.Groupe}
        ville={etudiant.ville}
        image={etudiant.image}
        />
      ))}
      
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id:4,
      nom: "Ben Salem",
      prenom: "Ahmed",
      Email: "bensalemAhmed@gmail.com",
      telephone: "25469876",
      filiere: "genie logiciel et system d information",
      Annee: "2ème annee",
      Groupe: "GLSI1",
      ville: "sfax",
      image: ""
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
  }
  function supprimerEtudiant(id) {
    setEtudiants(anciensEtudiants => anciensEtudiants.filter(etudiant => etudiant.id !== id)
    );
  }
  function modifierEtudiant(id) {
    const nouveauprenom = prompt("entrez le nouveau prenom:");
    if(
      nouveauprenom !== null &&
      nouveauprenom.trim() !==""

    )
    {
    setEtudiants((anciensEtudiants) => 
      anciensEtudiants.map(
        (etudiant)=>
          etudiant.id === id
           ? {...etudiant,
              prenom:nouveauprenom.trim(),
            }
            :etudiant,
      ),
    );
  }

  }


  return (
    <div className="container">
      <StudentForm 
          onAjouterEtudiant={ajouterEtudiant}
      />
      {etudiants.map((etudiant,id) => (
        <StudentCard
          key={id}
          id={etudiant.id}
          nom={etudiant.nom}
          prenom={etudiant.prenom}
          Email={etudiant.Email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          Annee={etudiant.Annee}
          Groupe={etudiant.Groupe}
          ville={etudiant.ville}
          image={etudiant.image}
          supprimerEtudiant={supprimerEtudiant}
          onmodifier={modifierEtudiant}
        />
      ))}

      <button onClick={ajouterEtudiant}>
        Ajouter un étudiant
      </button>

      
    </div>
  );
}
export default App;