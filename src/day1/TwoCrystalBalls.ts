export default function two_crystal_balls(breaks: boolean[]): number {
    //
    let justAmount = Math.floor(Math.sqrt(breaks.length));
    let index = justAmount;
    for (; index < breaks.length; index += justAmount) {
        if (breaks[index]) {
            break;
        }
    }
    index -= justAmount;
    for (let j = 0; j < justAmount && index < breaks.length; j++, index++) {
        if (breaks[index]) return index;
    }
    return -1;
}
