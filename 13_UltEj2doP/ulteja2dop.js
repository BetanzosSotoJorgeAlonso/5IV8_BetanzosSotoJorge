function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        let current = cache;
        
        for (let i = 0; i < args.length - 1; i++) {
            if (!current.has(args[i])) {
                current.set(args[i], new Map());
            }
            current = current.get(args[i]);
        }
        
        const lastArg = args[args.length - 1];
        
        if (current.has(lastArg)) {
            return current.get(lastArg);
        }
        
        const result = fn(...args);
        current.set(lastArg, result);
        return result;
    }
}