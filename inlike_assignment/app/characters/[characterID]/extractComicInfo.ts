import { Comics } from "@/components/interfaces";

function findPrice(object: any, key: string){
    let item: number = 0
    for (let i = 0; i < object.length; i++){
        if (object[i].type === key){
            item = object[i].price
        }
        else{
            item = object[i].price
        }
    }
    return item
}

function findDescription(object: any, key: string){
    let item: string = ''
    for (let i = 0; i < object.length; i++){
        if (object[i].type === key){
            item = object[i].text
        }
        else{
            item = object[i].text
        }
    }
    return item
}

export default function Extract(info: any): Comics[]{
    const comics: Comics[] = []
    console.log(info)
    info.map((comic: any) => {
        const comicInfo = {
            title: comic.title,
            pageCount: comic.pageCount,
            description: findDescription(comic.textObjects, "issue_solicit_text"),
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            price: findPrice(comic.prices, "digitalPurchasePrice"),
            creators: comic.creators.items.map((creator: any) => {return creator.name}),
            furtherDetails: comic.urls.map((url: any) => {return url.type === "detail" ? url.url: ''})[0]
        }
        //console.log(comicInfo)
        comics.push(comicInfo)
    })
    return comics
}