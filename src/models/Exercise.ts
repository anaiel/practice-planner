type Exercise = {
    id: string;
    name: string;
    nbPlayers?: number;
    playersType?: string;
    duration: number;
    description?: string;
};
export default Exercise;

export type ExerciseBlock = {
    id: string;
    name: string;
    exercises: Exercise[];
    /** In minutes */
    duration?: number;
};
