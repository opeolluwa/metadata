//comment interface
export interface CommentInterface {
    username: string,
    comment: string
}

//meta category type
export type MetaDataCategory =
    "animation" |
    "gradient" |
    "css code generator" |
    "design inspiration" |
    "icon libraries" |
    "image" |
    "javascript Ui Library" |
    "svg" |
    "illustration"|
    "workaround";

//meta data interface
export interface MetaDataInterface {
    name: string,
    url: string,
    description: string,
    avatarUrl: string,
    category: MetaDataCategory[],
    meta: {
        like?: string[],
        comment?: CommentInterface[],
        clap?: string[]
    },

}