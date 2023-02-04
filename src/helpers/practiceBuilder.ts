import {
    DEFAULT_EXERCISE_DURATION,
    DEFAULT_EXERCISE_NAME,
} from 'const/exercise';
import Exercise from 'models/Exercise';
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
