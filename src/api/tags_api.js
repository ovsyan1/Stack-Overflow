import {instance} from './api';

export const tagsAPI = {
    getAllTags(){
        return instance.get(`/2.3/tags?order=desc&site=stackoverflow&filter=!bQ*pzSribilYhl`);
    },
    sortByActivity(){
        return instance.get(`/2.3/tags?order=desc&sort=popular&site=stackoverflow&filter=!bQ*pzSribilYhl`);
    },
    sortByName(){
        return instance.get(`/2.3/tags?order=asc&sort=name&site=stackoverflow&filter=!nKzQUR6(B-`);
    }
}
export const tagAPI = {
    getTagWiki(tag){
        return instance.get(`/2.3/tags/${tag}/wikis?site=stackoverflow`)
    },
    getTagFAQ(tag){
        return instance.get(`/2.3/tags/${tag}/faq?site=stackoverflow`)
    }
}