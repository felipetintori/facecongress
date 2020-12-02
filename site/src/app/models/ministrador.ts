import { MinistradorImagem } from './MinistradorImagem';
export class Ministrador {
    id: number;
    nome: string;
    curriculo: string;
    curriculoEs: string;
    curriculoEn: string;
    pais: string;
    paisEs: string;
    paisEn: string;
    ativo: boolean;
    imagens: Array<MinistradorImagem>;
}
