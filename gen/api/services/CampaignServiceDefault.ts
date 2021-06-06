/* eslint-disable */

import type { Campaign } from '../models/Campaign';
import type { CampaignCSP } from '../models/CampaignCSP';
import type { CampaignRecordSetCSP } from '../models/CampaignRecordSetCSP';
import type { CampaignRequest } from '../models/CampaignRequest';
import type { UpdateCampaign } from '../models/UpdateCampaign';
import type { CampaignService } from './CampaignService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class CampaignServiceDefault implements CampaignService {

    private readonly config: ApiOptions;

    /**
     * creates a new service
     * @param config the configuration to use
     */
    public constructor(config: ApiOptions) {
        this.config = config;
    }

    public async listMyCampaignsCampaignGet(
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
        const options = this.listMyCampaignsCampaignGetApiRequestOptions(
            brandId,
            status,
            usecase,
            vertical,
            resellerId,
            autoRenewal,
            upstreamCnpId,
            page,
            recordsPerPage,
        );
        const result = await __request(options);
        return result.body;
    }

    public listMyCampaignsCampaignGetApiRequestOptions(
        brandId?: string,
        status?: string,
        usecase?: string,
        vertical?: string,
        resellerId?: string,
        autoRenewal?: boolean,
        upstreamCnpId?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): ApiRequestOptions {
        return {
            ...this.config,
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
        };
    }

    public async getMyCampaignCampaignCampaignIdGet(
        campaignId: string,
    ): Promise<CampaignCSP> {
        const options = this.getMyCampaignCampaignCampaignIdGetApiRequestOptions(
            campaignId,
        );
        const result = await __request(options);
        return result.body;
    }

    public getMyCampaignCampaignCampaignIdGetApiRequestOptions(
        campaignId: string,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/campaign/${campaignId}`,
        };
    }

    public async updateMyCampaignCampaignCampaignIdPut(
        campaignId: string,
        requestBody: UpdateCampaign,
    ): Promise<Campaign> {
        const options = this.updateMyCampaignCampaignCampaignIdPutApiRequestOptions(
            campaignId,
            requestBody,
        );
        const result = await __request(options);
        return result.body;
    }

    public updateMyCampaignCampaignCampaignIdPutApiRequestOptions(
        campaignId: string,
        requestBody: UpdateCampaign,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'PUT',
            path: `/campaign/${campaignId}`,
            body: requestBody,
            mediaType: 'application/json',
        };
    }

    public async deactivateMyCampaignCampaignCampaignIdDelete(
        campaignId: string,
    ): Promise<any> {
        const options = this.deactivateMyCampaignCampaignCampaignIdDeleteApiRequestOptions(
            campaignId,
        );
        const result = await __request(options);
        return result.body;
    }

    public deactivateMyCampaignCampaignCampaignIdDeleteApiRequestOptions(
        campaignId: string,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'DELETE',
            path: `/campaign/${campaignId}`,
        };
    }

    public async getMyCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(
        campaignId: string,
    ): Promise<any> {
        const options = this.getMyCampaignMnoMetadataCampaignCampaignIdMnoMetadataGetApiRequestOptions(
            campaignId,
        );
        const result = await __request(options);
        return result.body;
    }

    public getMyCampaignMnoMetadataCampaignCampaignIdMnoMetadataGetApiRequestOptions(
        campaignId: string,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/campaign/${campaignId}/mnoMetadata`,
        };
    }

    public async getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(
        campaignId: string,
    ): Promise<any> {
        const options = this.getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGetApiRequestOptions(
            campaignId,
        );
        const result = await __request(options);
        return result.body;
    }

    public getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGetApiRequestOptions(
        campaignId: string,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/campaign/${campaignId}/operationStatus`,
        };
    }

    public async submitCampaignCampaignBuilderPost(
        requestBody: CampaignRequest,
    ): Promise<any> {
        const options = this.submitCampaignCampaignBuilderPostApiRequestOptions(
            requestBody,
        );
        const result = await __request(options);
        return result.body;
    }

    public submitCampaignCampaignBuilderPostApiRequestOptions(
        requestBody: CampaignRequest,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'POST',
            path: `/campaignBuilder`,
            body: requestBody,
            mediaType: 'application/json',
        };
    }

    public async qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(
        usecase: string,
        brandId: string,
    ): Promise<any> {
        const options = this.qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGetApiRequestOptions(
            usecase,
            brandId,
        );
        const result = await __request(options);
        return result.body;
    }

    public qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGetApiRequestOptions(
        usecase: string,
        brandId: string,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/campaignBuilder/brand/${brandId}/usecase/${usecase}`,
        };
    }

}