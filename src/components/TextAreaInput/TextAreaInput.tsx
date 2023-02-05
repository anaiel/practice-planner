import InputWrapper from 'components/InputWrapper';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { AriaTextFieldOptions, useTextField } from 'react-aria';

type Props = AriaTextFieldOptions<'textarea'>;

const TextField = forwardRef<HTMLInputElement, Props>(function TextField(
    props: Props,
    ref
) {
    const innerRef = useRef<HTMLTextAreaElement>(null);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
        useTextField(props, innerRef);

    useImperativeHandle<
        Pick<HTMLInputElement, 'focus'>,
        Pick<HTMLInputElement, 'focus'>
    >(ref, () => ({
        focus: () => {
            innerRef.current?.focus();
        },
    }));

    return (
        <InputWrapper label={props.label} labelProps={labelProps}>
            <textarea
                {...inputProps}
                style={{ resize: 'vertical' }}
                ref={innerRef}
            />

            {props.description && (
                <div {...descriptionProps}>{props.description}</div>
            )}
            {props.errorMessage && (
                <div {...errorMessageProps}>{props.errorMessage}</div>
            )}
        </InputWrapper>
    );
});

export default TextField;
