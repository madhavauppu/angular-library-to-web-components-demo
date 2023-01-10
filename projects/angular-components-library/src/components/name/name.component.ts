import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'lib-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameComponent {}
