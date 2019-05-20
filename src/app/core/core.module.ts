import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services';
import { AuthenticationGuard } from './guards';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                AuthenticationService,
                AuthenticationGuard
            ]
        }
    }
    static forChild(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        }
    }
}
