import { OPEN, CLOSE } from './cartTypes';

export const openCart = () => {
    return {
        type: OPEN,
    };
};

export const closeCart = () => {
    return {
        type: CLOSE,
    };
};