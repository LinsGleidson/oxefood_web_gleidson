import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Form,
  FormTextArea,
  Icon,
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormProduto() {
  const [titulo, setTitulo] = useState();
  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState();
  const [valorUnitario, setValorUnitario] = useState();
  const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
  const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
  
  const [idProduto, setIdProduto] = useState();
  const { state } = useLocation();

  useEffect(() => {
    
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:8080/api/produto/" + state.id)
        .then((response) => {
          setIdProduto(response.data.id);
          setTitulo(response.data.titulo);
          setCodigo(response.data.codigo);
          setDescricao(response.data.descricao);
          setTempoEntregaMinimo(response.data.tempoEntregaMinimo);
          setTempoEntregaMaximo(response.data.tempoEntregaMaximo);
        });
    }
  }, [state]);

  function salvar() {
    let produtoRequest = {
      titulo: titulo,
      codigo: codigo,
      descricao: descricao,
      valorUnitario: valorUnitario,
      tempoEntregaMinimo: tempoEntregaMinimo,
      tempoEntregaMaximo: tempoEntregaMaximo,
    };

    if (idProduto != null) {
      //Alteração:

      axios
        .put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
        .then((response) => {
          console.log("Produto alterado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao alterar um produto.");
        });
    } else {
      //Cadastro:

      axios
        .post("http://localhost:8080/api/produto", produtoRequest)
        .then((response) => {
          console.log("Produto cadastrado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao incluir o um produto.");
        });
    }
  }

  return (
    <div>
      <MenuSistema />

      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2>
            {" "}
            <span style={{ color: "darkgray" }}>
              {" "}
              Produto &nbsp;
              <Icon name="angle double right" size="small" />{" "}
            </span>{" "}
            Cadastro{" "}
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  label="Título"
                  maxLength="100"
                  placeholder="Informe o título do produto"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                ></Form.Input>

                <Form.Input
                  required
                  fluid
                  label="Código do Produto"
                  placeholder="Informe o código do produto"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                ></Form.Input>
              </Form.Group>

              <Form.Group widths="equal">
                <FormTextArea
                  label="Descrição"
                  placeholder="Informe a descrição do produto"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                ></FormTextArea>
              </Form.Group>

              <Form.Group>
                <Form.Input
                  fluid
                  required
                  label="Valor Unitário"
                  width={6}
                  value={valorUnitario}
                  onChange={(e) => setValorUnitario(e.target.value)}
                ></Form.Input>

                <Form.Input
                  fluid
                  label="Tempo de Entrega"
                  width={6}
                  value={tempoEntregaMinimo}
                  placeholder="30"
                  onChange={(e) => setTempoEntregaMinimo(e.target.value)}
                ></Form.Input>

                <Form.Input
                  fluid
                  label="Tempo de Entrega Máximo em Minutos"
                  width={8}
                  placeholder="40"
                  value={tempoEntregaMaximo}
                  onChange={(e) => setTempoEntregaMaximo(e.target.value)}
                ></Form.Input>
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
                <Link to={"/list-produto"}>Listar</Link>
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
