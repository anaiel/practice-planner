import { render, screen, fireEvent } from '@testing-library/react';
import { createNewExercise, createNewPractice } from 'helpers/practiceBuilder';
import { createStore, Provider } from 'jotai';
import currentPracticeAtom from 'stores/practiceBuilder/currentPractice';
import { v4 as uuid } from 'uuid';
import NewPractice from './NewPractice';

const exerciseId = uuid();

beforeEach(() => {
    const practice = createNewPractice();
    practice.exercises = [
        {
            id: uuid(),
            name: 'Block',
            exercises: [
                { ...createNewExercise(), id: exerciseId, name: 'My exercise' },
            ],
        },
    ];
    const store = createStore();
    store.set(currentPracticeAtom, practice);
    render(
        <Provider store={store}>
            <NewPractice />
        </Provider>
    );
});

test('Clicking on an exercise in the practice timeline should open it in the exercise editor', () => {
    expect(screen.queryByText('Name')).toBeNull();
    const exercise = screen.getByText('Edit exercise');
    fireEvent.click(exercise);
    expect(screen.queryByText('Name')).not.toBeNull();
});

test('Changing the name in the exercise editor should update the practice timeline', async () => {
    const btn = screen.getByText('Edit exercise');
    fireEvent.click(btn);
    const exercise = screen.getByTestId(`current-practice-${exerciseId}`);
    expect(exercise).toHaveTextContent('My exercise');
    const nameInput = await screen.findByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'New name' } });
    expect(exercise).toHaveTextContent('New name');
});
