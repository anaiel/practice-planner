import { atom } from 'jotai';
import Practice from 'models/Practice';
import { addExerciseToBlock, createNewPractice } from 'helpers/practiceBuilder';
import Exercise from 'models/Exercise';

const currentPracticeAtom = atom<Practice>(createNewPractice());
export default currentPracticeAtom;

export const addExerciseAtom = atom(null, (_, set, exercise: Exercise) => {
    set(currentPracticeAtom, (curr) => ({
        ...curr,
        exercises: addExerciseToBlock(exercise, curr.exercises),
    }));
});
