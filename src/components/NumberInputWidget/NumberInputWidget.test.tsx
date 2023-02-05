import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import NumberInputWidget from './NumberInputWidget';

const Test = () => {
    const [value, setValue] = useState(0);
    return <NumberInputWidget label="test" value={value} onChange={setValue} />;
};

test('The count should be updated when the user blurs the input', () => {
    render(<Test />);
    const input = screen.getByDisplayValue('0');
    fireEvent.change(input, { target: { value: '33' } });
    expect(input).toHaveValue('33');
    fireEvent.blur(input);
    expect(input).toHaveValue('33');
});

test('The count should be updated when the clicks the + button', () => {
    render(<Test />);
    const input = screen.getByDisplayValue('0');
    const button = screen.getByText('+');
    fireEvent.click(button);
    expect(input).toHaveValue('1');
});
