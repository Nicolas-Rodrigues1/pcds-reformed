import { Cliente } from "src/app/autenticacao/clientes/cliente";
import { Produto } from "src/app/autenticacao/produtos/produto";

export interface Pedido{
    idPedido: number,
    status: string,
    cliente: Cliente,
    produto: Produto
}
    