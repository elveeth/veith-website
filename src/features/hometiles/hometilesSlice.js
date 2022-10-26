import { HOMETILES } from '../../app/shared/HOMETILES';

 export const selectAllHometiles = () => {
    return HOMETILES;
 };
    
export const selectRandomHometile = () => {
    return HOMETILES[Math.floor(HOMETILES.length * Math.random())];
};