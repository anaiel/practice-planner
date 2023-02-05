import { DOMAttributes, FocusableElement } from '@react-types/shared';
import { clsx } from 'clsx';
import { LabelHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import styles from './InputWrapper.module.css';

type Props = PropsWithChildren<{
    label: ReactNode;
    labelProps:
        | LabelHTMLAttributes<HTMLLabelElement>
        | DOMAttributes<FocusableElement>;
}>;

const InputWrapper = ({ label, labelProps, children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <label
                {...labelProps}
                className={clsx(styles.label, labelProps.className)}
            >
                {label}
            </label>

            {children}

            <div className={styles.border} />
        </div>
    );
};

export default InputWrapper;
