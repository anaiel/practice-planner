import Exercise from 'models/Exercise';
import { VisuallyHidden } from 'react-aria';

import styles from './ExerciseCard.module.css';

type Props = Exercise & {
    onClick?: () => void;
    /** @default "Select exercise" */
    clickLabel?: string;
};

const ExerciseCard = ({
    name,
    onClick,
    clickLabel = 'Select exercise',
}: Props) => {
    return (
        <div className={styles.wrapper}>
            <div>{name}</div>
            {onClick && (
                <button className={styles.button} onClick={onClick}>
                    <VisuallyHidden>{clickLabel}</VisuallyHidden>
                </button>
            )}
        </div>
    );
};

export default ExerciseCard;
