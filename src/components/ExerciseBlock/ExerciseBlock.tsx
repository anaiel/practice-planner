import { PropsWithChildren } from 'react';

import styles from './ExerciseBlock.module.css';

const ExerciseBlock = ({ children }: PropsWithChildren) => {
    return <ol className={styles.wrapper}>{children}</ol>;
};

export default ExerciseBlock;
