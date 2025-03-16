import { Input, Form, Button } from 'antd'
import axios from 'axios'

function Register(){
    const [form] = Form.useForm()

    const onFinish = async (values)=>{
        try{
            const response = await axios.post("http://localhost:5000/register",{
                firstName:values.firstName,
                lastName:values.lastName,
                email:values.email,
                password:values.password
            })
            console.log(response)
            alert("Kayıt başarılı")
        }
        catch(error){
            console.error("Buraya geldi")
            if(error.response.status === 400){
                alert("Kullanıcı zaten mevcut")
            }
        }
    }

    return(
        <Form
        form={form}
        name="userForm"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        >
        <Form.Item
            label="Ad"
            name="firstName"
            rules={[{ required: true, message: "Lütfen adınızı girin!" }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Soyad"
            name="lastName"
            rules={[{ required: true, message: "Lütfen soyadınızı girin!" }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="E-posta"
            name="email"
            rules={[
            { required: true, message: "Lütfen e-posta adresinizi girin!" },
            { type: "email", message: "Geçerli bir e-posta girin!" },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Şifre"
            name="password"
            rules={[
            { required: true, message: "Lütfen şifrenizi girin!" },
            { min: 6, message: "Şifre en az 6 karakter olmalı!" },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
            Kaydol
            </Button>
        </Form.Item>
        </Form>
    )
}

export default Register