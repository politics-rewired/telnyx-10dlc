/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AltBusinessIdType } from './AltBusinessIdType';
import type { BrandRelationship } from './BrandRelationship';
import type { EntityType } from './EntityType';
import type { StockExchange } from './StockExchange';

export type BrandCSP = {
    /**
     * Entity type behind the brand. This is the form of business establishment.
     */
    entityType: EntityType;
    /**
     * Unique identifier assigned to the csp by the registry.
     */
    cspId?: string;
    /**
     * Unique identifier assigned to the brand by the registry.
     */
    brandId?: string;
    /**
     * Display or marketing name of the brand.
     */
    displayName: string;
    /**
     * (Required for Non-profit/private/public) Legal company name.
     */
    companyName?: string;
    /**
     * (Required for Non-profit) Government assigned corporate tax ID. EIN is 9-digits in U.S.
     */
    ein?: string;
    /**
     * Valid phone number in e.164 international format.
     */
    phone?: string;
    /**
     * Street number and name.
     */
    street?: string;
    /**
     * City name
     */
    city?: string;
    /**
     * State. Must be 2 letters code for United States.
     */
    state?: string;
    /**
     * Postal codes. Use 5 digit zipcode for United States
     */
    postalCode?: string;
    /**
     * ISO2 2 characters country code. Example: US - United States
     */
    country: string;
    /**
     * Valid email address of brand support contact.
     */
    email: string;
    /**
     * (Required for public company) stock symbol.
     */
    stockSymbol?: string;
    /**
     * (Required for public company) stock exchange.
     */
    stockExchange?: StockExchange;
    /**
     * IP address of the browser requesting to create brand identity.
     */
    ipAddress?: string;
    /**
     * Brand website URL.
     */
    website?: string;
    /**
     * Brand relationship to the CSP
     */
    brandRelationship: BrandRelationship;
    /**
     * Vertical or industry segment of the brand.
     */
    vertical: string;
    /**
     * Alternate business identifier such as DUNS, LEI, or GIIN
     */
    altBusinessId?: string;
    altBusinessIdType?: AltBusinessIdType;
    /**
     * Universal EIN of Brand, Read Only.
     */
    universalEin?: string;
}
