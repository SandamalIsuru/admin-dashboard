import { applyTheme } from './themes/utils'
import { dark, light } from './themes'
import { useEffect, useState } from 'react'
import { AppContext } from './context'
import Routs from './config/Routs'

function App() {
  const selectedThemeInStorage = localStorage.getItem('SELECTED_THEME');
  const [selectedTheme, setSelectedTheme] = useState(selectedThemeInStorage)

  useEffect(() => {
    applyTheme(selectedTheme ? selectedTheme === 'dark' ? dark : light : dark)
  }, [selectedTheme])

  return (
      <AppContext.Provider value={{ selectedTheme, setSelectedTheme }}>
        <Routs />
      </AppContext.Provider>
  )
}

export default App
