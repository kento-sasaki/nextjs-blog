import { Icon, Link, LayoutProps, ColorProps } from '@chakra-ui/react'
import { FC } from 'react'
import { FiGithub } from 'react-icons/fi'

import * as urls from '@src/constants/urls'
import { colors } from '@src/styles/colors'

type Props = {
  width: number
  height: number
  display?: LayoutProps['display']
  color?: ColorProps['color']
}

export const GitHubIcon: FC<Props> = ({
  width,
  height,
  display = 'block',
  color = colors.white,
}) => (
  <Link href={urls.githubUrl} isExternal>
    <Icon as={FiGithub} w={width} h={height} color={color} display={display} />
  </Link>
)
