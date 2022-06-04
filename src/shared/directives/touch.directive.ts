import {AfterViewInit, Directive, ElementRef, EventEmitter, NgModule, OnDestroy, Output} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';

@Directive({
    selector: '[sr-touch]'
})
export class TouchDirective implements OnDestroy, AfterViewInit {

    @Output()
    swipeLeft: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    swipeRight: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    swipeUp: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    swipeDown: EventEmitter<any> = new EventEmitter<any>();

    touchStartPos: { x: number, y: number, timestamp: number } | undefined;

    touchStart$: Subscription | undefined;
    touchEnd$: Subscription | undefined;

    constructor(
        private elRef: ElementRef
    ) {
    }

    ngOnDestroy() {
        this.touchStart$?.unsubscribe();
        this.touchEnd$?.unsubscribe();
    }

    ngAfterViewInit() {
        this.touchStart$ = fromEvent(this.elRef.nativeElement, 'touchstart').subscribe((event: any) => {
            if (!event || !event.touches || !event.touches.item(0)) return;
            const touch = event.touches.item(0);
            if (touch) {
                this.touchStartPos = {
                    x: touch.clientX,
                    y: touch.clientY,
                    timestamp: new Date().getTime()
                };
            }
        });

        this.touchEnd$ = fromEvent(this.elRef.nativeElement, 'touchend').subscribe((event: any) => {
            if (!event || !event.changedTouches || !event.changedTouches.item(0)) return;
            const touch = event.changedTouches.item(0);
            if (touch && this.touchStartPos) {
                const xDiff = this.touchStartPos.x - touch.clientX;
                const yDiff = this.touchStartPos.y - touch.clientY;
                const timeDiff = new Date().getTime() - this.touchStartPos.timestamp;
                const absXDiff = Math.abs(xDiff);
                const absYDiff = Math.abs(yDiff);
                if (absXDiff > 50 && timeDiff < absXDiff * 2.5 && absXDiff > absYDiff) {
                    if (xDiff < 0) {
                        this.swipeRight.emit();
                        return;
                    } else if (xDiff > 0) {
                        this.swipeLeft.emit();
                        return;
                    }
                }
                if (absYDiff > 50 && timeDiff < absYDiff * 3 && absYDiff > absXDiff) {
                    if (yDiff < 0) {
                        this.swipeDown.emit();
                        return;
                    } else if (yDiff > 0) {
                        this.swipeUp.emit();
                        return;
                    }
                }
            }
            this.touchStartPos = undefined;
        })
    }

}

@NgModule({
    declarations: [TouchDirective],
    exports: [TouchDirective]
})
export class TouchModule {
}
