import React from "react"

export default function useToggle() {
    const [state, setState] = React.useState(false)
    
    function toggle() {
        setState(prevState => !prevState)
    }
    
    return [state, toggle]
}