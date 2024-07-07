import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Select } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function FormEntregador() {

    return (

        <div>
            <MenuSistema tela={'entregador'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={70}
                                    id={"NomeEntregador"}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    id={"CpfEntregador"}
                                    width={5}>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"

                                    />
                                </Form.Input>

                                <Form.Input
                                    id={"RgEntregador"}
                                    fluid
                                    label='RG'
                                    width={5}>

                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={3}
                                    height="300"
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: dd/mm/aaaa"
                                    />

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    required
                                    label='Fone Celular'
                                    width={3}
                                    height="300"
                                >
                                    <InputMask
                                        required
                                        mask="Ex: 99-99999-9999"
                                    />

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    marginTop="100"
                                    width={3}
                                    height="300"
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTS Entregas Realizadas'
                                    marginTop="100"
                                    width={3}
                                    height="300"
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor de Frete'
                                    marginTop="100"
                                    width={3}
                                    height="300"
                                >

                                </Form.Input>



                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    label="Rua"
                                    width={50}

                                >

                                </Form.Input>
                                <Form.Input
                                    label="Numero"
                                    width={5}
                                >

                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    label="Bairro"

                                >

                                </Form.Input>

                                <Form.Input
                                    label="Cidade"
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cep'
                                    width={5}
                                    height="300"
                                >
                                    <InputMask
                                        maskChar={null}
                                        
                                    />

                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Select
                                    fluid
                                    label="UF"
                                    placeholder="Selecione"


                                >

                                </Form.Select>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    label="Complemento"

                                >

                                </Form.Input>

                            </Form.Group>


                            <Form.Group inline>

                                <label>Ativo</label>
                            

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