import { clsx } from 'clsx';
import { NumberFieldStateOptions, useNumberFieldState } from 'react-stately';
import { useLocale, useNumberField } from 'react-aria';
import { useRef } from 'react';
import InputWrapper from 'components/InputWrapper';
import Button from 'components/Button';

import styles from './NumberInput.module.css';

type Props = Omit<NumberFieldStateOptions, 'locale'>;

/**
 * Warning : as per https://github.com/adobe/react-spectrum/issues/779 there is
 * an issue with strict mode and react-aria which causes a bug by which the
 * input reverts to its latest value. This works correctly without strict mode.
 * Tests were provided to describe the expected behaviour and prove it works.
 */
const NumberInput = (props: Props) => {
    const { locale } = useLocale();
    const state = useNumberFieldState({ ...props, locale });
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        labelProps,
        groupProps,
        inputProps,
        incrementButtonProps,
        decrementButtonProps,
    } = useNumberField(props, state, inputRef);

    return (
        <InputWrapper label={props.label} labelProps={labelProps}>
            <div
                {...groupProps}
                className={clsx(styles.group, groupProps.className)}
            >
                <Button
                    {...decrementButtonProps}
                    variant="unstyled"
                    type="button"
                >
                    -
                </Button>
                <input
                    {...inputProps}
                    className={clsx(inputProps.className, styles.input)}
                    ref={inputRef}
                />
                <Button
                    {...incrementButtonProps}
                    variant="unstyled"
                    type="button"
                >
                    +
                </Button>
            </div>
        </InputWrapper>
    );
};

export default NumberInput;
