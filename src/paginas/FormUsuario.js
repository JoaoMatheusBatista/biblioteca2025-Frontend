import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormUsuario() {
    const navegacao = useNavigate();
    const { id } = useParams();

    //Declarar um useState para cada campo da tabela
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');


    const voltar = () => {
        navegacao('/listausuario');
    };

    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/usuario/${id}`);
        //carregar cada campo na sua respectiva variável
        setNome(data.nome);
        setNascimento(data.nascimento); 
        setCpf(data.cpf);
        setEmail(data.email);
        setTelefone(data.telefone);
        setSenha(data.senha);
    }

    const alterar = async () => {
        //montar o json do body com todos os campos que precisam ser enviados
        let body = {
            "nome": nome,
            "nascimento": nascimento,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "senha": senha
        };

        await axios.put(`http://localhost:4000/usuario/${id}`, body);
        voltar();
    }

    const inserir = async () => {
        let body = {
            "nome": nome,
            "nascimento": nascimento,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "senha": senha
        };

        await axios.post(`http://localhost:4000/usuario`, body);
        voltar();
    }

    const salvar = async () => {
        if (id) {
            alterar();
        }
        else {
            inserir();
        }
    }

    const excluir = async () => {
        await axios.delete(`http://localhost:4000/usuario/${id}`);
        voltar();
    }

    useEffect(() => {
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
            <TituloCadastro id={id} titulo="Usuário" />

            <form>
                {id && (
                    <div className="mb-3">
                        <label className="form-label">
                            Código
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={id}
                        />
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label">
                        Nome do Usuário
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Nascimento
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nascimento}
                        onChange={(evento) => setNascimento(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        CPF
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={cpf}
                        onChange={(evento) => setCpf(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(evento) => setEmail(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Telefone
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={telefone
                        }
                        onChange={(evento) => setTelefone(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Senha
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={senha}
                        onChange={(evento) => setSenha(evento.target.value)}
                    />
                </div>

                <button type="button" className="btn btn-primary"
                    onClick={() => salvar()}>
                    Salvar
                </button>
                <button type="button"
                    className="btn btn-secondary"
                    onClick={() => voltar()}>
                    Cancelar
                </button>
                {id && (
                    <button type="button"
                        className="btn btn-danger"
                        onClick={() => excluir()}>
                        Excluir
                    </button>
                )}
            </form>
        </>
    );
};