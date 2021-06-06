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