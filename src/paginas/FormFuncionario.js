import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormFuncionario() {
    const navegacao = useNavigate();
    const { id } = useParams();

    //Declarar um useState para cada campo da tabela
    const [nomefuncionario, setNomeFuncionario] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [salario, setSalario] = useState('');
    const [contratacao, setContratacao] = useState('');
    const [ativo, setAtivo] = useState('');
    const [token, setToken] = useState('');


    const voltar = () => {
        navegacao('/listafuncionario');
    };

    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/funcionario/${id}`);
        //carregar cada campo na sua respectiva variável
        setNomeFuncionario(data.nomefuncionario);
        setNascimento(data.nascimento);
        setCpf(data.cpf);
        setEmail(data.email);
        setTelefone(data.telefone);
        setSenha(data.senha);
        setSalario(data.salario);
        setContratacao(data.contratacao);
        setAtivo(data.ativo);
        setToken(data.token);
    }

    const alterar = async () => {
        //montar o json do body com todos os campos que precisam ser enviados
        let body = {
            "nomefuncionario": nomefuncionario,
            "nascimento": nascimento,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "senha": senha,
            "salario": salario,
            "contratacao": contratacao
        };

        await axios.put(`http://localhost:4000/funcionario/${id}`, body);
        voltar();
    }

    const inserir = async () => {
        let body = {
            "nomefuncionario": nomefuncionario,
            "nascimento": nascimento,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "senha": senha,
            "salario": salario,
            "contratacao": contratacao
        };

        await axios.post(`http://localhost:4000/funcionario`, body);
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
        await axios.delete(`http://localhost:4000/funcionario/${id}`);
        voltar();
    }

    useEffect(() => {
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
            <TituloCadastro id={id} titulo="Funcionário" />

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
                        Nome do Funcionario
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nomefuncionario}
                        onChange={(evento) => setNomeFuncionario(evento.target.value)}
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

                <div className="mb-3">
                    <label className="form-label">
                        Salário
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={salario}
                        onChange={(evento) => setSalario(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Contratação
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={contratacao}
                        onChange={(evento) => setContratacao(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Ativo
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={ativo}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Token
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={token}
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