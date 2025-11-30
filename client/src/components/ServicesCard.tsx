import React from 'react';
import '../styles/service-card.scss';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    link: string;
    levelRequired?: number;
    badge?: string;
    badgeColor?: 'gold';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    icon,
    link,
    badge,
    badgeColor = 'gold',
}) => {
    const badgeClass = `service-card__badge service-card__badge--${badgeColor}`;

    return (
        <div className='service-card'>
            {badge && <span className={badgeClass}>{badge}</span>}

            <div className='service-card__icon'>
                <img src={icon} alt={title} />
            </div>
            <div className='service-card__text'>
                <h3 className='service-card__title'>{title}</h3>
                <p className='service-card__description'>{description}</p>

                <a
                    href={link}
                    className='service-card__button'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Оформить
                    <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
                        <path
                            d='M7 17L17 7M17 7H9M17 7V15'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;
