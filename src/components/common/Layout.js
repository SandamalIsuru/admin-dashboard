import { styled } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const Layout = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(true)

  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden text-textPrimary">
      <AppBar position="fixed" open={isSidebarOpened}>
        <Header isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} />
      </AppBar>
      <Sidebar drawerWidth={drawerWidth} isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} />
      <Main className="flex flex-col bg-primary text-textPrimary w-screen h-screen item-center" open={isSidebarOpened}>
        <div className="pt-10">{<Outlet />}</div>
      </Main>
    </div>
  )
}

export default Layout
