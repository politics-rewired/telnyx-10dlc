/* eslint-disable */

import type { PhoneNumberCampaign } from '../models/PhoneNumberCampaign';
import type { PhoneNumberCampaignCreate } from '../models/PhoneNumberCampaignCreate';
import type { PhoneNumberCampaignPaginated } from '../models/PhoneNumberCampaignPaginated';
import type { PhoneNumberCampaignUpdate } from '../models/PhoneNumberCampaignUpdate';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface PhoneNumberCampaignsService {

    /**
     * Retrieve All Phone Number Campaigns
     * @param recordsPerPage
     * @param page
     * @returns PhoneNumberCampaignPaginated Successful Response
     */
    retrieveAllPhoneNumberCampaignsPublicPhoneNumberCampaignGet(
        recordsPerPage: any,
        page: any,
    ): Promise<PhoneNumberCampaignPaginated>;

    /**
     * **used to get the request options without making a http request**
     * Retrieve All Phone Number Campaigns
     * @param recordsPerPage
     * @param page
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    retrieveAllPhoneNumberCampaignsPublicPhoneNumberCampaignGetApiRequestOptions(
        recordsPerPage: any,
        page: any,
    ): ApiRequestOptions;

    /**
     * Create New Phone Number Campaign
     * @param requestBody
     * @returns PhoneNumberCampaign Successful Response
     */
    createNewPhoneNumberCampaignPublicPhoneNumberCampaignPost(
        requestBody: PhoneNumberCampaignCreate,
    ): Promise<PhoneNumberCampaign>;

    /**
     * **used to get the request options without making a http request**
     * Create New Phone Number Campaign
     * @param requestBody
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    createNewPhoneNumberCampaignPublicPhoneNumberCampaignPostApiRequestOptions(
        requestBody: PhoneNumberCampaignCreate,
    ): ApiRequestOptions;

    /**
     * Get Single Phone Number Campaign
     * @param phoneNumber
     * @returns PhoneNumberCampaign Successful Response
     */
    getSinglePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberGet(
        phoneNumber: string,
    ): Promise<PhoneNumberCampaign>;

    /**
     * **used to get the request options without making a http request**
     * Get Single Phone Number Campaign
     * @param phoneNumber
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getSinglePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberGetApiRequestOptions(
        phoneNumber: string,
    ): ApiRequestOptions;

    /**
     * Update Phone Number Campaign
     * @param phoneNumber
     * @param requestBody
     * @returns PhoneNumberCampaign Successful Response
     */
    updatePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberPut(
        phoneNumber: string,
        requestBody: PhoneNumberCampaignUpdate,
    ): Promise<PhoneNumberCampaign>;

    /**
     * **used to get the request options without making a http request**
     * Update Phone Number Campaign
     * @param phoneNumber
     * @param requestBody
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    updatePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberPutApiRequestOptions(
        phoneNumber: string,
        requestBody: PhoneNumberCampaignUpdate,
    ): ApiRequestOptions;

    /**
     * Delete Phone Number Campaign
     * @param phoneNumber
     * @returns PhoneNumberCampaign Successful Response
     */
    deletePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberDelete(
        phoneNumber: any,
    ): Promise<PhoneNumberCampaign>;

    /**
     * **used to get the request options without making a http request**
     * Delete Phone Number Campaign
     * @param phoneNumber
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    deletePhoneNumberCampaignPublicPhoneNumberCampaignPhoneNumberDeleteApiRequestOptions(
        phoneNumber: any,
    ): ApiRequestOptions;

}