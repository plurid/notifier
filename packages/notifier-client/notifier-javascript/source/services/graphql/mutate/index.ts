// #region imports
    // #region libraries
    import {
        gql,
    } from '@apollo/client';
    // #endregion libraries
// #endregion imports



// #region module
const NOTIFY = gql`
    mutation NotifierMutationNotify($input: NotifierInputNotify!) {
        notifierMutationNotify(input: $input) {
            status
        }
    }
`;

// #endregion module



// #region exports
export {
    NOTIFY,
};
// #endregion exports
