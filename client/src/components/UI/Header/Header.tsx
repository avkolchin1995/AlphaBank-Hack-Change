import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <nav className={styles.header}>
            <Logo width={40} height={60} />
            <ul className={styles.header__list}>
                <li className={styles.header__item}>
                    <Link to={'/'}>Контакты</Link>
                </li>
                <li className={styles.header__item}>
                    <Link to={'/'}>Все о работе</Link>
                </li>
                <li className={styles.header__item}>
                    <Link to={'/'}>Подразделения</Link>
                </li>
            </ul>

            <ul className={styles.header__userList}>
                <li className={styles.header__userItem}>
                    <img
                        className={styles.header__bell}
                        src={'./icons/notification.svg'}
                        width={30}
                        height={30}
                        alt={'icon'}
                    />
                </li>
                <li className={styles.header__userItem}>
                    <img
                        className={styles.header__userFace}
                        src={'./face.JPG'}
                        width={40}
                        height={40}
                        alt={'icon'}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Header;
