/* eslint-disable */


import type { CampaignCSP } from './CampaignCSP';

export type CampaignRecordSetCSP = {
    records?: Array<CampaignCSP>;
    page?: number;
    totalRecords?: number;
}

export namespace CampaignRecordSetCSP {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'CampaignRecordSetCSP';


}