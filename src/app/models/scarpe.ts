export interface IScarpaNike {
    id: number,
    nome: string,
    categoria: string,
    prezzo: number,
    taglie_disponibili: string[],
    colori_disponibili: string[],
    descrizione: string,
    immagine: string,
    nuovo_arrivi: boolean,
    best_seller: number
}

export interface IScarpaSelezionata { 
    id: number,
    nome: string,
    categoria: string,
    prezzo: number,
    taglia: string,
    colore: string,
    quantita: number,
    immagine: string,
}