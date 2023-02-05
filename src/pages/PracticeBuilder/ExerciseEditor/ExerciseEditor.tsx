import BuilderSection from 'components/BuilderSection';
import Button from 'components/Button';
import NumberInput from 'components/NumberInput/NumberInput';
import TextAreaInput from 'components/TextAreaInput';
import TextInput from 'components/TextInput';
import { useAtom, useSetAtom } from 'jotai';
import Exercise from 'models/Exercise';
import { useEffect, useRef } from 'react';
import { addExerciseAtom } from 'stores/practiceBuilder/currentPractice';
import { handleExerciseFormAtom } from 'stores/practiceBuilder/practiseBuilder';

import styles from './ExerciseEditor.module.css';

const ExerciseEditor = () => {
    const [{ currentExercise, canSubmit }, handler] = useAtom(
        handleExerciseFormAtom
    );
    const addExercise = useSetAtom(addExerciseAtom);
    const handleSubmit = (exercise: Exercise) => {
        addExercise(exercise);
    };

    // Focus the first field if the exercise id changes (a new exercise was
    // selected)
    const idRef = useRef(currentExercise?.id);
    const firstInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (idRef.current === currentExercise?.id) return;
        idRef.current = currentExercise?.id;
        firstInputRef.current?.focus();
    }, [currentExercise]);

    return (
        <BuilderSection title="Current exercise" data-testid="current-exercise">
            {currentExercise && (
                <form className={styles.form}>
                    <div className={styles.formContent}>
                        <TextInput
                            ref={firstInputRef}
                            id="name"
                            type="text"
                            label="Name"
                            value={currentExercise.name}
                            onChange={(value) =>
                                handler({
                                    field: 'name',
                                    value,
                                })
                            }
                        />

                        <div className={styles.numberWidgetBlock}>
                            <NumberInput
                                label="Number of players"
                                value={currentExercise.nbPlayers ?? 0}
                                onChange={(newValue) =>
                                    handler({
                                        field: 'nbPlayers',
                                        value: newValue,
                                    })
                                }
                                minValue={0}
                            />

                            <NumberInput
                                label="Duration"
                                value={currentExercise.duration}
                                onChange={(newValue) =>
                                    handler({
                                        field: 'duration',
                                        value: newValue,
                                    })
                                }
                                step={5}
                                minValue={0}
                            />
                        </div>

                        <TextInput
                            type="text"
                            label="Players type"
                            value={currentExercise.playersType ?? ''}
                            onChange={(value) =>
                                handler({
                                    field: 'playersType',
                                    value,
                                })
                            }
                        />

                        <TextInput
                            label="Equipment"
                            type="text"
                            value={currentExercise.equipment ?? ''}
                            onChange={(value) =>
                                handler({
                                    field: 'equipment',
                                    value,
                                })
                            }
                        />

                        <TextAreaInput
                            label="Description"
                            id="description"
                            value={currentExercise.description ?? ''}
                            onChange={(value) =>
                                handler({
                                    field: 'description',
                                    value,
                                })
                            }
                        />
                    </div>

                    {canSubmit && (
                        <Button
                            type="submit"
                            onPress={() => {
                                handleSubmit(currentExercise);
                            }}
                        >
                            Add exercise
                        </Button>
                    )}
                </form>
            )}
        </BuilderSection>
    );
};

export default ExerciseEditor;
