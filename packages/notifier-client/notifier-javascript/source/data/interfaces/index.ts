// #region module
export interface NotifierConfiguration {
    endpoint?: string;
    token?: string;
    logger?: (
        message: string,
        error?: any,
    ) => void;
}


export type NotifyData =
    | NotifyMail
    | NotifySMS
    | NotifySocial;


export interface NotifySMS {
    kind: 'sms';
    to: string | string[];
    message: string;
}


export interface NotifySocial {
    kind: 'social';
    provider: NotifySocialProvider;
    to: string | string[];
    message: string;
    attachments?: NotifyAttachment[];
}

export type NotifySocialProvider =
    | 'twitter'
    | 'facebook'
    | 'deself';


export interface NotifyMail {
    kind: 'mail';
    to: string | string[];
    subject: string;
    text: string;
    html?: string;
    attachments?: NotifyAttachment[];
}


export interface NotifyAttachment {
    filename: string;
    value: string | ReadableStream;
}



export interface NotifierContextCall {
    depth?: number;
    repository?: NotifierContextCallRepository;
}


export interface NotifierContextCallRepository {
    provider?: string;
    name?: string;
    branch?: string;
    commit?: string;
    basePath?: string;
}


export interface NotifierInputRecord {
    text: string;
    time: number;
    level: number;

    project?: string;
    space?: string;

    format?: string;

    method?: string;
    error?: string;
    extradata?: string;
    context?: NotifierInputRecordContextCall;
}


export interface NotifierInputRecordContextCall {
    repository: NotifierInputRecordContextRepository;
    caller: NotifierInputRecordContextCaller;
}

export interface NotifierInputRecordContextRepository {
    provider: string;
    name: string;
    branch: string;
    commit: string;
    basePath: string;
}

export interface NotifierInputRecordContextCaller {
    file: string;
    line: number;
    column: number;
}
// #endregion module
