import { Box } from '@chakra-ui/react'
import { CodeComponent } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { colors } from '@src/styles/colors'

export const CodeBlock: CodeComponent = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)(:.+)/.exec(className || '')
  const lang = match && match[1] ? match[1] : ''
  const name = match && match[2] ? match[2].slice(1) : ''

  return !inline && match ? (
    <Box
      position="relative"
      marginY={4}
      bg="#2f2f2f"
      paddingTop={5}
      paddingBottom={0.5}
      borderRadius={6}
    >
      <Box
        display="inline-block"
        position="absolute"
        top={0}
        left={6}
        backgroundColor={colors.white}
        padding="0.2em"
        color={colors.primaryGray}
        borderBottomRadius={6}
        zIndex={10}
      >
        {name}
      </Box>
      <SyntaxHighlighter style={materialDark} language={lang} PreTag="div" {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </Box>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}
