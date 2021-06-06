/* eslint-disable */

import type { Dca } from '../models/Dca';
import type { ExtVettingProvider } from '../models/ExtVettingProvider';
import type { Mno } from '../models/Mno';
import type { PublicCompanyRecordSet } from '../models/PublicCompanyRecordSet';
import type { VettingClass } from '../models/VettingClass';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface EnumService {

    /**
     * Get Alt Business Id Type
     * Get Alternative Business ID types
     * @returns string Successful Response
     */
    getAltBusinessIdTypeEnumAltBusinessIdTypeGet(): Promise<string>;

    /**
     * **used to get the request options without making a http request**
     * Get Alt Business Id Type
     * Get Alternative Business ID types
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getAltBusinessIdTypeEnumAltBusinessIdTypeGetApiRequestOptions(): ApiRequestOptions;

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
     */
    listPublicCompanyEnumApprovedPublicCompanyGet(
        displayName?: string,
        symbol?: string,
        exchange?: string,
        country?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): Promise<PublicCompanyRecordSet>;

    /**
     * **used to get the request options without making a http request**
     * List Public Company
     * List all TCR approved public companies for use as a Brand
     * @param displayName
     * @param symbol
     * @param exchange
     * @param country
     * @param page
     * @param recordsPerPage
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    listPublicCompanyEnumApprovedPublicCompanyGetApiRequestOptions(
        displayName?: string,
        symbol?: string,
        exchange?: string,
        country?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): ApiRequestOptions;

    /**
     * Get Brand Relationship
     * Get Brand Relationship types
     * @returns string Successful Response
     */
    getBrandRelationshipEnumBrandRelationshipGet(): Promise<string>;

    /**
     * **used to get the request options without making a http request**
     * Get Brand Relationship
     * Get Brand Relationship types
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getBrandRelationshipEnumBrandRelationshipGetApiRequestOptions(): ApiRequestOptions;

    /**
     * Get Campaign Status Type
     * Get Campaign status types
     * @returns string Successful Response
     */
    getCampaignStatusTypeEnumCampaignStatusGet(): Promise<string>;

    /**
     * **used to get the request options without making a http request**
     * Get Campaign Status Type
     * Get Campaign status types
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getCampaignStatusTypeEnumCampaignStatusGetApiRequestOptions(): ApiRequestOptions;

    /**
     * List Connectivity Partners
     * List connectivity partners
     * @returns string Successful Response
     */
    listConnectivityPartnersEnumCnpGet(): Promise<string>;

    /**
     * **used to get the request options without making a http request**
     * List Connectivity Partners
     * List connectivity partners
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    listConnectivityPartnersEnumCnpGetApiRequestOptions(): ApiRequestOptions;

    /**
     * Get All Dcas
     * List all DCAs
     * @returns Dca Successful Response
     */
    getAllDcasEnumDcaGet(): Promise<Array<Dca>>;

    /**
     * **used to get the request options without making a http request**
     * Get All Dcas
     * List all DCAs
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getAllDcasEnumDcaGetApiRequestOptions(): ApiRequestOptions;

    /**
     * Get Entity Type
     * Get Entity types
     * @returns string Successful Response
     */
    getEntityTypeEnumEntityTypeGet(): Promise<string>;

    /**
     * **used to get the request options without making a http request**
     * Get Entity Type
     * Get Entity types
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getEntityTypeEnumEntityTypeGetApiRequestOptions(): ApiRequestOptions;

    /**
     * Get Vetting Providers
     * Get External vetting providers
     * @returns ExtVettingProvider Successful Response
     */
    getVettingProvidersEnumExtVettingProviderGet(): Promise<Array<ExtVettingProvider>>;

    /**
     * **used to get the request options without making a http request**
     * Get Vetting Providers
     * Get External vetting providers
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getVettingProvidersEnumExtVettingProviderGetApiRequestOptions(): ApiRequestOptions;

    /**
     * Get All Mnos
     * List all MNOs
     * @returns Mno Successful Response
     */
    getAllMnosEnumMnoGet(): Promise<Array<Mno>>;

    /**
     * **used to get the request options without making a http request**
     * Get All Mnos
     * List all MNOs
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getAllMnosEnumMnoGetApiRequestOptions(): ApiRequestOptions;

    /**
     * List Mno Operation Status
     * List all MNO campaign operation statuses
     * @returns string Successful Response
     */
    listMnoOperationStatusEnumOperationStatusGet(): Promise<string>;

    /**
     * **used to get the request options without making a http request**
     * List Mno Operation Status
     * List all MNO campaign operation statuses
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    listMnoOperationStatusEnumOperationStatusGetApiRequestOptions(): ApiRequestOptions;

    /**
     * List Stock Exchanges
     * List all stock exchanges
     * @returns string Successful Response
     */
    listStockExchangesEnumStockExchangeGet(): Promise<Array<string>>;

    /**
     * **used to get the request options without making a http request**
     * List Stock Exchanges
     * List all stock exchanges
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    listStockExchangesEnumStockExchangeGetApiRequestOptions(): ApiRequestOptions;

    /**
     * Get All Usecases
     * List all use-cases
     * @param validSubUsecase
     * @returns any Successful Response
     */
    getAllUsecasesEnumUsecaseGet(
        validSubUsecase?: boolean,
    ): Promise<any>;

    /**
     * **used to get the request options without making a http request**
     * Get All Usecases
     * List all use-cases
     * @param validSubUsecase
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getAllUsecasesEnumUsecaseGetApiRequestOptions(
        validSubUsecase?: boolean,
    ): ApiRequestOptions;

    /**
     * Get All Verticals
     * List all verticals
     * @returns any Successful Response
     */
    getAllVerticalsEnumVerticalGet(): Promise<any>;

    /**
     * **used to get the request options without making a http request**
     * Get All Verticals
     * List all verticals
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getAllVerticalsEnumVerticalGetApiRequestOptions(): ApiRequestOptions;

    /**
     * List Vetting Class
     * List all vetting classes
     * @returns VettingClass Successful Response
     */
    listVettingClassEnumVettingClassGet(): Promise<Array<VettingClass>>;

    /**
     * **used to get the request options without making a http request**
     * List Vetting Class
     * List all vetting classes
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    listVettingClassEnumVettingClassGetApiRequestOptions(): ApiRequestOptions;

}