export interface PostsInterface {
  data: PostInterface[]
  paginatorInfo: {
    lastPage: number
    currentPage: number
    count: number
    total: number
  }
}
export interface PostInterface {
  id: number
  createdAt: string
  updatedAt: string
  title: string
  content: string
  guid: string
  cover: string
  description: string
}

export interface PostCreationInputInterface {
  categoryId: number
  userId: number
  title: string
  contentShort: string
  content: string
}
