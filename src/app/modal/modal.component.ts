import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    animations: [
        trigger('modal', [
            state('opening', style({
                opacity: '0',
                top: '0'
            })),
            state('visible', style({
                top: '0',
                opacity: '1'
            })),
            state('closing', style({
                opacity: '0',
                top: '0'
            })),
            state('hidden', style({
                opacity: '0',
                top: '-100vh'
            })),
            transition('opening <=> visible', animate(ModalComponent.duration)),
            transition('visible <=> closing', animate(ModalComponent.duration))
        ]),

        trigger('modal_content', [
            state('visible', style({
                marginTop: '0'
            })),
            state('hidden', style({
                marginTop: '-100%'
            })),
            transition('visible <=> hidden', animate(ModalComponent.duration))
        ]),

        trigger('modal_button', [
            state('hidden', style({
                visibility: 'visible',
            })),
            state('visible', style({
                visibility: 'hidden',
            }))
        ])
    ]
})
export class ModalComponent implements OnInit {

    isActive : string = 'hidden'
    isContentVisible : string = 'hidden'

    static duration : number = 200

    constructor() { }

    ngOnInit(): void {

    }

    modalContentClick(e: any) :void {
        e.stopPropagation()
    }

    openModal() :void {
        this.isActive = 'opening'
        setTimeout(() => this.isActive = 'visible', 0)
        setTimeout(() => this.isContentVisible = 'visible', 0)
    }

    closeModal() :void {
        this.isActive = 'closing'
        setTimeout(() => this.isContentVisible = 'hidden', 0)
        setTimeout(() => this.isActive = 'hidden', ModalComponent.duration)
    }

}
