import { Box, Text, HStack, Spacer as ChakraSpacer, Icon, Container } from '@chakra-ui/react'
import { VFC } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { colors } from '@src/styles/colors'

type Props = {
  currentPage: number
  totalPageCount: number
}

export const Pagination: VFC<Props> = props => {
  const totalPages = [...Array(props.totalPageCount)].map((_, i) => i + 1)

  return (
    <Box bg={colors.primaryGray}>
      <Container maxW="container.lg">
        <HStack>
          {props.currentPage !== 1 && <Icon as={FiChevronLeft} color={colors.white} />}

          <ChakraSpacer />

          {totalPages.map(page => (
            <Box
              key={`page-${page}`}
              bg={page === props.currentPage ? colors.white : colors.primaryGray}
              borderRadius="full"
              alignContent="center"
              textAlign="center"
              w="1.5rem"
              h="1.5rem"
            >
              <Text
                color={page === props.currentPage ? colors.primaryGray : colors.white}
                fontWeight={600}
              >
                {page}
              </Text>
            </Box>
          ))}

          <ChakraSpacer />

          {props.currentPage !== props.totalPageCount && (
            <Icon as={FiChevronRight} color={colors.white} />
          )}
        </HStack>
      </Container>
    </Box>
  )
}
