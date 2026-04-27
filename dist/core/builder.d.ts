import type { Permission, RBACConfig, Resource, Role } from "../types";
export declare class RBACBuilder {
    private config;
    getConfigRef(): RBACConfig;
    role(name: Role, description?: string): RoleBuilder;
    setDefaultRole(role: Role): RBACBuilder;
    extendRole(role: Role, baseRole: Role): RBACBuilder;
    build(): RBACConfig;
}
export declare class RoleBuilder {
    private builder;
    private role;
    private resource;
    constructor(builder: RBACBuilder, role: Role, description?: string);
    forResource(resource: Resource): ResourceBuilder;
    grantFullAccess(resource: Resource): RoleBuilder;
    grantReadOnly(resource: Resource): RoleBuilder;
    done(): RBACBuilder;
}
export declare class ResourceBuilder {
    private builder;
    private role;
    private resource;
    constructor(builder: RBACBuilder, role: Role, resource: Resource);
    grant(...permissions: Permission[]): ResourceBuilder;
    grantAll(): ResourceBuilder;
    grantReadOnly(): ResourceBuilder;
    forResource(resource: Resource): ResourceBuilder;
    and(): RoleBuilder;
    done(): RBACBuilder;
}
