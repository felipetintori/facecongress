import { ProgramacaoCurso } from './ProgramacaoCurso';
import { TipoProgramacao } from './TipoProgramacao';
import { Produto } from './Produto';
export class Programacao {
    id: number;
    dataCadastro: Date;
    dataAtualizacao: Date;
    dataInicio: string;
    dataTermino: string;
    lotacao: number;
    sala: string;
    temaGeral: string;
    temaGeralEs: string;
    temaGeralEn: string;
    abordagemGeral: string;
    abordagemGeralEs: string;
    abordagemGeralEn: string;
    especialidade: string;
    tipo: TipoProgramacao;

    produtoId: number;
    produto: Produto;

    cursos: Array<ProgramacaoCurso>;
}
