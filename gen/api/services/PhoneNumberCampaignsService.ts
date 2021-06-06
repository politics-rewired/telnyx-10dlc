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
     * Retrieve All Phone Number Campaigns
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
     * Create New Phone Number Campaign
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
     * Get Single Phone Number Campaign
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