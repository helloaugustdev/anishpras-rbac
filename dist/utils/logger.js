/**
 * @license
 * @anishpras/rbac v2.1.1
 * Copyright (c) 2026 Anish Prashun <anishprashun118@gmail.com>
 * Licensed under the MIT License
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.silentLogger=exports.defaultLogger=void 0,exports.defaultLogger={debug:(e,...o)=>{"development"===process.env.NODE_ENV&&console.debug(`[RABAC] ${e}`,...o)},info:(e,...o)=>{console.info(`[RABAC] ${e}`,...o)},warn:(e,...o)=>{console.warn(`[RABAC] ${e}`,...o)},error:(e,...o)=>{console.error(`[RABAC] ${e}`,...o)}},exports.silentLogger={debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}};