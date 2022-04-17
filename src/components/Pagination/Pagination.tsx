import { Box, HStack, Spacer as ChakraSpacer, Icon, Container, Button } from '@chakra-ui/react'
import { VFC } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { usePage } from '@src/hooks/usePage'
import { colors } from '@src/styles/colors'

type Props = {
  currentPage: number
  totalPageCount: number
}

export const Pagination: VFC<Props> = props => {
  const { goNextPage, backPrevPage, navigate } = usePage()
  const totalPages = [...Array(props.totalPageCount)].map((_, i) => i + 1)

  return (
    <Box bg={colors.primaryGray}>
      <Container maxW="container.lg">
        <HStack>
          {props.currentPage !== 1 && (
            <Button variant="arrow" onClick={backPrevPage}>
              <Icon as={FiChevronLeft} />
            </Button>
          )}

          <ChakraSpacer />

          {totalPages.map(page => (
            <Button
              key={`page-${page}`}
              variant={page === props.currentPage ? 'currentPage' : 'page'}
              size="sm"
              onClick={() => {
                navigate(page)
              }}
            >
              {page}
            </Button>
          ))}

          <ChakraSpacer />

          {props.currentPage !== props.totalPageCount && (
            <Button variant="arrow" onClick={goNextPage}>
              <Icon as={FiChevronRight} color={colors.white} />
            </Button>
          )}
        </HStack>
      </Container>
    </Box>
  )
}
