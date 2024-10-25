// Selfwork Oggetti 2
// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:

//     mostrare tutti i contatti dell’agenda
//     mostrare un singolo contatto
//     eliminare un contatto dall’agenda
//     aggiungere un nuovo contatto
//     modificare un contatto esistente  

// Suggerimento:

//     let rubrica = {
//       'contacts': [
//           {'nome': 'Nicola', 'telefono': '3331111111'},
//           {'nome': 'Lorenzo', 'telefono': '3332222222'},
//           {'nome': 'Paola', 'telefono': '3333333333'},
//           {'nome': 'Jenny', 'telefono': '3334444444'}
//       ],
//       ...
//     }



let agenda = {
        contatti: [
            {'nome': 'Nicola',  'telefono': '3331111111'},
            {'nome': 'Lorenzo', 'telefono': '3332222222'},
            {'nome': 'Paola',   'telefono': '3333333333'},
            {'nome': 'Jenny',   'telefono': '3334444444'}
        ],
   

    aggiungi: function(nome,telefono) {
        //     aggiungere un nuovo contatto

        this.contatti.push({nome, telefono});
        console.log(`Contatto aggiunto: ${nome}, Telefono: ${telefono}`);
        // this.mostraTutti();

    },



    mostraTutti: function() {
       // mostrare tutti i contatti dell’agenda

        this.contatti.forEach( (contatto,indice)=> 
        console.log(`${indice+1} -  Nome: ${contatto.nome} Numero: ${contatto.telefono}`) );
    },
    



    elimina: function(nome) {
        //     eliminare un contatto dall’agenda

        let daRimuovere = this.contatti.findIndex(elemento => elemento.nome === nome);

        if (daRimuovere >0) {
                        this.contatti.splice(daRimuovere, 1);
                        console.log(`Contatto eliminato: ${nome}`);
                        // this.mostraTutti();
                    } else {
                        console.log("Contatto non trovato.");
                    }
        
    },



    mostraSingolo : function(nome) {
    //     mostrare un singolo contatto

    let contatto = this.contatti.find((elemento)=> elemento.nome === nome);

        if (contatto) {
            console.log(`${contatto.nome} trovato in rubrica - Telefono: ${contatto.telefono}`);
        } else {
            console.log("Contatto non trovato in rubrica.");
        }
    

    },



    modifica : function(nome, numero) {
    //     modificare un contatto esistente 

    let contatto = this.contatti.find((elemento)=> elemento.nome === nome);

        if (contatto) { 
            contatto.telefono = numero;
            console.log(`Contatto modificato: ${nome}, Telefono: ${numero}`);
            // this.mostraTutti();
        } else {
            console.log("Contatto non trovato in rubrica.");
        }

    }

} // chiusura oggetto agenda



agenda.aggiungi("Roberto",3479988777);

agenda.mostraSingolo("Nicola");
agenda.elimina("Jenny");
agenda.modifica("Roberto",3999123234);

agenda.mostraTutti();
