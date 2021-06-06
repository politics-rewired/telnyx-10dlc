/* eslint-disable */


import type { PublicCompany } from './PublicCompany';

export type PublicCompanyRecordSet = {
    records?: Array<PublicCompany>;
    page?: number;
    totalRecords?: number;
}

export namespace PublicCompanyRecordSet {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'PublicCompanyRecordSet';


}