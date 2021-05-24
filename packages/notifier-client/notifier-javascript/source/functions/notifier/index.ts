// #region imports
    // #region external
    import {
        NotifierConfiguration,
        NotifyData,
        NotifyMail,
        NotifySMS,
        NotifySocial,
    } from '#data/interfaces';


    import {
        ENDPOINT,
        TOKEN,
    } from '#data/constants';


    import getGraphqlClient, {
        globalGraphqlClient,
    } from '#services/graphql/client';

    import {
        NOTIFY,
    } from '#services/graphql/mutate';

    import defaultLogger from '#services/logger';
    // #endregion external
// #endregion imports



// #region module
const notifier = <T = any>(
    configuration?: NotifierConfiguration,
) => {
    const endpointURL = configuration?.endpoint ?? ENDPOINT;
    const accessToken = configuration?.token ?? TOKEN;
    const activeLogger = configuration?.logger || defaultLogger;


    const getSpecificGraphqlClient = () => {
        if (!endpointURL) {
            activeLogger(
                'No notifier endpoint.',
            );
            return;
        }

        if (!accessToken) {
            activeLogger(
                'No notifier token.',
            );
            return;
        }

        try {
            if (globalGraphqlClient
                && !configuration?.endpoint
                && !configuration?.token
            ) {
                return globalGraphqlClient;
            }

            const graphqlClient = getGraphqlClient(
                endpointURL,
                accessToken,
            );

            return graphqlClient;
        } catch (error) {
            activeLogger(
                'Notifier client error.',
                error,
            );
            return;
        }
    }


    const notifyMail = async (
        data: NotifyMail,
    ) => {
        const graphqlClient = getSpecificGraphqlClient();
        if (!graphqlClient) {
            return false;
        }

        try {
            const mutation = await graphqlClient.mutate({
                mutation: NOTIFY,
                variables: {
                    input: {

                    },
                },
            });

            if (!mutation.data) {
                return false;
            }

            if (!mutation.data.notifierMutationNotify.status) {
                return false;
            }

            return true;
        } catch (error) {
            activeLogger(
                'Notify mail error.',
                error,
            );
            return false;
        }
    }

    const notifySMS = async (
        data: NotifySMS,
    ) => {
        const graphqlClient = getSpecificGraphqlClient();
        if (!graphqlClient) {
            return false;
        }

        try {
            const mutation = await graphqlClient.mutate({
                mutation: NOTIFY,
                variables: {
                    input: {

                    },
                },
            });

            if (!mutation.data) {
                return false;
            }

            if (!mutation.data.notifierMutationNotify.status) {
                return false;
            }

            return true;
        } catch (error) {
            activeLogger(
                'Notify SMS error.',
                error,
            );
            return false;
        }
    }

    const notifySocial = async (
        data: NotifySocial,
    ) => {
        const graphqlClient = getSpecificGraphqlClient();
        if (!graphqlClient) {
            return false;
        }

        try {
            const mutation = await graphqlClient.mutate({
                mutation: NOTIFY,
                variables: {
                    input: {

                    },
                },
            });

            if (!mutation.data) {
                return false;
            }

            if (!mutation.data.notifierMutationNotify.status) {
                return false;
            }

            return true;
        } catch (error) {
            activeLogger(
                'Notify social error.',
                error,
            );
            return false;
        }
    }


    const notify = async (
        data: NotifyData,
    ) => {
        switch (data.kind) {
            case 'mail':
                return await notifyMail(data);
            case 'sms':
                return await notifySMS(data);
            case 'social':
                return await notifySocial(data);
        }
    }


    return {
        notify,
    };
};
// #endregion module



// #region exports
export default notifier;
// #endregion exports
