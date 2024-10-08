export interface IfotoScarpa {
    id: number,
    modello: string,
        colori: Igalleria[],
        video: string
}

export interface Igalleria {
        colore: string,
        fotoCopertina: string,
        foto: string[]
}
