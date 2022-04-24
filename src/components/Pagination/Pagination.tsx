import { Box, HStack, Spacer as ChakraSpacer, Icon, Container, Button } from '@chakra-ui/react'
import { FC } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { usePage } from '@src/hooks/usePage'
import { colors } from '@src/styles/colors'

type Props = {
  currentPage: number
  totalPageCount: number
}

export const Pagination: FC<Props> = ({ currentPage, totalPageCount }) => {
  const { goNextPage, backPrevPage, navigate } = usePage()
  const totalPages = [...Array(totalPageCount)].map((_, i) => i + 1)

  return (
    <Box bg={colors.primaryGray}>
      <Container maxW="container.lg">
        <HStack>
          {currentPage !== 1 && (
            <Button variant="arrow" onClick={backPrevPage}>
              <Icon as={FiChevronLeft} />
            </Button>
          )}

          <ChakraSpacer />

          {totalPages.map(page => (
            <Button
              key={`page-${page}`}
              variant={page === currentPage ? 'currentPage' : 'page'}
              size="sm"
              onClick={() => {
                navigate(page)
              }}
            >
              {page}
            </Button>
          ))}

          <ChakraSpacer />

          {currentPage !== totalPageCount && (
            <Button variant="arrow" onClick={goNextPage}>
              <Icon as={FiChevronRight} color={colors.white} />
            </Button>
          )}
        </HStack>
      </Container>
    </Box>
  )
}
