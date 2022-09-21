
import { users } from './Base.js'


export const user = ( id ) =>
    `${ users }/${ id }`;

export const edit
     = `${ users }/me/edit-profile`;

export const authenticate
     = `${ users }/auth-token`;

export const notifications
     = `${ users }/me/notif-feed`;

export const avatar
     = `${ users }/me/avatar`;

export const subscribe = ( id ) =>
    `${ user(id) }/subscribe`;

export const unsubscribe = ( id ) =>
    `${ user(id) }/subscribe`;
