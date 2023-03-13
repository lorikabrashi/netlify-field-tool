import Root from '../pages/Root'
import Collection from '../pages/Single/Collection.page'
import Overview from '../pages/Single/Overview.page'

const routerData = [
  {
    elem: <Root />,
    index: true,
  },
  {
    elem: <Overview />,
    path: '/site/:slug',
  },
  {
    elem: <Collection />,
    path: '/site/:slug/collection/:collection',
  },
  
]

export default routerData
