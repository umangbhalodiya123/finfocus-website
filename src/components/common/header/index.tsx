'use client'
import React, { useState } from 'react'
import styles from './header.module.scss'
import EarthIcon from '@/components/icons/earthIcon'
import HumberIcon from '@/components/icons/humberIcon'
import MobileMenu from '../mobileMenu'
import Image from 'next/image'
import Logo from '@/components/assets/svg/logo.svg'
import { Menu, MenuItem } from '@mui/material'
import { useRouter } from 'next/navigation'
import { LANG_DATA } from '@/utils/_constans'
import { useLocale, useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations()
  const [toggle, setToggle] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const router = useRouter()
  const locale = useLocale()

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLangSelect = (lang: string) => {
    const currentPath = window.location.pathname
    const searchParams = window.location.search

    const pathSegments = currentPath.split('/').filter(Boolean)
    pathSegments[0] = lang.toLowerCase()

    const newUrl = `/${pathSegments.join('/')}${searchParams}`
    router.push(newUrl)
    handleClose()
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo.src} alt='Logo' />
        </div>
        <div className={styles.iconalignment}>
          <div onClick={handleClick}>
            <EarthIcon />
          </div>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {LANG_DATA.map((item) => {
              return (
                <MenuItem
                  key={item.lang}
                  selected={item.lang === locale}
                  onClick={() => handleLangSelect(item.lang)}
                >
                  {t(item.label)}
                </MenuItem>
              )
            })}
          </Menu>

          {/* Mobile Menu */}
          <div onClick={() => setToggle(!toggle)}>
            <HumberIcon />
          </div>
        </div>
      </header>
      <MobileMenu setToggle={setToggle} toggle={toggle} />
    </>
  )
}
