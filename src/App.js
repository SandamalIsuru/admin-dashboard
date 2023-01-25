import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout'
import Dashboard from './components/dashboard'
import Documentation from './components/documentation'
import Marketplace from './components/marketplace'
import Portfolio from './components/portfolio'
import { applyTheme } from './themes/utils'
import { dark, light } from './themes'
import { useEffect, useState } from 'react'
import { AppContext } from './context'

function App() {
  const selectedThemeInStorage = localStorage.getItem('SELECTED_THEME');
  const [selectedTheme, setSelectedTheme] = useState(selectedThemeInStorage)

  useEffect(() => {
    applyTheme(selectedTheme ? selectedTheme === 'dark' ? dark : light : dark)
  }, [selectedTheme])

  return (
    <Router>
      <AppContext.Provider value={{ selectedTheme, setSelectedTheme }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="portfolio">
              <Route index element={<Portfolio />} />
            </Route>
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="documentation" element={<Documentation />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </Router>
  )
}

export default App
