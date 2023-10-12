import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
    const handleSubmit = (values) => {
        console.log("Yayy",values);
    }

    const handleError = (error) => {
        console.log("Yeet",error);
    }
    return ( 
        <Form
            name="login"
            labelCol={{ span : 8 }}
            wrapperCol={{ span : 16 }}
            style={{ maxWidth : 600, marginTop: 20 }}
            initialValues={{ remember : true}}
            onFinish={handleSubmit}
            onFinishFailed={handleError}
            >
            <Form.Item 
                label="Username"   
                name="username"
                rules={[
                    {
                        required : true,
                        message : "Please enter your username"
                    }
                ]}>
                <Input/>
            </Form.Item>

            <Form.Item 
                label="Password"   
                name="password"
                
                rules={[
                    {
                        required : true,
                        message : "Please enter your password"
                    }
                ]}>
                <Input.Password autoComplete="on"/>
            </Form.Item>

            <Form.Item 
                name= "remember"
                valuePropName="checked"
                wrapperCol={{
                    offset : 8,
                    span : 16
                }}
                >
                <Checkbox onChange={(e) => console.log(e.target.checked)}>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
     );
}
 
export default Login;