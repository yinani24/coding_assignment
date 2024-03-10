export interface Character {
    id: string;
    name: string;
    description: string;
}

export interface GettingURL {
    url: string;
    id: string;
    secondary: string;
}

export interface Comics{
    title: string;
    pageCount: number;
    description: string; //can be textobject of type text in the language en-us
    price: number;
    thumbnail: string;
    creators: string[];
    furtherDetails: string;
}