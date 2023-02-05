import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

import styles from './BuilderSection.module.css';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    title?: string;
    contentClass?: string;
    focus?: boolean;
};

const BuilderSection = ({
    title,
    focus = false,
    children,
    className,
    contentClass,
    ...props
}: PropsWithChildren<Props>) => {
    return (
        <section
            {...props}
            className={clsx(
                styles.wrapper,
                focus && styles.focusedSection,
                className
            )}
        >
            {title && <h2>{title}</h2>}
            <div className={clsx(contentClass, styles.main)}>{children}</div>
        </section>
    );
};

export default BuilderSection;
