import BuilderSection from 'components/BuilderSection';
import ExerciseCard from 'components/ExerciseCard';
import ExerciseBlock from 'components/ExerciseBlock';
import { useAtom } from 'jotai';
import currentPracticeAtom from 'stores/practiceBuilder/currentPractice';
import currentExerciseAtom from 'stores/practiceBuilder/currentExercise';
import { createNewExercise } from 'helpers/practiceBuilder';

const CurrentPractice = () => {
    const [currentPractice] = useAtom(currentPracticeAtom);

    const [, setCurrentExercise] = useAtom(currentExerciseAtom);
    const newExerciseHandler = () => {
        setCurrentExercise(createNewExercise());
    };

    return (
        <BuilderSection title="Current practice">
            <div>
                {currentPractice.exercises.map((exerciseBlock) => (
                    <ExerciseBlock key={exerciseBlock.id}>
                        {exerciseBlock.exercises.map((exercise) => (
                            <ExerciseCard key={exercise.id} {...exercise} />
                        ))}
                    </ExerciseBlock>
                ))}
            </div>
            <button onClick={newExerciseHandler}>Add exercise</button>
        </BuilderSection>
    );
};

export default CurrentPractice;
