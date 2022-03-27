export const randomNumber = (a = 0, b = 1) => Math.random() * (b - a) + a;
export const randomInteger = (a, b) => Math.round(randomNumber(a, b));