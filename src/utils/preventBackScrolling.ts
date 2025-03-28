'use client'
export const disableBodyScroll = () => {
  const body = document.body
  if (body) {
    body.style.overflow = 'hidden'
  }
}

export const enableBodyScroll = () => {
  const body = document.body
  if (body) {
    body.style.overflow = ''
  }
}
