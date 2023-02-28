import { FC, useState } from 'react';
import { LoginDataType } from '../../types';
import Layout from '../../components/Layout/Layout';
import { Container, LoginBox } from './style';

const Login: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        const loginData: LoginDataType = {
            email: email,
            password: password,
        };
        console.log(loginData);
    };

    return (
        <Layout>
            <Container>
                <LoginBox>
                    <label>
                        <span>&nbsp;Email&nbsp;</span>
                        <br />
                        <input
                            value={email}
                            type='text'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        <span>&nbsp;Password&nbsp;</span>
                        <br />
                        <input
                            value={password}
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <button onClick={() => handleLogin}>Login</button>
                </LoginBox>
            </Container>
        </Layout>
    );
};

export default Login;
