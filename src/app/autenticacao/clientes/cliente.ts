export interface Cliente{
    id: number;
    nome: string;
    nascimento: string;
    cpf: string;
    cep: string;
    telefone: string;
    email: string;
    genero: string;
}

export interface Clientelogin{
    id: number;
    email: string;
    senha: string;
}