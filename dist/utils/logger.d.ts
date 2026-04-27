export declare const defaultLogger: {
    debug: (message: string, ...args: unknown[]) => void;
    info: (message: string, ...args: unknown[]) => void;
    warn: (message: string, ...args: unknown[]) => void;
    error: (message: string, ...args: unknown[]) => void;
};
export declare const silentLogger: {
    debug: () => void;
    info: () => void;
    warn: () => void;
    error: () => void;
};
