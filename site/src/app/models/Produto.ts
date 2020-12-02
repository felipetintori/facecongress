import { TipoPeriodoProduto } from './TipoPeriodoProduto';
import { TipoProduto } from './TipoProduto';

export class Produto {
    id: number;
    dataCadastro: string;
    nome: string;
    valor: number;
    urlProduto: string;
    tipoProduto: TipoProduto;
    codigoFiscal: string;
    periodoAssinatura: any;
    tipoPeriodoProduto: TipoPeriodoProduto;
}
