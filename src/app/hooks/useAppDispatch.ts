import { useDispatch } from 'react-redux';

import type { TAppDispatch } from '../store';

/** Use throughout your app instead of plain `useDispatch`. */
export const useAppDispatch = () => useDispatch<TAppDispatch>();
