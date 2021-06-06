/* eslint-disable */


import type { ProfileAssignmentPhoneNumbers } from './ProfileAssignmentPhoneNumbers';

export type PhoneNumberStatusResponsePaginated = {
    records: Array<ProfileAssignmentPhoneNumbers>;
}

export namespace PhoneNumberStatusResponsePaginated {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'PhoneNumberStatusResponsePaginated';


}