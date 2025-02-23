export default function bs_list(haystack: number[], needle: number): boolean {
    let lower = 0;
    let higher = haystack.length;

    do {
        const middle = Math.floor(lower + (higher - lower) / 2);
        const value = haystack[middle];
        if (value === needle) return true;
        else if (value > needle) {
            // lower half
            higher = middle;
        }
        // upper half
        else lower = middle + 1;
    } while (lower < higher);
    return false;
}
