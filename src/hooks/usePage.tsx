import { useRouter } from 'next/router'
import React, { FC, createContext, useContext, useState, ReactNode } from 'react'

type Page = {
  currentPage: number
  totalPageCount?: number
  goNextPage: () => void
  backPrevPage: () => void
  setCurrentPage: (page: number) => void
  setTotalPageCount: (page: number | undefined) => void
  navigate: (page: number) => void
}

const context = createContext<Page>({
  currentPage: 1,
  goNextPage: () => {},
  backPrevPage: () => {},
  setCurrentPage: () => {},
  setTotalPageCount: () => {},
  navigate: () => {},
})
const { Provider } = context

export const usePage = () => useContext(context)

export const PageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPageCount, setTotalPageCount] = useState<number | undefined>(undefined)

  const router = useRouter()

  const goNextPage = () => {
    if (currentPage === totalPageCount) return

    router.push(`/articles/page/${currentPage + 1}`)
  }

  const backPrevPage = () => {
    if (currentPage === 1) return

    router.push(`/articles/page/${currentPage - 1}`)
  }

  const navigate = (page: number) => {
    if (totalPageCount && page > totalPageCount) return

    router.push(`/articles/page/${page}`)
  }

  return (
    <Provider
      value={{
        currentPage,
        totalPageCount,
        goNextPage,
        backPrevPage,
        setCurrentPage,
        setTotalPageCount,
        navigate,
      }}
    >
      {children}
    </Provider>
  )
}
