import { Input, Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader, Logo } from '../components/UI';
import '../styles/auth-employee.scss';

const mockEmployee = {
    login: 'bank',
    password: 'bank',
};

const AuthEmployee = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleLogin = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            if (
                login === mockEmployee.login &&
                password === mockEmployee.password
            ) {
                setTimeout(() => {
                    navigate('/profileEmployee');
                }, 800);
            } else {
                message.error('Неверный логин или пароль');
            }
        }, 800);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='auth-employee'>
            {loading && <Loader />}
            <div className='auth-employee__logo'>
                <Logo height={80} width={40} />
            </div>
            <div className='auth-employee__card'>
                <h2
                    style={{
                        textAlign: 'center',
                        marginBottom: 30,
                        color: '#1a1a1a',
                    }}
                >
                    Вход для сотрудников
                </h2>

                <Input
                    className='auth-employee__input'
                    size='large'
                    placeholder='Логин'
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    style={{ marginBottom: 16, borderRadius: 8, padding: 16 }}
                />

                <Input.Password
                    className='auth-employee__input'
                    size='large'
                    placeholder='Пароль'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onPressEnter={handleLogin}
                    style={{ marginBottom: 24, borderRadius: 8, padding: 16 }}
                />

                <Button
                    className={'auth-employee__button'}
                    type='primary'
                    size='large'
                    block
                    disabled={!login || !password}
                    loading={loading}
                    onClick={handleLogin}
                >
                    Вперед
                </Button>
                <p className={'auth-employee__info'}>
                    <svg
                        role='img'
                        focusable='false'
                        fill='currentColor'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                    >
                        <path
                            d='M7.167 2.795a1.015 1.015 0 00-1.542.132L4.406 4.629A4.833 4.833 0 003.5 7.45c.003.808.213 1.621.65 2.358 2.77 4.664 5.411 7.252 10.03 10.028 1.648.99 3.692.84 5.205-.244l1.688-1.21c.51-.367.574-1.102.132-1.543l-2.873-2.875a1.012 1.012 0 00-1.24-.149l-2.383 1.925-6.447-6.446L10.19 6.91c.241-.4.18-.91-.148-1.24L7.167 2.796z'
                            fillRule='evenodd'
                            clipRule='evenodd'
                        />
                    </svg>
                    <span>По России и за границей: +7 495 788 88 78</span>
                </p>
            </div>
        </div>
    );
};

export default AuthEmployee;
