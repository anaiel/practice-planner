import { atom } from 'jotai';
import Exercise from 'models/Exercise';
import currentExerciseAtom from './currentExercise';
import { practiceExercisesAtom } from './currentPractice';

export const isCurrentExerciseInPractiseAtom = atom((get) => {
    const currentExercise = get(currentExerciseAtom);
    const currentPractiseExercises = get(practiceExercisesAtom);
    return currentPractiseExercises.some((block) =>
        block.exercises.some((ex) => ex.id === currentExercise?.id)
    );
});

type FieldUpdateAction<
    T extends keyof Omit<Exercise, 'id'> = keyof Omit<Exercise, 'id'>
> = {
    field: T;
    value: Exercise[T];
};
export const handleExerciseFormAtom = atom(
    (get) => ({
        currentExercise: get(currentExerciseAtom),
        canSubmit: !get(isCurrentExerciseInPractiseAtom),
    }),
    (get, set, { field, value }: FieldUpdateAction) => {
        const currentExercise = get(currentExerciseAtom);
        set(
            currentExerciseAtom,
            currentExercise && { ...currentExercise, [field]: value }
        );
        if (currentExercise) set(practiceExercisesAtom, currentExercise);
    }
);
