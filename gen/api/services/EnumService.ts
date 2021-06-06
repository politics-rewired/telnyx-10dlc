/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dca } from '../models/Dca';
import type { ExtVettingProvider } from '../models/ExtVettingProvider';
import type { Mno } from '../models/Mno';
import type { PublicCompanyRecordSet } from '../models/PublicCompanyRecordSet';
import type { VettingClass } from '../models/VettingClass';
import { request as __request } from '../core/request';

export class EnumService {

    /**
     * Get Alt Business Id Type
     * Get Alternative Business ID types
     * @returns string Successful Response
     * @throws ApiError
     */
    public static async getAltBusinessIdTypeEnumAltBusinessIdTypeGet(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/enum/altBusinessIdType`,
        });
        return result.body;
    }

    /**
     * List Public Company
     * List all TCR approved public companies for use as a Brand
     * @param displayName
     * @param symbol
     * @param exchange
     * @param country
     * @param page
     * @param recordsPerPage
     * @returns PublicCompanyRecordSet Successful Response
     * @throws ApiError
     */
    public static async listPublicCompanyEnumApprovedPublicCompanyGet(
        displayName?: string,
        symbol?: string,
        exchange?: string,
        country?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): Promise<PublicCompanyRecordSet> {
        const result = await __request({
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
        });
        return result.body;
    }

    /**
     * Get Brand Relationship
     * Get Brand Relationship types
     * @returns string Successful Response
     * @throws ApiError
     */
    public static async getBrandRelationshipEnumBrandRelationshipGet(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/enum/brandRelationship`,
        });
        return result.body;
    }

    /**
     * Get Campaign Status Type
     * Get Campaign status types
     * @returns string Successful Response
     * @throws ApiError
     */
    public static async getCampaignStatusTypeEnumCampaignStatusGet(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/enum/campaignStatus`,
        });
        return result.body;
    }

    /**
     * List Connectivity Partners
     * List connectivity partners
     * @returns string Successful Response
     * @throws ApiError
     */
    public static async listConnectivityPartnersEnumCnpGet(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/enum/cnp`,
        });
        return result.body;
    }

    /**
     * Get All Dcas
     * List all DCAs
     * @returns Dca Successful Response
     * @throws ApiError
     */
    public static async getAllDcasEnumDcaGet(): Promise<Array<Dca>> {
        const result = await __request({
            method: 'GET',
            path: `/enum/dca`,
        });
        return result.body;
    }

    /**
     * Get Entity Type
     * Get Entity types
     * @returns string Successful Response
     * @throws ApiError
     */
    public static async getEntityTypeEnumEntityTypeGet(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/enum/entityType`,
        });
        return result.body;
    }

    /**
     * Get Vetting Providers
     * Get External vetting providers
     * @returns ExtVettingProvider Successful Response
     * @throws ApiError
     */
    public static async getVettingProvidersEnumExtVettingProviderGet(): Promise<Array<ExtVettingProvider>> {
        const result = await __request({
            method: 'GET',
            path: `/enum/extVettingProvider`,
        });
        return result.body;
    }

    /**
     * Get All Mnos
     * List all MNOs
     * @returns Mno Successful Response
     * @throws ApiError
     */
    public static async getAllMnosEnumMnoGet(): Promise<Array<Mno>> {
        const result = await __request({
            method: 'GET',
            path: `/enum/mno`,
        });
        return result.body;
    }

    /**
     * List Mno Operation Status
     * List all MNO campaign operation statuses
     * @returns string Successful Response
     * @throws ApiError
     */
    public static async listMnoOperationStatusEnumOperationStatusGet(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/enum/operationStatus`,
        });
        return result.body;
    }

    /**
     * List Stock Exchanges
     * List all stock exchanges
     * @returns string Successful Response
     * @throws ApiError
     */
    public static async listStockExchangesEnumStockExchangeGet(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/enum/stockExchange`,
        });
        return result.body;
    }

    /**
     * Get All Usecases
     * List all use-cases
     * @param validSubUsecase
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async getAllUsecasesEnumUsecaseGet(
        validSubUsecase?: boolean,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/enum/usecase`,
            query: {
                'validSubUsecase': validSubUsecase,
            },
        });
        return result.body;
    }

    /**
     * Get All Verticals
     * List all verticals
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async getAllVerticalsEnumVerticalGet(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/enum/vertical`,
        });
        return result.body;
    }

    /**
     * List Vetting Class
     * List all vetting classes
     * @returns VettingClass Successful Response
     * @throws ApiError
     */
    public static async listVettingClassEnumVettingClassGet(): Promise<Array<VettingClass>> {
        const result = await __request({
            method: 'GET',
            path: `/enum/vettingClass`,
        });
        return result.body;
    }

}