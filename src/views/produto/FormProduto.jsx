import React, { useState }  from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function FormProduto() {

    const [titulo, setTitulo] = useState();
    const [codProduto, setCodProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [valorunitario, setValorUnitario] = useState();
    const [entregaMinima, setEntregaMinima] = useState();
    const [entregaMaxima, setEntregaMaxima] = useState();



    function salvar() {

		let produtoRequest = {
		     titulo: titulo,
		     codProduto: codProduto,
		     descricao: descricao,
		     valorUnitario: valorunitario,
		     entregaMinima: entregaMinima,
             entregaMaxima: entregaMaxima,
		}
	
		axios.post("http://localhost:8082/api/produto", produtoRequest)
		.then((response) => {
		     console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o Produto.')
		})
	}




    return (

        <div>
             <MenuSistema tela={'produto'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    placeholder="Informe o título do produto"
                                    width={40}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        placeholder="Informe o código do produto"
                                        width={6}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Descrição'
                                    placeholder="Informe a descrição do produto"
                                    marginTop="100"
                                    width={3}
                                    height="300"
                                >

                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    label="Valor Unitário"
                                    size="400"
                                    width={5}
                                >

                                </Form.Input>
                                <Form.Input
                                label="Tempo de Entrega Mínimo em Minutos"
                                placeholder="30"
                                width={5}
                                >

                                </Form.Input>

                                <Form.Input
                                label="Tempo de Entrega Máximo em Minutos"
                                placeholder="40"
                                width={5}
                                line-height="110"
                                margin = "2px"

                                >

                                </Form.Input>


                            </Form.Group>


                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
