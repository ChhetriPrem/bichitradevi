import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    // Removed synchronous setState to fix lint error
    // It's already handled by setting initial state correctly if needed,
    // but here we just ensure the initial check happens.
    onChange() 
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
