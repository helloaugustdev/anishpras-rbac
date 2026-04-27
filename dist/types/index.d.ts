export type Permission = "CREATE" | "READ" | "UPDATE" | "DELETE" | "VIEW" | string;
export type Resource = string;
export type Role = string;
export interface ResourcePermissions {
    [resource: Resource]: Permission[];
}
export interface RoleDefinition {
    description?: string;
    permissions: ResourcePermissions;
}
export interface RBACConfig {
    roles: {
        [role: Role]: RoleDefinition;
    };
    defaultRole?: Role;
}
export interface Policy {
    role: Role;
    resource: Resource;
    permission: Permission;
}
export interface PolicyResult {
    allowed: boolean;
    reason?: string;
}
export interface CacheOptions {
    enabled: boolean;
    maxSize?: number;
    ttl?: number;
}
export interface RBACOptions {
    cache?: CacheOptions;
    strict?: boolean;
    logger?: {
        debug: (message: string, ...args: unknown[]) => void;
        info: (message: string, ...args: unknown[]) => void;
        warn: (message: string, ...args: unknown[]) => void;
        error: (message: string, ...args: unknown[]) => void;
    };
}
export type PermissionCheck = (role: Role, resource: Resource, permission: Permission) => boolean | Promise<boolean>;
export interface RoleHierarchy {
    [role: Role]: Role[];
}
export interface User {
    id: string | number;
    roles: Role[];
    [key: string]: unknown;
}
