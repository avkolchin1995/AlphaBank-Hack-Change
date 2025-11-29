import { useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/profile-employee.scss';
import { Loader } from '../components/UI';

const ProfileEmployee = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [series, setSeries] = useState('');
    const [number, setNumber] = useState('');

    const mockClient = {
        passportSeries: '1234',
        passportNumber: '567890',
    };

    const handlePassportSearch = () => {
        if (
            series === mockClient.passportSeries &&
            number === mockClient.passportNumber
        ) {
            setLoading(true);
            setTimeout(() => navigate('/client-profile'), 800);
        } else {
            setLoading(true);
            setTimeout(() => setLoading(false), 800);
            message.error('Клиент не найден');
        }
    };

    const services = [
        { img: './icons/profile.svg', title: 'Профиль' },
        { img: './icons/payslip.svg', title: 'Расчетный лист' },
        { img: './icons/sick_leave.svg', title: 'Больничный' },
        { img: './icons/order_certificate.svg', title: 'Заказать справку' },
        { img: './icons/quarterly_goals.svg', title: 'Квартальные цели' },
        { img: './icons/coworking.svg', title: 'Коворкинг' },
        { img: './icons/plan_vacation.svg', title: 'Спланировать отпуск' },
        { img: './icons/client.svg', title: 'Перейти к обслуживанию клиента' },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='profile-employee container'>
            {loading && <Loader />}

            <div className='profile-employee__services'>
                <h2 className='profile-employee__services-title subtitle'>
                    Сервисы
                </h2>
                <ul className='profile-employee__services-list'>
                    {services.map((service, index) => (
                        <li
                            className='profile-employee__services-item'
                            key={index}
                        >
                            <img
                                className='profile-employee__services-img'
                                src={service.img}
                                alt={service.title}
                                width={40}
                                height={30}
                            />
                            {service.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='profile-employee__links'>
                <h2 className='profile-employee__links-title subtitle'>
                    Быстрые ссылки
                </h2>
                <ul className='profile-employee__links-list'>
                    <li className='profile-employee__links-item profile-employee__links-item--know'>
                        База знаний
                    </li>
                    <li className='profile-employee__links-item profile-employee__links-item--click'>
                        Альфа-Клик
                    </li>
                    <li className='profile-employee__links-item profile-employee__links-item--con'>
                        Confluence
                    </li>
                </ul>
            </div>

            <div className='profile-employee__work'>
                <h2 className='profile-employee__work-title'>
                    Идентифицировать клиента
                </h2>
                <div className='profile-employee__work-card'>
                    <Input
                        size='large'
                        placeholder='Серия паспорта'
                        value={series}
                        onChange={(e) => setSeries(e.target.value)}
                        className='profile-employee__input'
                        style={{
                            marginBottom: 16,
                            borderRadius: 8,
                            padding: 16,
                        }}
                    />
                    <Input
                        size='large'
                        placeholder='Номер паспорта'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className='profile-employee__input'
                        style={{
                            marginBottom: 24,
                            borderRadius: 8,
                            padding: 16,
                        }}
                    />

                    <Button
                        block
                        size='large'
                        className={'profile-employee__button'}
                        onClick={handlePassportSearch}
                        disabled={!series || !number}
                    >
                        Найти клиента
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileEmployee;
