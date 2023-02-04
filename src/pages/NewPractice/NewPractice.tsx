import CurrentExercise from './CurrentExercise';
import CurrentPractice from './CurrentPractice';
import ExerciseFinder from './ExerciseFindex';

import styles from './NewPractice.module.css';

const NewPractice = () => {
    return (
        <div className={styles.wrapper}>
            <CurrentPractice />
            <CurrentExercise />
            <ExerciseFinder />
        </div>
    );
};

export default NewPractice;
