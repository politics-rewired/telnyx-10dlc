/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignmentTaskStatusResponse } from '../models/AssignmentTaskStatusResponse';
import type { AssignProfileToCampaignRequest } from '../models/AssignProfileToCampaignRequest';
import type { AssignProfileToCampaignResponse } from '../models/AssignProfileToCampaignResponse';
import type { PhoneNumberStatusResponsePaginated } from '../models/PhoneNumberStatusResponsePaginated';
import { request as __request } from '../core/request';

export class BulkPhoneNumberCampaignsService {

    /**
     * Assign Messaging Profile To Campaign
     * This endpoint allows you to link all phone numbers associated with a Messaging Profile to a campaign. **Please note:** if you want to assign phone numbers to a campaign that you did not create with Telnyx 10DLC services, this endpoint allows that provided that you've shared the campaign with Telnyx. In this case, only provide the parameter, `tcrCampaignId`, and not `campaignId`. In all other cases (where the campaign you're assigning was created with Telnyx 10DLC services), only provide `campaignId`, not `tcrCampaignId`.
     * @param requestBody
     * @returns AssignProfileToCampaignResponse Successful Response
     * @throws ApiError
     */
    public static async assignMessagingProfileToCampaignPublicPhoneNumberAssignmentByProfilePost(
        requestBody: AssignProfileToCampaignRequest,
    ): Promise<AssignProfileToCampaignResponse> {
        const result = await __request({
            method: 'POST',
            path: `/public/phoneNumberAssignmentByProfile`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Assignment Task Status
     * Check the status of the task associated with assigning all phone numbers on a messaging profile to a campaign by `taskId`.
     * @param taskId
     * @returns AssignmentTaskStatusResponse Successful Response
     * @throws ApiError
     */
    public static async getAssignmentTaskStatusPublicPhoneNumberAssignmentByProfileTaskIdGet(
        taskId: string,
    ): Promise<AssignmentTaskStatusResponse> {
        const result = await __request({
            method: 'GET',
            path: `/public/phoneNumberAssignmentByProfile/${taskId}`,
        });
        return result.body;
    }

    /**
     * Get Phone Number Status
     * Check the status of the individual phone number/campaign assignments associated with the supplied `taskId`.
     * @param taskId
     * @param recordsPerPage
     * @param page
     * @returns PhoneNumberStatusResponsePaginated Successful Response
     * @throws ApiError
     */
    public static async getPhoneNumberStatusPublicPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(
        taskId: string,
        recordsPerPage: any,
        page: any,
    ): Promise<PhoneNumberStatusResponsePaginated> {
        const result = await __request({
            method: 'GET',
            path: `/public/phoneNumberAssignmentByProfile/${taskId}/phoneNumbers`,
            query: {
                'recordsPerPage': recordsPerPage,
                'page': page,
            },
        });
        return result.body;
    }

}