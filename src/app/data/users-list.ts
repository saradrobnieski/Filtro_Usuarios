import { IUser } from "../interfaces/user/user.interface"

export const UsersList: IUser[] = [
  {
    nome: "Olivia Silva",
    email: "olivia.silva@example.com",
    senha: "livi123",
    idade: 25,
    endereco: {
      rua: "Rua das Flores",
      numero: 42,
      cidade: "São Paulo",
      estado: "SP",
      pais: "Brasil"
    },
    telefone: "11912345678",
    ativo: true,
    funcao: "Desenvolvedora",
    dataCadastro: "2023-08-01T09:00:00.000Z",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2023-08-02T09:00:00.000Z"
    }
  },
  {
    nome: "Cecilia Fernandes",
    email: "cecilia.fernandes@example.com",
    senha: "ceci123",
    idade: 23,
    endereco: {
      rua: "Avenida do Sol",
      numero: 100,
      cidade: "Rio de Janeiro",
      estado: "RJ",
      pais: "Brasil"
    },
    telefone: "21956789101",
    ativo: false,
    funcao: "Designer",
    dataCadastro: "2023-08-05T09:00:00.000Z",
    status: {
      online: false,
      verificado: false,
      assinaturaAtiva: false,
      ultimoAcesso: "2023-08-06T09:00:00.000Z"
    }
  },
  {
    nome: "Emma Pereira",
    email: "emma.pereira@example.com",
    senha: "emma123",
    idade: 30,
    endereco: {
      rua: "Praça da Liberdade",
      numero: 5,
      cidade: "Belo Horizonte",
      estado: "MG",
      pais: "Brasil"
    },
    telefone: "31911121314",
    ativo: true,
    funcao: "Gerente",
    dataCadastro: "2023-08-10T09:00:00.000Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "2023-08-12T09:00:00.000Z"
    }
  },
  {
    nome: "Murilo Sousa",
    email: "murilo.sousa@example.com",
    senha: "lilo123",
    idade: 40,
    endereco: {
      rua: "Rua das Pedras",
      numero: 80,
      cidade: "Porto Alegre",
      estado: "RS",
      pais: "Brasil"
    },
    telefone: "51915161718",
    ativo: false,
    funcao: "Analista",
    dataCadastro: "2023-08-15T09:00:00.000Z",
    status: {
      online: true,
      verificado: false,
      assinaturaAtiva: true,
      ultimoAcesso: "2023-08-18T09:00:00.000Z"
    }
  },
  {
    nome: "Nicolas Mendes",
    email: "nicolas.mendes@example.com",
    senha: "nick123",
    idade: 38,
    endereco: {
      rua: "Boulevard Center",
      numero: 60,
      cidade: "Recife",
      estado: "PE",
      pais: "Brasil"
    },
    telefone: "819192202122",
    ativo: true,
    funcao: "Diretor",
    dataCadastro: "2023-08-20T09:00:00.000Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "2023-08-25T09:00:00.000Z"
    }
  },
]
