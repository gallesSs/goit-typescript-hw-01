function showMessage(message: string): void {
    console.log(message);
}
showMessage("I love TypeScript");

function calc(num1: number, num2: number): number {
    return num1 + num2;
}
calc(5, 5);

function customError(): never {
    throw new Error("Error");
}
console.log(customError);