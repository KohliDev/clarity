/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TABS_DIRECTIVES } from "./index";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TABS_DIRECTIVES
    ],
    exports: [
        TABS_DIRECTIVES
    ]
})
export class ClrTabsModule {}
