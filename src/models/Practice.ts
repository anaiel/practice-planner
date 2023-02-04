import { ExerciseBlock } from './Exercise';

type Practice = {
    id: string;
    duration?: number;
    exercises: ExerciseBlock[];
};

export default Practice;
