import { Produto } from './Produto';

export class MateriaEvento {
    id: number;
    dataPublicacao: string;
    titulo: string;
    tituloEs: string;
    tituloEn: string;
    olho: string;
    olhoEs: string;
    olhoEn: string;
    tituloHome: string;
    tituloHomeEs: string;
    tituloHomeEn: string;
    texto: string;
    textoEs: string;
    textoEn: string;
    hit: number;
    imagemRede: string;
    ativo: boolean;
    produtoId: number;
    produto: Produto;
}
