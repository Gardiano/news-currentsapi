
export interface News {
    totalNews:number
    data: []
    news: []
    author: string
    category: string[]
    description: string
    id: string
    image: string
    language: string
    published: string
    title: string
    url: string
}

export interface NewsProps<T> {
  data: T
}