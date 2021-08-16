/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PhoneNumberCampaign } from '../models/PhoneNumberCampaign';
import type { PhoneNumberCampaignCreate } from '../models/PhoneNumberCampaignCreate';
import type { PhoneNumberCampaignPaginated } from '../models/PhoneNumberCampaignPaginated';
import type { PhoneNumberCampaignUpdate } from '../models/PhoneNumberCampaignUpdate';
import { request as __request } from '../core/request';

export class PhoneNumberCampaignsService {

    /**
     * Create New Phone Number Campaign
     * Assign an individual phone number to campaign.
     * @param requestBody
     * @returns PhoneNumberCampaign Successful Response
     * @throws ApiError
     */
    public static async createNewPhoneNumberCampaignPublicPhoneNumberCampaignPost(
        requestBody: PhoneNumberCampaignCreate,
    ): Promise<PhoneNumberCampaign> {
        const result = await __request({
            method: 'POST',
            path: `/phoneNumberCampaign`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Retrieve All Phone Number Campaigns
     * Retrieve all of your organization's phone number/campaign assignments.
     * @param recordsPerPage
     * @param page
     * @returns PhoneNumberCampaignPaginated Successful Response
     * @throws ApiError
     */
    public static async retrieveAllPhoneNumberCampaignsPublicPhoneNumberCampaignGet(
        recordsPerPage: any,
        page: any,
    ): Promise<PhoneNumberCampaignPaginated> {
        const result = await __request({
            method: 'GET',
            path: `/phoneNumberCampaign`,
            query: {
                'recordsPerPage': recordsPerPage,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * Get Single Phone Number Campaign
     * Retrieve an individual phone number/campaign assignment by `phoneNumber`.
     * @param phoneNumber
     * @returns PhoneNumberCampaign Successful Response
     * @throws ApiError
     */
    public static async getSinglePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberGet(
        phoneNumber: string,
    ): Promise<PhoneNumberCampaign> {
        const result = await __request({
            method: 'GET',
            path: `/phoneNumberCampaign/${phoneNumber}`,
        });
        return result.body;
    }

    /**
     * Update Phone Number Campaign
     * This endpoint allows you to assign a different campaign to a supplied `phoneNumber`.
     * @param phoneNumber
     * @param requestBody
     * @returns PhoneNumberCampaign Successful Response
     * @throws ApiError
     */
    public static async updatePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberPut(
        phoneNumber: string,
        requestBody: PhoneNumberCampaignUpdate,
    ): Promise<PhoneNumberCampaign> {
        const result = await __request({
            method: 'PUT',
            path: `/phoneNumberCampaign/${phoneNumber}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Phone Number Campaign
     * This endpoint allows you to remove a campaign assignment from the supplied `phoneNumber`.
     * @param phoneNumber
     * @returns PhoneNumberCampaign Successful Response
     * @throws ApiError
     */
    public static async deletePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberDelete(
        phoneNumber: any,
    ): Promise<PhoneNumberCampaign> {
        const result = await __request({
            method: 'DELETE',
            path: `/phoneNumberCampaign/${phoneNumber}`,
        });
        return result.body;
    }

}