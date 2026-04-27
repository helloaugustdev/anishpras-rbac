import type { Permission, Policy, PolicyResult, RBACConfig, RBACOptions, Resource, Role, RoleDefinition, RoleHierarchy, User } from "../types";
import type { Middleware, NextFunction, Request, Response } from "../types/express";
export declare class RBACManager {
    private engine;
    private options;
    constructor(config: RBACConfig, options?: RBACOptions);
    can(role: Role, resource: Resource, permission: Permission): boolean;
    userCan(user: User | Role[] | null | undefined, resource: Resource, permission: Permission): boolean;
    setRoleHierarchy(hierarchy: RoleHierarchy): void;
    updateConfig(config: RBACConfig): void;
    addRole(role: Role, definition: RoleDefinition): void;
    removeRole(role: Role): void;
    private checkRoleHierarchyIntegrity;
    grant(role: Role, resource: Resource, permission: Permission | Permission[]): void;
    revoke(role: Role, resource: Resource, permission?: Permission | Permission[]): void;
    evaluatePolicy(policy: Policy): PolicyResult;
    getPermissions(role: Role, resource: Resource): Permission[];
    getResources(role: Role): Resource[];
    getRoles(): Role[];
    getConfig(): RBACConfig;
    clearCache(): void;
    getCacheStats(): {
        enabled: boolean;
        size?: number;
    };
    middleware(options: {
        getUserRoles: (req: Request) => Role[] | Promise<Role[]>;
        resource: Resource | ((req: Request) => Resource);
        permission: Permission | ((req: Request) => Permission);
        onDenied?: (req: Request, res: Response, next: NextFunction) => void;
        auditLog?: boolean;
    }): Middleware;
    private static denyAccess;
}
