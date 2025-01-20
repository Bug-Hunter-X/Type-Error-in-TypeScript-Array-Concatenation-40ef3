# Type Error in TypeScript Array Concatenation
This bug demonstrates a type error that can occur in TypeScript when concatenating arrays. The `combine` function is supposed to concatenate two number arrays, but if either input array contains a string, TypeScript will throw a type error.

## Bug
The provided `combine` function uses `concat` to combine two number arrays. However, if either input array contains non-number elements (e.g., strings), `concat` will successfully perform concatenation, but the TypeScript compiler will raise a type error because the resulting array may contain non-number elements.

## Solution
The solution involves using type guards to ensure that all elements in the input arrays are indeed numbers before concatenation. This can be achieved using a helper function called `isNumberArray`.

## How to reproduce
1. Save the code in a file named `bug.ts`.
2. Compile the code with `tsc bug.ts`. You should see a type error. 
3. Examine the solution provided in `bugSolution.ts` to see how to fix this.
