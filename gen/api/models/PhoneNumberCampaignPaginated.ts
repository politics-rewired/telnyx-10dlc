/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhoneNumberCampaign } from './PhoneNumberCampaign';

export type PhoneNumberCampaignPaginated = {
    records: Array<PhoneNumberCampaign>;
    page: number;
    totalRecords: number;
}
