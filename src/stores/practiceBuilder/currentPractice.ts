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

export const practiceExercisesAtom = atom(
    (get) => get(currentPracticeAtom).exercises,
    (_, set, exercise: Exercise) => {
        set(currentPracticeAtom, (curr) => ({
            ...curr,
            exercises: curr.exercises.map((block) => ({
                ...block,
                exercises: block.exercises.map((ex) => {
                    if (ex.id === exercise.id) return exercise;
                    return ex;
                }),
            })),
        }));
    }
);
