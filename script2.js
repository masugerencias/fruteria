let frutas = ["Manzana", "Banana", "pera", "fresa"];
let ultimo = frutas[frutas.length - 1]





function añadir (    
) {
    let eleccion=prompt('¿Qué fruta quieres añadir a la lista?')
    frutas.push(eleccion);
    alert('Tu' + eleccion + ' se acaba de añadir a la lista de frutas')

    alert('Esta es tu lista de frutas: '+ frutas)
}

//tengo que asignar a una variable el ultimo elemento añadido.

function borrar () {
    ultimo=frutas.pop();
    alert('Acabas de borrar tu ultima fruta de la lista: ' + ultimo);
    alert('Asi se ha quedado tu lista :' + frutas)
}