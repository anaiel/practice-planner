import BuilderSection from 'components/BuilderSection';
import NumberInputWidget from 'components/NumberInputWidget/NumberInputWidget';
import { useAtom, useSetAtom } from 'jotai';
import Exercise from 'models/Exercise';
import { handleExerciseFormAtom } from 'stores/practiceBuilder/currentExercise';
import { addExerciseAtom } from 'stores/practiceBuilder/currentPractice';

import styles from './CurrentExercise.module.css';

const CurrentExercise = () => {
    const [currentExercise, handler] = useAtom(handleExerciseFormAtom);
    const addExercise = useSetAtom(addExerciseAtom);
    const handleSubmit = (exercise: Exercise) => {
        addExercise(exercise);
    };

    return (
        <BuilderSection title="Current exercise">
            {currentExercise && (
                <form className={styles.form}>
                    <div className={styles.form}>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            value={currentExercise.name}
                            onChange={(e) =>
                                handler({
                                    field: 'name',
                                    value: e.target.value,
                                })
                            }
                        />

                        <label htmlFor="nbPlayers">Number of players:</label>
                        <NumberInputWidget
                            id="nbPlayers"
                            value={currentExercise.nbPlayers ?? 0}
                            onChange={(newValue) =>
                                handler({ field: 'nbPlayers', value: newValue })
                            }
                            min={0}
                        />

                        <label htmlFor="playersType">Players type:</label>
                        <input
                            type="text"
                            value={currentExercise.playersType}
                            onChange={(e) =>
                                handler({
                                    field: 'playersType',
                                    value: e.target.value,
                                })
                            }
                        />

                        <label htmlFor="duration">Duration:</label>
                        <NumberInputWidget
                            id="duration"
                            value={currentExercise.duration}
                            onChange={(newValue) =>
                                handler({ field: 'duration', value: newValue })
                            }
                            increment={5}
                            min={0}
                        />

                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={currentExercise.description}
                            onChange={(e) =>
                                handler({
                                    field: 'description',
                                    value: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit(currentExercise);
                        }}
                    >
                        Add exercise
                    </button>
                </form>
            )}
        </BuilderSection>
    );
};

export default CurrentExercise;
