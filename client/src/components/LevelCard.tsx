import '../styles/level-card.scss';

const LevelCard = ({ level, progress, missing }) => {
    return (
        <div className='level-progress-card'>
            <div className='level-progress-card__header'>
                Уровень {level} → {level + 1}
            </div>
            <div className='level-progress-card__bar'>
                <div
                    className='level-progress-card__fill'
                    style={{ width: `${progress}%` }}
                />
                <div className='level-progress-card__percent'>
                    {progress.toFixed(1)}%
                </div>
            </div>
            {level < 6 && (
                <div>
                    Не хватает{' '}
                    <span style={{ color: '#ff4d4f', fontWeight: 700 }}>
                        {' '}
                        {missing.toLocaleString('ru-RU')} ₽{' '}
                    </span>{' '}
                    для следующего уровня
                </div>
            )}{' '}
            {level === 6 && <div> Максимальный уровень достигнут! </div>}
        </div>
    );
};
export default LevelCard;
