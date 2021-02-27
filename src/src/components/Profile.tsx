import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ContextChallenge';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/acszcz.png" alt="Ana" />
            <div>
                <strong>Ana Carolina</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                    </p>
            </div>
        </div>
        );
}