export interface News {
    totalNews:number
    totalPages: number
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
    page?: number
}
export interface NewsProps<T> {
  data: T
}