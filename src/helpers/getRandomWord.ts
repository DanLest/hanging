let words: string[] =[
    'COMPUTADORA',
    'AGUACATE',
    'GATO',
    'PERRO',
    'CARRO',
    'VASO',
    'AEROPUERTO',
    'ESCRITORIO'





];


export function getRandomWord() {

    const randomIndex = (Math.floor( Math.random() * words.length ));

    return words[randomIndex];
}