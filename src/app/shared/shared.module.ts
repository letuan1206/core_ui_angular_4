import { ImagePreviewDirective } from './../directives/image-preview.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ImagePreviewDirective,
    ],
    exports: [
        ImagePreviewDirective,
    ]
})
export class SharedProsekModule { }
