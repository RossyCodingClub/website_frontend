import { Switch, changeTheme, useTheme } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'
function DLSwitch() {
    const {type, isDark} = useTheme()
    const darkMode = useDarkMode(false);
    return <Switch checked={darkMode.value}
    onChange={()=> {darkMode.toggle()}}></Switch>
} 

export default DLSwitch