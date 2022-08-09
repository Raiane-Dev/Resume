import { useMemo } from "react";
import { Modal, Form, Input } from "antd";
import api from "../services/api";

const FormEmail = ({show, handleAction}: any) => {
    
    const [form] = Form.useForm();
    useMemo( () => {}, [handleAction]);

    return (
        <Modal
            visible={show} 
            onOk={() => {
                form.validateFields()
                .then( async (values) => {
                    await api.post("/send-mail", values)
                    .then( async (response: any) => {
                        
                    })
                    .catch( (err) => {

                    });

                    console.log(values);
                })
                .catch(info => {
                    console.log('Validate Failed:', info);
                });
            }}
            onCancel={handleAction}
        >

            <Form
                layout="vertical"
                name="register"
                form={form}
            >
                <Form.Item name="email" label="E-mail" className="group"
                    rules={[
                        { type: 'email', message: 'E-mail inválido' },
                        { required: true, message: 'Por favor, insira seu e-mail!' },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item name="title" label="Assunto" className="group">
                    <Input />
                </Form.Item>

                <Form.Item name="content" label="Mensagem" className="group"
                    rules={[
                        { required: true, message: 'Por favor, insira uma mensagem!' },
                    ]}>
                    <Input.TextArea
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                </Form.Item>

            </Form>
        </Modal>
    )
};

export default FormEmail;