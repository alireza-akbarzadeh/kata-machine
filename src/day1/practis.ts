type TNode<T> = {
    value: T;
    next?: TNode<T>;
};
class Queue<T> {
    private length: number;
    private next?: TNode<T>;
    private tail?: TNode<T>;

    queus(item): void {
        const node = { value };
    }
}
