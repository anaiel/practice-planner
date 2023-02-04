import Exercise from 'models/Exercise';
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
    onClick,
    clickLabel = 'Select exercise',
    ...props
}: Props) => {
    return (
        <li {...props} className={styles.wrapper}>
            <div className={styles.name}>{name}</div>
            {nbPlayers && (
                <div className={styles.quickInfo}>
                    {nbPlayers} player{nbPlayers > 1 && 's'}
                </div>
            )}
            <div>{description}</div>

            {onClick && (
                <button className={styles.button} onClick={onClick}>
                    <VisuallyHidden>{clickLabel}</VisuallyHidden>
                </button>
            )}
        </li>
    );
};

export default ExerciseCard;
