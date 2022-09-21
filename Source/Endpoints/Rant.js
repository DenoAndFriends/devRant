
import { rants } from './Base.js'


export const rant = ( id ) =>
    `${ rants }/${ id }`;

export const unfavorite = ( id ) =>
    `${ rant(id) }/unfavorite`;

export const favorite = ( id ) =>
    `${ rant(id) }/favorite`;

export const comment = ( id ) =>
    `${ rant(id) }/comments`;

export const vote = ( id ) =>
    `${ rant(id) }/vote`;