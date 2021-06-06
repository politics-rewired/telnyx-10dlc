/* eslint-disable */

import type { AssignmentTaskStatusResponse } from '../models/AssignmentTaskStatusResponse';
import type { AssignProfileToCampaignRequest } from '../models/AssignProfileToCampaignRequest';
import type { AssignProfileToCampaignResponse } from '../models/AssignProfileToCampaignResponse';
import type { PhoneNumberStatusResponsePaginated } from '../models/PhoneNumberStatusResponsePaginated';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface BulkPhoneNumberCampaignsService {

    /**
     * Assign Messaging Profile To Campaign
     * @param requestBody
     * @returns AssignProfileToCampaignResponse Successful Response
     */
    assignMessagingProfileToCampaignPublicPhoneNumberAssignmentByProfilePost(
        requestBody: AssignProfileToCampaignRequest,
    ): Promise<AssignProfileToCampaignResponse>;

    /**
     * **used to get the request options without making a http request**
     * Assign Messaging Profile To Campaign
     * @param requestBody
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    assignMessagingProfileToCampaignPublicPhoneNumberAssignmentByProfilePostApiRequestOptions(
        requestBody: AssignProfileToCampaignRequest,
    ): ApiRequestOptions;

    /**
     * Get Assignment Task Status
     * @param taskId
     * @returns AssignmentTaskStatusResponse Successful Response
     */
    getAssignmentTaskStatusPublicPhoneNumberAssignmentByProfileTaskIdGet(
        taskId: string,
    ): Promise<AssignmentTaskStatusResponse>;

    /**
     * **used to get the request options without making a http request**
     * Get Assignment Task Status
     * @param taskId
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getAssignmentTaskStatusPublicPhoneNumberAssignmentByProfileTaskIdGetApiRequestOptions(
        taskId: string,
    ): ApiRequestOptions;

    /**
     * Get Phone Number Status
     * @param taskId
     * @param recordsPerPage
     * @param page
     * @returns PhoneNumberStatusResponsePaginated Successful Response
     */
    getPhoneNumberStatusPublicPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(
        taskId: string,
        recordsPerPage: any,
        page: any,
    ): Promise<PhoneNumberStatusResponsePaginated>;

    /**
     * **used to get the request options without making a http request**
     * Get Phone Number Status
     * @param taskId
     * @param recordsPerPage
     * @param page
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getPhoneNumberStatusPublicPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGetApiRequestOptions(
        taskId: string,
        recordsPerPage: any,
        page: any,
    ): ApiRequestOptions;

}