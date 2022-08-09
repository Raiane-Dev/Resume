import { Modal, Form, Input } from "antd";


const FormEmail = ({show, handleAction}: any) => {
    
    const [form] = Form.useForm();

    return (
        <Modal
            visible={show} 
            onOk={() => {
                form
                .validateFields()
                .then(values => {
                    // onCreate(values);
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
                    <Input
                        className="pattern"
                    />
                </Form.Item>

            </Form>
        </Modal>
    )
};

export default FormEmail;