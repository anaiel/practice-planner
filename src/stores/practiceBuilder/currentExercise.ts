import { atom } from 'jotai';
import Exercise from 'models/Exercise';

const currentExerciseAtom = atom<Exercise | undefined>(undefined);
export default currentExerciseAtom;

type FieldUpdateAction<
    T extends keyof Omit<Exercise, 'id'> = keyof Omit<Exercise, 'id'>
> = {
    field: T;
    value: Exercise[T];
};
export const handleExerciseFormAtom = atom(
    (get) => get(currentExerciseAtom),
    (_, set, { field, value }: FieldUpdateAction) => {
        set(currentExerciseAtom, (curr) => curr && { ...curr, [field]: value });
    }
);
