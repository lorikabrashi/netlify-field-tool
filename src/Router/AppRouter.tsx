import { Routes, Route } from 'react-router-dom'
import Error from '../pages/Error'
import Layout from './Layout'
import routerData from './routerData'

interface Props {}

const AppRouter: React.FC<Props> = () => {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        {routerData.map((routeObj, i) => (
          <Route key={i} element={routeObj.elem} index={routeObj.index} path={routeObj.path} />
        ))}
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter
