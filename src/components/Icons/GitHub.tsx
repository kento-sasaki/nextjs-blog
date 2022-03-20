import { Icon, Link, LayoutProps } from '@chakra-ui/react'
import { VFC } from 'react'
import { FiGithub } from 'react-icons/fi'

import * as urls from '@src/constants/urls'
import { colors } from '@src/styles/colors'

type Props = {
  width: number
  height: number
  display?: LayoutProps['display']
}

export const GitHubIcon: VFC<Props> = ({
  width,
  height,
  display = 'block',
}) => (
  <Link href={urls.githubUrl} isExternal>
    <Icon
      as={FiGithub}
      w={width}
      h={height}
      color={colors.white}
      display={display}
    />
  </Link>
)
