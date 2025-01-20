import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService) {}

    compute(a: number, b:number) {
        console.log('CPU needs 10 watts for counting')
        this.powerService.suplyPower(10, 'CPU')
        return a + b
    }
}
