// @ts-ignore
import * as Hammer from 'hammerjs';
import {HammerGestureConfig} from '@angular/platform-browser';
import {Injectable} from '@angular/core';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
    override overrides = {
        swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
        pinch: { enable: false },
        rotate: { enable: false },
        pan: { enable: false }
    };
}
