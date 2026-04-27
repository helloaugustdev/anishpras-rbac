export declare class PermissionCache {
    private readonly cache;
    private readonly maxSize;
    private readonly ttl;
    private version;
    private readonly secureSalt;
    constructor(maxSize?: number, ttl?: number);
    private createKey;
    private sanitizeInput;
    get(role: string, resource: string, permission: string): boolean | undefined;
    set(role: string, resource: string, permission: string, value: boolean): void;
    clear(): void;
    invalidateRole(role: string): void;
    invalidateResource(resource: string): void;
    size(): number;
    incrementVersion(): void;
}
