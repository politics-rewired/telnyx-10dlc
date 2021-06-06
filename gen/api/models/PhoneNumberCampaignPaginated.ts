/* eslint-disable */


import type { PhoneNumberCampaign } from './PhoneNumberCampaign';

export type PhoneNumberCampaignPaginated = {
    records: Array<PhoneNumberCampaign>;
    page: number;
    totalRecords: number;
}

export namespace PhoneNumberCampaignPaginated {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'PhoneNumberCampaignPaginated';


}