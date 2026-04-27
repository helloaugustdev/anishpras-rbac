import type { Permission, Policy, PolicyResult, RBACConfig, RBACOptions, Resource, Role, RoleHierarchy } from "../types";
export declare class RBACEngine {
    private config;
    private cache;
    private strict;
    private logger;
    private roleHierarchy;
    constructor(config: RBACConfig, options?: RBACOptions);
    private validateConfig;
    setRoleHierarchy(hierarchy: RoleHierarchy): void;
    private validateHierarchy;
    private detectCycle;
    updateConfig(config: RBACConfig): void;
    private deepCloneConfig;
    can(role: Role, resource: Resource, permission: Permission): boolean;
    private cacheResult;
    private checkPermission;
    private validateInput;
    userCan(userRoles: Role[], resource: Resource, permission: Permission): boolean;
    getPermissions(role: Role, resource: Resource): Permission[];
    getResources(role: Role): Resource[];
    evaluatePolicy(policy: Policy): PolicyResult;
    getRoles(): Role[];
    getConfig(): RBACConfig;
    getRoleHierarchy(): RoleHierarchy | undefined;
    getCacheStats(): {
        enabled: boolean;
        size?: number;
    };
    clearCache(): void;
}
