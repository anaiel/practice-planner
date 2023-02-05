import ExerciseEditor from './ExerciseEditor';
import PracticeOverview from './PracticeOverview';
import ExerciseFinder from './ExerciseFindex/index';

import styles from './PracticeBuilder.module.css';

const PracticeBuilder = () => {
    return (
        <div className={styles.wrapper}>
            <PracticeOverview />
            <ExerciseEditor />
            <ExerciseFinder />
        </div>
    );
};

export default PracticeBuilder;
