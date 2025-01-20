import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {}

    getData() {
        console.log('Disk needs 20 watts for getting data')
        this.powerService.suplyPower(20, 'Disk')
        return 'get data from disk'
    }
}
