type Props = {
    id: string;
    value: number;
    onChange: (newValue: number) => void;
    min?: number;
    /** @default 1 */
    increment?: number;
};

const NumberInputWidget = ({
    id,
    value,
    onChange,
    min,
    increment = 1,
}: Props) => {
    return (
        <div>
            <button
                type="button"
                onClick={() =>
                    onChange(
                        min
                            ? Math.max(min, value - increment)
                            : value - increment
                    )
                }
            >
                -
            </button>
            <input
                id={id}
                type="number"
                value={value}
                onChange={(e) => onChange(+e.target.value)}
            />
            <button type="button" onClick={() => onChange(value + increment)}>
                +
            </button>
        </div>
    );
};

export default NumberInputWidget;
