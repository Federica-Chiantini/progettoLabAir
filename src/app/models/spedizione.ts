export interface IDatiUtente {
    nome: string,
    cognome: string,
    indirizzo: Iindirizzo,
    email: string,
    tel: number
}

export interface Iindirizzo {
    via: string,
    cap: string,
    citta: string,
    provincia: string,
    nazione: string
}

export interface IDatiPagamento {
    numero: number,
    data: string,
    ccv: number,
}

export interface INuovoOrdine{
    utente: IDatiUtente
    pagamento: IDatiPagamento
}