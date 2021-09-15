import { TypedUseSelectorHook, useSelector } from 'react-redux';

import type { TRootState } from '../store';

/** Use throughout your app instead of plain `useSelector`. */
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
