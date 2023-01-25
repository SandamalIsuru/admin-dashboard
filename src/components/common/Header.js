import { IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import React, { useContext } from 'react'
import { AppContext } from '../../context'

const Header = ({ isSidebarOpened, setIsSidebarOpened }) => {
  const { selectedTheme, setSelectedTheme } = useContext(AppContext)

  const isDarkThemeApplied = () => {
    return selectedTheme === 'dark' ? true : false
  }

  return (
    <Toolbar className="bg-primary text-textPrimary">
      <div className="flex w-full">
        <div className="flex-1">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsSidebarOpened(!isSidebarOpened)}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="">
          <IconButton
            color="inherit"
            aria-label="change theme"
            onClick={() => {
              const theme = isDarkThemeApplied() ? 'light' : 'dark';
              setSelectedTheme(theme);
              localStorage.setItem("SELECTED_THEME", theme);
            }}
            edge="start"
            sx={{ mr: 2 }}
          >
            {isDarkThemeApplied() ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </div>
      </div>
    </Toolbar>
  )
}

export default Header
