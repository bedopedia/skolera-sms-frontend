import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatTooltipModule, MatSort, MatSortModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {NgSelectModule} from '@ng-select/ng-select';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { RouterModule } from '@angular/router';
import { CdkTableModule} from '@angular/cdk/table';

@NgModule({
    declarations: [
    ImageUploadComponent],
    imports: [
        FormsModule,
        HttpClientModule,
        CommonModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTooltipModule,
        MatTableModule,
        MatSortModule,
        NgSelectModule,
        HttpClientModule,
        ImageUploadComponent,
        RouterModule,
        CdkTableModule
    ],
    entryComponents: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ]
        }
    }
}
