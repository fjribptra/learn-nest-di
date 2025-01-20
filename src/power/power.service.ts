import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    suplyPower(watts: number, module: string) {
        console.log(`Supplying ${watts} watts to ${module}`);
    }
}
