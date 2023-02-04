import { atom } from 'jotai';
import Practice from 'models/Practice';
import { createNewPractice } from 'helpers/practiceBuilder';

const currentPracticeAtom = atom<Practice>(createNewPractice());
export default currentPracticeAtom;
