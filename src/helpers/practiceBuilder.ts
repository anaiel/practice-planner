import {
    DEFAULT_EXERCISE_BLOCK_NAME,
    DEFAULT_EXERCISE_DURATION,
    DEFAULT_EXERCISE_NAME,
} from 'const/exercise';
import Exercise, { ExerciseBlock } from 'models/Exercise';
import Practice from 'models/Practice';
import { v4 as uuid } from 'uuid';

export const createNewPractice = (): Practice => {
    return {
        id: uuid(),
        exercises: [],
    };
};

export const createNewExercise = (): Exercise => {
    return {
        id: uuid(),
        name: DEFAULT_EXERCISE_NAME,
        duration: DEFAULT_EXERCISE_DURATION,
    };
};

export const addExerciseToBlock = (
    exercise: Exercise,
    blockList: ExerciseBlock[]
): ExerciseBlock[] => {
    if (blockList.length === 0)
        return [
            {
                id: uuid(),
                name: DEFAULT_EXERCISE_BLOCK_NAME,
                exercises: [exercise],
            },
        ];
    const previousBlocks = blockList.slice(0, -1);
    const lastBlock = blockList[blockList.length - 1];
    return [
        ...previousBlocks,
        { ...lastBlock, exercises: [...lastBlock.exercises, exercise] },
    ];
};
