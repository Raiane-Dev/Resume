import { useState } from "react";
import { Row, Col, Typography, Layout, Image, Space, List } from "antd";
import { PhoneOutlined, MailOutlined, LinkedinOutlined, GithubOutlined } from "@ant-design/icons";

import { FormProperty, FormPattern } from "../types/Form";
import FormEmail from "../components/FormEmail";

const my_image = require("../assets/my_image.JPG");
const { Title, Text, Paragraph } = Typography;

const Home = () => 
{
    const [form, setForm] = useState<FormProperty>(FormPattern);

    return (
        <Layout.Content className="body-content">
            <Row justify="space-between" align="top">
                <Col
                span={12} xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}
                className="box-left"
                >
                    <Space direction="vertical">
                        <Title level={3} className="feature">
                            Raiane A. Daros
                        </Title>
                        <Text type="secondary" className="sub-text">
                            Programadora Fullstack
                        </Text>
                    </Space>

                    <Row 
                    align="middle"
                    justify="center"
                    className="box-image"
                    >
                        <Col 
                        span={14} xxl={14} xl={14} lg={14} md={14} sm={14} xs={14}
                        className="box-image-column one"
                        >
                            <Image
                            src={my_image} 
                            className="my_image"
                            preview={false}
                            />
                        </Col>
                        <Col 
                        offset={1}
                        span={8}
                        className="box-image-column two"
                        >
                            <Space className="box-text">
                                <Paragraph className="sub-text two">
                                    Prazer, me chamo Raiane!
                                </Paragraph>
                            </Space>
                        </Col>
                    </Row>

                </Col>
                <Col 
                span={8} xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}
                >
                    <Row justify="end" align="middle" className="grid-two">
                        <Col>
                            <List itemLayout="vertical">
                                <List.Item className="box-right">
                                    <List.Item.Meta
                                        title={
                                            <Space className="item-list">
                                                <Text 
                                                    copyable={{
                                                        icon: <PhoneOutlined className="icon-default"/>,
                                                        text: "Copiar"
                                                    }}> +55 51 997807904 </Text>
                                            </Space>
                                        }/>
                                    <List.Item.Meta
                                        title={
                                            <Space className="item-list">
                                                <Text
                                                onClick={() => setForm({...form, visibleEmail: !form.visibleEmail })}
                                                > raiane.dev@gmail.com </Text> <MailOutlined />
                                            </Space>
                                        }/>
                                    <List.Item.Meta
                                        title={
                                            <Space className="item-list">
                                                <a href="https://www.linkedin.com/in/raiane-dev" target="__blank"><Text> Raiane A. Daros </Text></a> <LinkedinOutlined />
                                            </Space>
                                        }/>
                                    <List.Item.Meta
                                        title={
                                            <Space className="item-list">
                                                <a href="https://github.com/Raiane-Dev" target="__blank"><Text> Raiane-Dev </Text></a> <GithubOutlined />
                                            </Space>
                                        }/>
                                </List.Item>
                            </List>
                        </Col>

                        <Col className="spacing" />
                                            
                        <Col className="box-right borded">
                            <Paragraph className="legend">
                                Sou desenvolvedora FullStack com ênfases na parte do Backend.
                            </Paragraph>
                        </Col>

                        <Col className="spacing" />

                        <Space direction="vertical" className="box-right">
                            <Title level={5} className="subtitle">
                                Sobre
                            </Title>
                            <Paragraph className="legend borded">
                                Eu sou apaixonada por resolver problemas e
                                aprender. Sempre estou aberta a novos
                                desafios e pronta para enfrentar as
                                mudanças. Já utilizei as mais diferentes
                                tecnologias e acredito que, antes de mais
                                nada, tenho que solucionar problemas - e uso
                                o meu conhecimento para isso.
                            </Paragraph>
                        </Space>
                    </Row>
                </Col>
            </Row>

            <Col className="spacing" />

            <Row
            justify="space-between" 
            align="top"
            >
                <Col
                span={12} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}
                className="box-left"
                >
                    <Space wrap={true} className="text-column">
                        <Title level={5} className="subtitle">
                            Info
                        </Title>
                        <Paragraph className="subtitle two">
                            Residência
                        </Paragraph>
                        <Text>
                        Bairro: Pantanal
                        <br />Cidade: Florianópolis
                        <br />Estado: Santa Catarina
                        </Text>
                        <Col className="spacing" />
                        <Paragraph className="subtitle two">
                            Contato
                        </Paragraph>
                        <Text>
                        Email: raiane.dev@gmail.com
                        <br />Github: github.com/Raiane-Dev
                        <br />Linkedin: linkedin.com/in/raiane-dev/
                        <br />Instagram: instagram.com/naniz_daros/
                        <br />Telefone: +55 51 99566-4583                        
                        </Text>
                    </Space>
                    <Col className="spacing" />
                </Col>
                <Col
                span={8} xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}
                className="box-left"
                >
                    <Space wrap={true} className="text-column">
                        <Title level={5} className="subtitle">
                            Linguagens
                        </Title>
                        <Text>
                            PHP | C, C++ | JavaScript, TypeScript | PL / SQL | CSS, Less | Shell
                        </Text>
                        <Col className="spacing entry-text" />
                        
                        <Title level={5} className="subtitle">
                            Ambientes
                        </Title>
                        <Text>
                            Docker | Arch Linux | Ubuntu | Nginx | Apache
                        </Text>

                        <Col className="spacing entry-text" />
                        
                        <Title level={5} className="subtitle">
                            Bibliotecas
                        </Title>
                        <Text>
                        jQuery | React JS | Node JS | Laravel
                        </Text>

                        <Col className="spacing entry-text" />
                        
                        <Title level={5} className="subtitle">
                            Databases
                        </Title>
                        <Text>
                        Oracle | MySql | Firebase | PostgreSQL
                        </Text>

                        <Col className="spacing entry-text" />
                        
                        <Title level={5} className="subtitle">
                            Experiências
                        </Title>
                        <Text>
                            Call center - ibridge.com.br
                            < br />Fábrica de software - cd2.com.br
                        </Text>
                    </Space>
                </Col>
            </Row>

            <FormEmail 
                show={form.visibleEmail}
                handleAction={() => setForm({...form, visibleEmail: !form.visibleEmail})}
            />
        </Layout.Content>
    );
}

export default Home;