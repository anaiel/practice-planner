import { AriaButtonProps, useButton } from 'react-aria';
import { useRef } from 'react';
import { clsx } from 'clsx';

import styles from './Button.module.css';

type Props = AriaButtonProps<'button'> & {
    variant?: 'primary' | 'unstyled';
};

const Button = ({ variant = 'primary', ...props }: Props) => {
    const ref = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, ref);

    return (
        <button
            {...buttonProps}
            className={clsx(styles[variant], buttonProps.className)}
            ref={ref}
        >
            {props.children}
        </button>
    );
};

export default Button;
