import { useState } from "react";
import { Row, Col, Typography, Layout, Image, Space, List } from "antd";
import { PhoneOutlined, MailOutlined, LinkedinOutlined } from "@ant-design/icons";

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
                span={12}
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
                        span={14}
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
                <Col span={8}>
                    <Row justify="end" align="middle" className="grid-two">
                        <Col span={24}>
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
                                                <Text> Raiane Dev </Text> <LinkedinOutlined />
                                            </Space>
                                        }/>
                                        
                                </List.Item>
                            </List>
                        </Col>

                        <Col className="spacing" />

                        <Col className="box-right borded">
                            <Paragraph className="legend">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                            </Paragraph>
                        </Col>

                        <Col className="spacing" />

                        <Space direction="vertical" className="box-right">
                            <Title level={5} className="subtitle">
                                Info
                            </Title>
                            <Paragraph className="legend borded">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                            </Paragraph>
                        </Space>
                    </Row>
                </Col>
            </Row>


            <Row
            justify="space-between" 
            align="top"
            >
                <Col
                span={12}
                className="box-left"
                >
                    <Space wrap={true} className="text-column">
                        <Title level={5} className="subtitle">
                            Formação
                        </Title>
                        <Paragraph className="subtitle two">
                            To recipient name
                        </Paragraph>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Col className="spacing" />
                        <Paragraph className="subtitle two">
                            To recipient name
                        </Paragraph>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </Space>
                </Col>
                <Col
                span={8}
                className="box-left"
                >
                    <Space wrap={true} className="text-column">
                        <Title level={5} className="subtitle">
                            Info
                        </Title>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>

                        <Col className="spacing" />
                        
                        <Title level={5} className="subtitle">
                            Info
                        </Title>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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