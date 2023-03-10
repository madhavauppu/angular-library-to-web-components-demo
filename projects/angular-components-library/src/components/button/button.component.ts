import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'lib-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
