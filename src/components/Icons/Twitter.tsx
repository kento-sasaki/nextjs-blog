import { Icon, Link, LayoutProps } from '@chakra-ui/react'
import { VFC } from 'react'
import { FiTwitter } from 'react-icons/fi'

import * as urls from '@src/constants/urls'
import { colors } from '@src/styles/colors'

type Props = {
  width: number
  height: number
  display?: LayoutProps['display']
}

export const TwitterIcon: VFC<Props> = ({
  width,
  height,
  display = 'block',
}) => (
  <Link href={urls.twitterUrl} isExternal>
    <Icon
      as={FiTwitter}
      w={width}
      h={height}
      color={colors.white}
      display={display}
    />
  </Link>
)
