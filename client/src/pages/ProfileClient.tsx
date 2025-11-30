import '../styles/profile-client.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching.ts';
import clientService from '../api/clientService.ts';
import { useEffect, useState } from 'react';
import { Button, message, Popover } from 'antd';
import type { Suggestion, SuggestionResponse } from '../types/income.ts';
import { Loader } from '../components/UI';
import { useIncomeAnimation } from '../hooks/useIncomeAnimation.ts';
import { useClientLevel } from '../hooks/useClientLevel.ts';
import LevelCard from '../components/LevelCard.tsx';
import CrownIcon from '../components/CrownIcon.tsx';
import ServiceCard from '../components/ServicesCard.tsx';

const ProfileClient = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { clientData, clientId } = location.state;

    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [loading, setLoading] = useState(true);
    const animatedIncome = useIncomeAnimation(clientData.income);
    const { level, min, max, progress, missing } = useClientLevel(
        clientData.income
    );

    const [_, error, getSuggestion] = useFetching(async (clientId: string) => {
        return await clientService.getClientSuggestions(clientId);
    });

    const loadSuggestions = async () => {
        try {
            const data: SuggestionResponse = await getSuggestion(clientId);
            setSuggestions(data.suggestions);
        } catch (e) {
            message.error('Предложения не загружены');
        }
    };

    const levelPopoverContent = () => {
        return LevelCard({ level, progress, missing });
    };

    useEffect(() => {
        loadSuggestions();

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='container profile-client'>
            {loading && <Loader />}
            <Button
                className='profile__navigation-button'
                onClick={() => navigate('/profileEmployee')}
            >
                Назад
            </Button>
            <div className='profile-client__info'>
                <div className='profile-client__photo-wrapper'>
                    <img
                        className='profile-client__img'
                        src={'https://placehold.jp/150x200.png'}
                        width={150}
                        height={200}
                        alt='Фото клиента'
                    />
                    <div className='profile-client__crown'>
                        <CrownIcon />
                        <span className='profile-client__crown-level'>
                            {level}
                        </span>
                    </div>
                </div>
                <div className='profile-client__text'>
                    <h2 className='profile-client__name'>
                        Искаков Роман Юрьевич
                    </h2>
                    <div className='profile-client__level' />
                    <p className='profile-client__data'>
                        {' '}
                        <span className={'subtitle-c'}>Дата рождения:</span>
                        09.08.2003
                    </p>
                    <p className='profile-client__address'>
                        <span className={'subtitle-c'}>Адрес регистрации:</span>
                        г. Нижнекамск, ул. Вигневкого, д.34
                    </p>
                    <p className='profile-client__number'>
                        <span className={'subtitle-c'}>Номер телефона:</span>
                        +79098183337
                    </p>
                    <Popover
                        content={levelPopoverContent}
                        trigger='click'
                        placement='bottom'
                    >
                        <p className='profile-client__level'>
                            <span className='subtitle-c'>Уровень: </span>{' '}
                            {level}
                        </p>
                    </Popover>
                </div>
            </div>
            <div className='profile-client__suggestions-wrapper'>
                <h2 className='profile-client__suggestions-title'>
                    Рекомендованные продукты
                </h2>
                <div className='profile-client__suggestions-grid'>
                    {suggestions.length > 0 ? (
                        suggestions.map((suggestion) => (
                            <ServiceCard
                                key={suggestion.link}
                                title={suggestion.title}
                                description={
                                    suggestion.description ||
                                    'Персональное предложение для вас'
                                }
                                icon={
                                    'https://alfabank.servicecdn.ru/site-upload/29/95/187/D_cc_322x355_1.png'
                                }
                                link={suggestion.link}
                            />
                        ))
                    ) : (
                        <div className='profile-client__no-suggestions'>
                            Подходящих предложений пока нет
                        </div>
                    )}
                </div>
            </div>
            <div className='profile-client__income-wrapper'>
                Прогнозируемый доход:{' '}
                <span className='profile-client__income'>
                    {animatedIncome.toFixed(2)} ₽
                </span>
            </div>
        </div>
    );
};

export default ProfileClient;
