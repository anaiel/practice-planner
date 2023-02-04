import BuilderSection from 'components/BuilderSection';
import { useAtom } from 'jotai';
import currentExerciseAtom from 'stores/practiceBuilder/currentExercise';

const CurrentExercise = () => {
    const [currentExercise, setCurrentExercise] = useAtom(currentExerciseAtom);

    return (
        <BuilderSection title="Current exercise">
            {currentExercise && (
                <>
                    <label htmlFor="name">Name:</label>
                    <input
                        value={currentExercise?.name}
                        onChange={(e) =>
                            setCurrentExercise(
                                (curr) =>
                                    curr && { ...curr, name: e.target.value }
                            )
                        }
                    />
                </>
            )}
        </BuilderSection>
    );
};

export default CurrentExercise;
