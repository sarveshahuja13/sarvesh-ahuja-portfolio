'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Laptop } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [currentIcon, setCurrentIcon] = React.useState(<Laptop className="h-5 w-5" />)

  React.useEffect(() => {
    switch (theme) {
      case 'light':
        setCurrentIcon(<Sun className="h-5 w-5" />)
        break
      case 'dark':
        setCurrentIcon(<Moon className="h-5 w-5" />)
        break
      default:
        setCurrentIcon(<Laptop className="h-5 w-5" />)
        break
    }
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="text-foreground/70 hover:text-accent hover:bg-accent/10 transition-colors duration-300"
    >
      {currentIcon}
    </Button>
  )
}
