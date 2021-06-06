/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Campaign } from '../models/Campaign';
import type { CampaignCSP } from '../models/CampaignCSP';
import type { CampaignRecordSetCSP } from '../models/CampaignRecordSetCSP';
import type { CampaignRequest } from '../models/CampaignRequest';
import type { UpdateCampaign } from '../models/UpdateCampaign';
import { request as __request } from '../core/request';

export class CampaignService {

    /**
     * List My Campaigns
     * Search my campaigns
     * @param brandId
     * @param status
     * @param usecase
     * @param vertical
     * @param resellerId
     * @param autoRenewal
     * @param upstreamCnpId
     * @param page
     * @param recordsPerPage
     * @returns CampaignRecordSetCSP Successful Response
     * @throws ApiError
     */
    public static async listMyCampaignsCampaignGet(
        brandId?: string,
        status?: string,
        usecase?: string,
        vertical?: string,
        resellerId?: string,
        autoRenewal?: boolean,
        upstreamCnpId?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): Promise<CampaignRecordSetCSP> {
        const result = await __request({
            method: 'GET',
            path: `/campaign`,
            query: {
                'brandId': brandId,
                'status': status,
                'usecase': usecase,
                'vertical': vertical,
                'resellerId': resellerId,
                'autoRenewal': autoRenewal,
                'upstreamCnpId': upstreamCnpId,
                'page': page,
                'recordsPerPage': recordsPerPage,
            },
        });
        return result.body;
    }

    /**
     * Get My Campaign
     * Get my campaign details
     * @param campaignId
     * @returns CampaignCSP Successful Response
     * @throws ApiError
     */
    public static async getMyCampaignCampaignCampaignIdGet(
        campaignId: string,
    ): Promise<CampaignCSP> {
        const result = await __request({
            method: 'GET',
            path: `/campaign/${campaignId}`,
        });
        return result.body;
    }

    /**
     * Update My Campaign
     * Update my campaign properties
     * @param campaignId
     * @param requestBody
     * @returns Campaign Successful Response
     * @throws ApiError
     */
    public static async updateMyCampaignCampaignCampaignIdPut(
        campaignId: string,
        requestBody: UpdateCampaign,
    ): Promise<Campaign> {
        const result = await __request({
            method: 'PUT',
            path: `/campaign/${campaignId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Deactivate My Campaign
     * Deactivate my campaign
     * @param campaignId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async deactivateMyCampaignCampaignCampaignIdDelete(
        campaignId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/campaign/${campaignId}`,
        });
        return result.body;
    }

    /**
     * Get My Campaign Mno Metadata
     * Get my campaign MNO metadata
     * @param campaignId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async getMyCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(
        campaignId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/campaign/${campaignId}/mnoMetadata`,
        });
        return result.body;
    }

    /**
     * Get My Campaign Operation Status
     * Get campaign operation status at MNO level
     * @param campaignId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(
        campaignId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/campaign/${campaignId}/operationStatus`,
        });
        return result.body;
    }

    /**
     * Submit Campaign
     * Campaign builder Step 2: Create new campaign
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async submitCampaignCampaignBuilderPost(
        requestBody: CampaignRequest,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/campaignBuilder`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Qualify By Usecase
     * @param usecase
     * @param brandId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(
        usecase: string,
        brandId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/campaignBuilder/brand/${brandId}/usecase/${usecase}`,
        });
        return result.body;
    }

}