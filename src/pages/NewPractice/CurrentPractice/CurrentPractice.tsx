import BuilderSection from 'components/BuilderSection';
import ExerciseCard from 'components/ExerciseCard';
import ExerciseBlock from 'components/ExerciseBlock';
import { useAtomValue, useSetAtom } from 'jotai';
import currentPracticeAtom from 'stores/practiceBuilder/currentPractice';
import currentExerciseAtom from 'stores/practiceBuilder/currentExercise';
import { createNewExercise } from 'helpers/practiceBuilder';
import Exercise from 'models/Exercise';
import { VisuallyHidden } from 'react-aria';

import styles from './CurrentPractice.module.css';

const CurrentPractice = () => {
    const currentPractice = useAtomValue(currentPracticeAtom);

    const setCurrentExercise = useSetAtom(currentExerciseAtom);
    const newExerciseHandler = () => {
        setCurrentExercise(createNewExercise());
    };
    const selectExerciseHandler = (exercise: Exercise) => {
        setCurrentExercise(exercise);
    };

    return (
        <BuilderSection
            title="Current practice"
            contentClass={styles.wrapper}
            focus
        >
            <div className={styles.practiceTimeline}>
                {currentPractice.exercises.map((exerciseBlock) => (
                    <ExerciseBlock key={exerciseBlock.id}>
                        {exerciseBlock.exercises.map((exercise) => (
                            <ExerciseCard
                                key={exercise.id}
                                {...exercise}
                                onClick={() => selectExerciseHandler(exercise)}
                                clickLabel="Edit exercise"
                                data-testid={`current-practice-${exercise.id}`}
                            />
                        ))}
                    </ExerciseBlock>
                ))}
            </div>

            <button onClick={newExerciseHandler} className={styles.addButton}>
                <VisuallyHidden>Add exercise</VisuallyHidden>
                <span aria-hidden>+</span>
            </button>
            <div className={styles.placeholder} aria-hidden />
        </BuilderSection>
    );
};

export default CurrentPractice;
