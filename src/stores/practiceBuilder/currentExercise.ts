import { atom } from 'jotai';
import Exercise from 'models/Exercise';

const currentExerciseAtom = atom<Exercise | undefined>(undefined);
export default currentExerciseAtom;

export const currentExerciseIdAtom = atom(
    (get) => get(currentExerciseAtom)?.id
);
