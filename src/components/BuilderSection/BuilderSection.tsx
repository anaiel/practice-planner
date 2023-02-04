import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './BuilderSection.module.css';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    title?: string;
};

const BuilderSection = ({
    title,
    children,
    className,
    ...props
}: PropsWithChildren<Props>) => {
    return (
        <section {...props} className={clsx(className, styles.wrapper)}>
            {title && <h2>{title}</h2>}
            <div className={styles.main}>{children}</div>
        </section>
    );
};

export default BuilderSection;
