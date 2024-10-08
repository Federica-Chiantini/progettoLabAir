export interface IUtente{
      "nome" : string,
      "cognome" : string,
      "password" : string,
      "email" : string,
      "tel" : string,
      "via" : string,
      "cap" : string,
      "citta" : string,
      "provincia" : string,
      "nazione" : string
}

export interface IUtenteAutenticato{
    "password" : string,
    "email" : string
}