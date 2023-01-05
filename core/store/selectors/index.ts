import {useAppSelector} from "@hooks/toolkit";

export const useMainSelector = () => useAppSelector(state => state.main);