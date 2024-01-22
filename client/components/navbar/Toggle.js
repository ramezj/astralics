import { useTheme } from 'next-themes'

export const Toggle = () => {
    const { theme, setTheme } = useTheme()

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}