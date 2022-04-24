import { Icon, Link, LayoutProps, ColorProps } from '@chakra-ui/react'
import { FC } from 'react'
import { FiTwitter } from 'react-icons/fi'

import * as urls from '@src/constants/urls'
import { colors } from '@src/styles/colors'

type Props = {
  width: number
  height: number
  display?: LayoutProps['display']
  color?: ColorProps['color']
}

export const TwitterIcon: FC<Props> = ({
  width,
  height,
  display = 'block',
  color = colors.white,
}) => (
  <Link href={urls.twitterUrl} isExternal>
    <Icon as={FiTwitter} w={width} h={height} color={color} display={display} />
  </Link>
)
