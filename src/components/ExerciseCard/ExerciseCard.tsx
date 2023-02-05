import Exercise from 'models/Exercise';
import { Fragment } from 'react';
import { VisuallyHidden } from 'react-aria';

import styles from './ExerciseCard.module.css';

type Props = Exercise & {
    onClick?: () => void;
    /** @default "Select exercise" */
    clickLabel?: string;
    'data-testid'?: string;
};

const ExerciseCard = ({
    name,
    nbPlayers,
    description,
    equipment,
    onClick,
    duration,
    clickLabel = 'Select exercise',
    ...props
}: Props) => {
    const quickInfo: string[] = [];
    if (nbPlayers)
        quickInfo.push(`${nbPlayers} player${nbPlayers > 1 ? 's' : ''}`);
    if (equipment) quickInfo.push(equipment);

    return (
        <li {...props} className={styles.wrapper}>
            <header>
                <div className={styles.titleLine}>
                    <div className={styles.name}>{name}</div>
                    <div>{duration}min</div>
                </div>
                {quickInfo.length > 0 && (
                    <div className={styles.quickInfo}>
                        {quickInfo.map((item, index) => (
                            <Fragment key={item}>
                                <span>{item}</span>
                                {index !== quickInfo.length - 1 && ' • '}
                            </Fragment>
                        ))}
                    </div>
                )}
            </header>

            <p className={styles.description}>{description}</p>

            {onClick && (
                <button className={styles.button} onClick={onClick}>
                    <VisuallyHidden>{clickLabel}</VisuallyHidden>
                </button>
            )}
        </li>
    );
};

export default ExerciseCard;
