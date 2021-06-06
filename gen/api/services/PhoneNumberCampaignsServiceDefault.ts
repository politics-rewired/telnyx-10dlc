/* eslint-disable */

import type { PhoneNumberCampaign } from '../models/PhoneNumberCampaign';
import type { PhoneNumberCampaignCreate } from '../models/PhoneNumberCampaignCreate';
import type { PhoneNumberCampaignPaginated } from '../models/PhoneNumberCampaignPaginated';
import type { PhoneNumberCampaignUpdate } from '../models/PhoneNumberCampaignUpdate';
import type { PhoneNumberCampaignsService } from './PhoneNumberCampaignsService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class PhoneNumberCampaignsServiceDefault implements PhoneNumberCampaignsService {

    private readonly config: ApiOptions;

    /**
     * creates a new service
     * @param config the configuration to use
     */
    public constructor(config: ApiOptions) {
        this.config = config;
    }

    public async retrieveAllPhoneNumberCampaignsPublicPhoneNumberCampaignGet(
        recordsPerPage: any,
        page: any,
    ): Promise<PhoneNumberCampaignPaginated> {
        const options = this.retrieveAllPhoneNumberCampaignsPublicPhoneNumberCampaignGetApiRequestOptions(
            recordsPerPage,
            page,
        );
        const result = await __request(options);
        return result.body;
    }

    public retrieveAllPhoneNumberCampaignsPublicPhoneNumberCampaignGetApiRequestOptions(
        recordsPerPage: any,
        page: any,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/phoneNumberCampaign`,
            query: {
                'recordsPerPage': recordsPerPage,
                'page': page,
            },
        };
    }

    public async createNewPhoneNumberCampaignPublicPhoneNumberCampaignPost(
        requestBody: PhoneNumberCampaignCreate,
    ): Promise<PhoneNumberCampaign> {
        const options = this.createNewPhoneNumberCampaignPublicPhoneNumberCampaignPostApiRequestOptions(
            requestBody,
        );
        const result = await __request(options);
        return result.body;
    }

    public createNewPhoneNumberCampaignPublicPhoneNumberCampaignPostApiRequestOptions(
        requestBody: PhoneNumberCampaignCreate,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'POST',
            path: `/phoneNumberCampaign`,
            body: requestBody,
            mediaType: 'application/json',
        };
    }

    public async getSinglePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberGet(
        phoneNumber: string,
    ): Promise<PhoneNumberCampaign> {
        const options = this.getSinglePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberGetApiRequestOptions(
            phoneNumber,
        );
        const result = await __request(options);
        return result.body;
    }

    public getSinglePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberGetApiRequestOptions(
        phoneNumber: string,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/phoneNumberCampaign/${phoneNumber}`,
        };
    }

    public async updatePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberPut(
        phoneNumber: string,
        requestBody: PhoneNumberCampaignUpdate,
    ): Promise<PhoneNumberCampaign> {
        const options = this.updatePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberPutApiRequestOptions(
            phoneNumber,
            requestBody,
        );
        const result = await __request(options);
        return result.body;
    }

    public updatePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberPutApiRequestOptions(
        phoneNumber: string,
        requestBody: PhoneNumberCampaignUpdate,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'PUT',
            path: `/phoneNumberCampaign/${phoneNumber}`,
            body: requestBody,
            mediaType: 'application/json',
        };
    }

    public async deletePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberDelete(
        phoneNumber: any,
    ): Promise<PhoneNumberCampaign> {
        const options = this.deletePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberDeleteApiRequestOptions(
            phoneNumber,
        );
        const result = await __request(options);
        return result.body;
    }

    public deletePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberDeleteApiRequestOptions(
        phoneNumber: any,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'DELETE',
            path: `/phoneNumberCampaign/${phoneNumber}`,
        };
    }

}