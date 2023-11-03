import http from './request';


const basePath = process.env.REST_API
// const responseBody = (response: AxiosResponse) => response.data;
export class BaseService {
    findAll() {
        return http.get(basePath);
    }
    find(params) {
        const {
            limit = 30,
            page = 1,
            parent,
            fields,
            orderBy,
            sortedBy,
            ...restParams
        } = params;
        const search = formatSearchString({
            ...restParams,
        });
        const queryString = formatSearchParams({
            limit,
            page,
            search,
            parent,
            fields,
            orderBy,
            sortedBy,
        });
        return http
            .get(`${basePath}?${queryString}`)
            .then((res) => res.data);
    }
    findOne(id) {
        return http.get(`${basePath}/${id}`).then((res) => res.data);
    }
    create(data, options = null) {
        return http.post(basePath, data, options).then((res) => res.data);
    }
    update(id, data) {
        return http
            .put(`${basePath}/${id}`, data)
            .then((res) => res.data);
    }
    delete(id) {
        return http.delete(`${basePath}/${id}`);
    }
    get(url, options) {
        return http.get(url, options).then((res) => res.data);
    }
    post(url, data) {
        return http.post(url, data);
    }
    put(url, data) {
        return http.put(url, data);
    }

   /*  private formatSearchParams({
        limit,
        page,
        search,
        parent,
        fields,
        orderBy,
        sortedBy,
    }: QueryParamsOptions) {
        return new URLSearchParams({
            searchJoin: 'and',
            page: page.toString(),
            limit: limit.toString(),
            ...(Boolean(parent) && { parent }),
            ...(Boolean(sortedBy) && { sortedBy }),
            ...(Boolean(orderBy) && { orderBy }),
            ...(Boolean(search) && { search }),
            ...(Boolean(fields) && { with: fields?.join(';') }),
        }).toString();
    } */
    /* private formatSearchString(values: Partial<SearchParamsOptions>) {
        const parsedValues = pickBy(values);
        return Object.keys(parsedValues)
            .map((k) => {
                if (
                    ['type', 'categories', 'tags', 'author', 'manufacturer'].includes(k)
                ) {
                    return `${k}.slug:${parsedValues[k]}`;
                }
                return `${k}:${parsedValues[k]}`;
            })
            .join(';');
    } */
}
