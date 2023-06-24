import { configureStore } from '@reduxjs/toolkit';
import reducer1 from "./reducer";

export const store = configureStore({reducer: reducer1});
