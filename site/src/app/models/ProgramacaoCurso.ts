import { ProgramacaoCursoImagem } from './ProgramacaoCursoImagem';
import { Programacao } from './Programacao';
import { Ministrador } from './Ministrador';

export class ProgramacaoCurso {
    id: number;
    dataInicio: string;
    dataTermino: string;
    tema: string;
    temaEs: string;
    temaEn: string;
    abordagem: string;
    abordagEs: string;
    abordagemEn: string;

    imagens: Array<ProgramacaoCursoImagem>;

    programacaoId: number;
    programacao: Programacao;

    ministradorId: number;
    ministrador: Ministrador;
}
