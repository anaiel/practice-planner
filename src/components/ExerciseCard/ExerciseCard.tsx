import Exercise from 'models/Exercise';

type Props = Exercise;

const ExerciseCard = ({ name }: Props) => {
    return <div>{name}</div>;
};

export default ExerciseCard;
