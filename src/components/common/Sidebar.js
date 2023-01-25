import classNames from 'classnames'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import { SIDEBAR_NAVIGATIONS } from '../../config/Navigation'
import { Drawer } from '@mui/material'

const SidebarLink = ({ nav, isChild=false }) => {
  const { pathname } = useLocation()
  const [subNavOpened, setSubNavOpened] = useState(false)

  return (
    <>
    <Link
      to={!nav.child && nav.path}
      className={classNames(
        'flex gap-2 relative items-center rounded-xl my-1 p-2 hover:bg-hoverBackground hover:p-2 hover:text-textPrimary hover:rounded-xl',
        pathname === nav.path && !nav.child ? 'bg-selectedBg text-textPrimary rounded-xl' : 'text-textSecondary',
        isChild && 'ml-2'
      )}
      onClick={() => nav.child && setSubNavOpened(!subNavOpened)}
    >
      <div
        className={classNames(
          'flex items-center justify-center w-6 h-6 bg-logoBg rounded-lg border border-0.1 border-borderColor',
          pathname === nav.path && !nav.child ? 'bg-selectedLogoBg text-textPrimary' : 'text-iconSecondary'
        )}
      >
        {nav.icon}
      </div>
      <div className='text-textSecondary'>
      {nav.label}
      </div>
      <div className="absolute right-0">
        {nav.child ? (
          subNavOpened ? (
            <KeyboardArrowUpOutlinedIcon />
          ) : (
            <KeyboardArrowDownOutlinedIcon />
          )
        ) : null}
      </div>
    </Link>
    {subNavOpened && nav.child.map((item) => <SidebarLink isChild={true} key={item.key} nav={item} />)}
    </>
  )
}

const Sidebar = ({ drawerWidth, isSidebarOpened, setIsSidebarOpened }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      PaperProps={{
        sx: {
          backgroundColor: 'var(--theme-secondary)'
        }
      }}
      variant="persistent"
      anchor="left"
      open={isSidebarOpened}
      onClose={() => setIsSidebarOpened(false)}
    >
      <div className="flex flex-col h-full px-6 py-3">
        <div className="flex gap-2 items-center py-4 text-textPrimary">
          <div className="flex items-center justify-center w-10 h-10 bg-logoBg rounded-xl">
            <StorefrontIcon color="primary" />
          </div>
          <span className="px-1">Scalyr</span>
        </div>
        <div className="flex flex-1 flex-col py-4">
          {SIDEBAR_NAVIGATIONS.map((nav) => (
            <SidebarLink key={nav.key} nav={nav} />
          ))}
        </div>
        <hr className="bg-logoBg h-0.4 text-logoBg my-6" />
        <Link
          to={'/logout'}
          className={classNames(
            'flex gap-2 items-center my-2 py-2 px-3 text-textSecondary hover:bg-hoverBackground hover:px-3 hover:text-textPrimary hover:rounded'
          )}
        >
          <div
            className={classNames(
              'flex items-center text-iconSecondary justify-center w-6 h-6 bg-logoBg rounded-lg border border-0.1 border-borderColor'
            )}
          >
            <LogoutOutlinedIcon style={{ fontSize: '16px' }} />
          </div>
          logout
        </Link>
      </div>
    </Drawer>
  )
}

export default Sidebar
