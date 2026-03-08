import { ThemeProvider } from './context/ThemeConxtext';
import { Routers } from './routers'

function App() {
  return(
    <ThemeProvider>
      <Routers/>
    </ThemeProvider>
  )
}

export default App;