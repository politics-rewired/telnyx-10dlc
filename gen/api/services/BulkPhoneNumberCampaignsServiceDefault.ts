/* eslint-disable */

import type { AssignmentTaskStatusResponse } from '../models/AssignmentTaskStatusResponse';
import type { AssignProfileToCampaignRequest } from '../models/AssignProfileToCampaignRequest';
import type { AssignProfileToCampaignResponse } from '../models/AssignProfileToCampaignResponse';
import type { PhoneNumberStatusResponsePaginated } from '../models/PhoneNumberStatusResponsePaginated';
import type { BulkPhoneNumberCampaignsService } from './BulkPhoneNumberCampaignsService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class BulkPhoneNumberCampaignsServiceDefault implements BulkPhoneNumberCampaignsService {

    private readonly config: ApiOptions;

    /**
     * creates a new service
     * @param config the configuration to use
     */
    public constructor(config: ApiOptions) {
        this.config = config;
    }

    public async assignMessagingProfileToCampaignPublicPhoneNumberAssignmentByProfilePost(
        requestBody: AssignProfileToCampaignRequest,
    ): Promise<AssignProfileToCampaignResponse> {
        const options = this.assignMessagingProfileToCampaignPublicPhoneNumberAssignmentByProfilePostApiRequestOptions(
            requestBody,
        );
        const result = await __request(options);
        return result.body;
    }

    public assignMessagingProfileToCampaignPublicPhoneNumberAssignmentByProfilePostApiRequestOptions(
        requestBody: AssignProfileToCampaignRequest,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'POST',
            path: `/public/phoneNumberAssignmentByProfile`,
            body: requestBody,
            mediaType: 'application/json',
        };
    }

    public async getAssignmentTaskStatusPublicPhoneNumberAssignmentByProfileTaskIdGet(
        taskId: string,
    ): Promise<AssignmentTaskStatusResponse> {
        const options = this.getAssignmentTaskStatusPublicPhoneNumberAssignmentByProfileTaskIdGetApiRequestOptions(
            taskId,
        );
        const result = await __request(options);
        return result.body;
    }

    public getAssignmentTaskStatusPublicPhoneNumberAssignmentByProfileTaskIdGetApiRequestOptions(
        taskId: string,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/public/phoneNumberAssignmentByProfile/${taskId}`,
        };
    }

    public async getPhoneNumberStatusPublicPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(
        taskId: string,
        recordsPerPage: any,
        page: any,
    ): Promise<PhoneNumberStatusResponsePaginated> {
        const options = this.getPhoneNumberStatusPublicPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGetApiRequestOptions(
            taskId,
            recordsPerPage,
            page,
        );
        const result = await __request(options);
        return result.body;
    }

    public getPhoneNumberStatusPublicPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGetApiRequestOptions(
        taskId: string,
        recordsPerPage: any,
        page: any,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/public/phoneNumberAssignmentByProfile/${taskId}/phoneNumbers`,
            query: {
                'recordsPerPage': recordsPerPage,
                'page': page,
            },
        };
    }

}