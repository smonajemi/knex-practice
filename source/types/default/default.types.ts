import Raw from 'knex'

export interface Entity {
    created_at?: string | any;
    updated_at?: string | any;
    deleted_at?: string | any;
}

export interface BusinessObject {
    id?: string;
}

// export interface PagingParams {
//     page: number | 1;
//     pageSize: number | 10;
//     direction: 'asc' | 'desc';
//     sort: string | 'id';
//     totalCount?: number;
//     data?: any[]
// }