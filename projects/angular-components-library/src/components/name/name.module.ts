import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NameComponent} from './name.component';

@NgModule({
    declarations: [NameComponent],
    imports: [CommonModule],
    exports: [NameComponent],
})
export class NameModule {}
