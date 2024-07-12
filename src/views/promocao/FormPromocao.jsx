import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, FormTextArea, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormPromocao() {
    const [titulo, setTitulo] = useState();
    const [dataInicio, setDataInicio] = useState();
    const [dataFim, setDataFim] = useState();
    const [regra, setRegra] = useState();
    const [valorDesconto, setValorDesconto] = useState();

    const [idPromocao, setIdPromocao] = useState();
    const { state } = useLocation();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios
                .get("http://localhost:8080/api/promocao/" + state.id)
                .then((response) => {
                    setIdPromocao(response.data.id);
                    setTitulo(response.data.titulo);
                    setDataInicio(response.data.dataInicio);
                    setDataFim(response.data.dataFim);
                    setRegra(response.data.regra);
                    setValorDesconto(response.data.valorDesconto);
                });
        }
    }, [state]);

    function salvar() {
        let promocaoRequest = {
            titulo: titulo,
            dataInicio: dataInicio,
            dataFim: dataFim,
            regra: regra,
            valorDesconto: valorDesconto,
        };

        if (idPromocao != null) {
            //Alteração:

            axios
                .put("http://localhost:8080/api/promocao/" + idPromocao, promocaoRequest)
                .then((response) => {
                    console.log("Promção alterada com sucesso.");
                })
                .catch((error) => {
                    console.log("Erro ao alterar uma Promoção.");
                });
        } else {
            //Cadastro:

            axios
                .post("http://localhost:8080/api/promocao", promocaoRequest)
                .then((response) => {
                    console.log("Promoção cadastrada com sucesso.");
                })
                .catch((error) => {
                    console.log("Erro ao incluir o uma Promocao.");
                });
        }
    }

    return (
        <div>
            <MenuSistema />

            <div style={{ marginTop: "3%" }}>
                <Container textAlign="justified">
                    {idPromocao === undefined && (
                        <h2>
                            <span style={{ color: "darkgray" }}>
                                Promocao &nbsp;
                                <Icon name="angle double right" size="small" />{" "}
                            </span>
                            Cadastro
                        </h2>
                    )}

                    {idPromocao != undefined && (
                        <h2>
                            <span style={{ color: "darkgray" }}>
                                Promocao &nbsp;
                                <Icon name="angle double right" size="small" />{" "}
                            </span>
                            Alteração
                        </h2>
                    )}

                    <Divider />

                    <div style={{ marginTop: "4%" }}>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input
                                    required
                                    fluid
                                    placeholder="Informe o titulo da promoçao"
                                    label="Titulo"
                                    maxLength="100"
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                />

                            </Form.Group>
                            <Form.Group widths="equal">
                                <FormTextArea
                                    label="Regra"
                                    value={regra}
                                    onChange={(e) => setRegra(e.target.value)}
                                ></FormTextArea>
                            </Form.Group>


                            <Form.Group widths="equal">

                                <Form.Input
                                    width={6}
                                    fluid
                                    label="Valor Desconto (R$)"
                                    value={valorDesconto}
                                    onChange={(e) => setValorDesconto(e.target.value)}
                                />

                                <Form.Input fluid label="A partir de" width={6} required>
                                    <InputMask

                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataInicio}
                                        onChange={(e) => setDataInicio(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input fluid label="Terminando em" width={6} required>
                                    <InputMask
                                        required
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataFim}
                                        onChange={(e) => setDataFim(e.target.value)}
                                    />
                                </Form.Input>


                            </Form.Group>
                        </Form>

                        <div style={{ marginTop: "4%" }}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition="left"
                                color="orange"
                            >
                                <Icon name="reply" />
                                <Link to={"/list-promocao"}>Listar</Link>
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition="left"
                                color="blue"
                                floated="right"
                                onClick={() => salvar()}
                            >
                                <Icon name="save" />
                                Salvar
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
