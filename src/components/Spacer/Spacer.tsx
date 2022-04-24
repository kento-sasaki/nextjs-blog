import React, { FC } from 'react'

type Props = { size: number; horizontal?: boolean }

export const Spacer: FC<Props> = ({ size, horizontal }) => {
  const px = size

  return (
    <div
      style={
        horizontal
          ? { width: px, height: 'auto', display: 'inline-block', flexShrink: 0 }
          : { width: 'auto', height: px, display: 'block', flexShrink: 0 }
      }
    />
  )
}
