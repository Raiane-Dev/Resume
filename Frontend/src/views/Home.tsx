import { useState } from "react";
import { Row, Col, Typography, Layout, Image, Space, Divider, List } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const my_image = require("../assets/my_image.JPG");
const { Title, Text, Paragraph } = Typography;

const Home = () => 
{


    return (
        <Layout.Content className="body-content">
            <Row justify="space-between" align="top">
                <Col span={12} className="box-left">
                    <Space direction="vertical">
                        <Title level={3} className="feature">
                            Raiane Daros
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
                                    PRESENT ADDRESS
                                </Paragraph>
                            </Space>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Space wrap={true} className="text-column">
                                <Title level={5} className="subtitle">
                                    Info
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
                        <Col>
                        
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
                                                <Text> +55 51 997807904 </Text> <PhoneOutlined />
                                            </Space>
                                        }/>
                                    <List.Item.Meta
                                        title={
                                            <Space className="item-list">
                                                <Text> +55 51 997807904 </Text> <PhoneOutlined />
                                            </Space>
                                        }/>
                                    <List.Item.Meta
                                        title={
                                            <Space className="item-list">
                                                <Text> +55 51 997807904 </Text> <PhoneOutlined />
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
                    </Row>
                </Col>    
            </Row>   
        </Layout.Content>
    );
}

export default Home;