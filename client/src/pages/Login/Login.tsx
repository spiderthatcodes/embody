import { FC, useState } from 'react';
import Layout from '../../components/Layout/Layout';

const Login: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        const loginData = {
            email: email,
            password: password
        }
        console.log(loginData);
    }

    return (
        <Layout>
            <p>Email</p>
            <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} required />
            <p>Password</p>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} required />
            <button onClick={() => handleLogin}>Login</button>
        </Layout>
    );
};

export default Login;
