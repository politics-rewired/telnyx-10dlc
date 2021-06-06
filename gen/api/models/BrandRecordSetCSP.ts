/* eslint-disable */


import type { BrandCSP } from './BrandCSP';

export type BrandRecordSetCSP = {
    records?: Array<BrandCSP>;
    page?: number;
    totalRecords?: number;
}

export namespace BrandRecordSetCSP {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'BrandRecordSetCSP';


}