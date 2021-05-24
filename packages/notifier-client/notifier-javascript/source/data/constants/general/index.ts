// #region imports
    // #region external
    // #endregion external
// #endregion imports



// #region module
const ENDPOINT = process.env.NOTIFIER_ENDPOINT || '';
const TOKEN = process.env.NOTIFIER_TOKEN || '';

const PROJECT = process.env.NOTIFIER_PROJECT || '';
const SPACE = process.env.NOTIFIER_SPACE || '';


const CALL_CONTEXT = process.env.NOTIFIER_CALL_CONTEXT === 'true';
const REPOSITORY_PROVIDER = process.env.NOTIFIER_REPOSITORY_PROVIDER || '';
const REPOSITORY_NAME = process.env.NOTIFIER_REPOSITORY_NAME || '';
const REPOSITORY_COMMIT = process.env.NOTIFIER_REPOSITORY_COMMIT || 'latest';
const REPOSITORY_BRANCH = process.env.NOTIFIER_REPOSITORY_BRANCH || 'master';
const REPOSITORY_BASEPATH = process.env.NOTIFIER_REPOSITORY_BASEPATH || '__MATCH_CUT__';


const DEFAULT_CALL_DEPTH = 0;
// #endregion module



// #region exports
export {
    ENDPOINT,
    TOKEN,

    PROJECT,
    SPACE,

    CALL_CONTEXT,
    REPOSITORY_PROVIDER,
    REPOSITORY_BRANCH,
    REPOSITORY_COMMIT,
    REPOSITORY_NAME,
    REPOSITORY_BASEPATH,

    DEFAULT_CALL_DEPTH,
};
// #endregion exports
