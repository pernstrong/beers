export interface Brewery {
    id: number,
    name: string,
    brewery_type: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    longitude: string,
    latitude: string,
    phone: string,
    website_url: string,
    updated_at: string,
    tag_list: string[]
}

export interface Note {
    id: number,
    note_type: string,
    title: string,
    content: string
}