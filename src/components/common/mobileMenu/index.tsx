import React from 'react'
import Link from 'next/link'
import styles from './mobileMenu.module.scss'
import CloseIcon from '@/components/icons/closeIcon'
import OrangeRightIcon from '@/components/icons/orangeRightIcon'
import classNames from 'classnames'
import { MOBILE_MENU_ITEMS } from '@/utils/_constans'
import { useParams } from 'next/navigation'

interface MobileMenuProps {
  toggle: boolean
  setToggle: (toggle: boolean) => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ toggle, setToggle }) => {
  const params = useParams()
  return (
    <div className={classNames(styles.mobileMenu, toggle ? styles.show : styles.hide)}>
      <div className={styles.closeIcon} onClick={() => setToggle(false)}>
        <CloseIcon />
      </div>
      <div className={styles.subMenuList}>
        <div className={styles.singleMenualignment}>
          {MOBILE_MENU_ITEMS.map(({ name, path }) => {
            return (
              <Link
                key={path}
                href={`/${params?.locale}${path}`}
                className={styles.menu}
                onClick={() => setToggle(false)}
              >
                <OrangeRightIcon />
                <span>{name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
