/* eslint-disable */

import type { Dca } from '../models/Dca';
import type { ExtVettingProvider } from '../models/ExtVettingProvider';
import type { Mno } from '../models/Mno';
import type { PublicCompanyRecordSet } from '../models/PublicCompanyRecordSet';
import type { VettingClass } from '../models/VettingClass';
import type { EnumService } from './EnumService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class EnumServiceDefault implements EnumService {

    private readonly config: ApiOptions;

    /**
     * creates a new service
     * @param config the configuration to use
     */
    public constructor(config: ApiOptions) {
        this.config = config;
    }

    public async getAltBusinessIdTypeEnumAltBusinessIdTypeGet(): Promise<string> {
        const options = this.getAltBusinessIdTypeEnumAltBusinessIdTypeGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public getAltBusinessIdTypeEnumAltBusinessIdTypeGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/altBusinessIdType`,
        };
    }

    public async listPublicCompanyEnumApprovedPublicCompanyGet(
        displayName?: string,
        symbol?: string,
        exchange?: string,
        country?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): Promise<PublicCompanyRecordSet> {
        const options = this.listPublicCompanyEnumApprovedPublicCompanyGetApiRequestOptions(
            displayName,
            symbol,
            exchange,
            country,
            page,
            recordsPerPage,
        );
        const result = await __request(options);
        return result.body;
    }

    public listPublicCompanyEnumApprovedPublicCompanyGetApiRequestOptions(
        displayName?: string,
        symbol?: string,
        exchange?: string,
        country?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/approvedPublicCompany`,
            query: {
                'displayName': displayName,
                'symbol': symbol,
                'exchange': exchange,
                'country': country,
                'page': page,
                'recordsPerPage': recordsPerPage,
            },
        };
    }

    public async getBrandRelationshipEnumBrandRelationshipGet(): Promise<string> {
        const options = this.getBrandRelationshipEnumBrandRelationshipGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public getBrandRelationshipEnumBrandRelationshipGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/brandRelationship`,
        };
    }

    public async getCampaignStatusTypeEnumCampaignStatusGet(): Promise<string> {
        const options = this.getCampaignStatusTypeEnumCampaignStatusGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public getCampaignStatusTypeEnumCampaignStatusGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/campaignStatus`,
        };
    }

    public async listConnectivityPartnersEnumCnpGet(): Promise<string> {
        const options = this.listConnectivityPartnersEnumCnpGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public listConnectivityPartnersEnumCnpGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/cnp`,
        };
    }

    public async getAllDcasEnumDcaGet(): Promise<Array<Dca>> {
        const options = this.getAllDcasEnumDcaGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public getAllDcasEnumDcaGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/dca`,
        };
    }

    public async getEntityTypeEnumEntityTypeGet(): Promise<string> {
        const options = this.getEntityTypeEnumEntityTypeGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public getEntityTypeEnumEntityTypeGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/entityType`,
        };
    }

    public async getVettingProvidersEnumExtVettingProviderGet(): Promise<Array<ExtVettingProvider>> {
        const options = this.getVettingProvidersEnumExtVettingProviderGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public getVettingProvidersEnumExtVettingProviderGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/extVettingProvider`,
        };
    }

    public async getAllMnosEnumMnoGet(): Promise<Array<Mno>> {
        const options = this.getAllMnosEnumMnoGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public getAllMnosEnumMnoGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/mno`,
        };
    }

    public async listMnoOperationStatusEnumOperationStatusGet(): Promise<string> {
        const options = this.listMnoOperationStatusEnumOperationStatusGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public listMnoOperationStatusEnumOperationStatusGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/operationStatus`,
        };
    }

    public async listStockExchangesEnumStockExchangeGet(): Promise<Array<string>> {
        const options = this.listStockExchangesEnumStockExchangeGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public listStockExchangesEnumStockExchangeGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/stockExchange`,
        };
    }

    public async getAllUsecasesEnumUsecaseGet(
        validSubUsecase?: boolean,
    ): Promise<any> {
        const options = this.getAllUsecasesEnumUsecaseGetApiRequestOptions(
            validSubUsecase,
        );
        const result = await __request(options);
        return result.body;
    }

    public getAllUsecasesEnumUsecaseGetApiRequestOptions(
        validSubUsecase?: boolean,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/usecase`,
            query: {
                'validSubUsecase': validSubUsecase,
            },
        };
    }

    public async getAllVerticalsEnumVerticalGet(): Promise<any> {
        const options = this.getAllVerticalsEnumVerticalGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public getAllVerticalsEnumVerticalGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/vertical`,
        };
    }

    public async listVettingClassEnumVettingClassGet(): Promise<Array<VettingClass>> {
        const options = this.listVettingClassEnumVettingClassGetApiRequestOptions(
        );
        const result = await __request(options);
        return result.body;
    }

    public listVettingClassEnumVettingClassGetApiRequestOptions(): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/enum/vettingClass`,
        };
    }

}