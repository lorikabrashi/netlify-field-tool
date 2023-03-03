import Root from '../pages/Root'
import Overview from '../pages/Single/Overview.page'

const routerData = [
  {
    elem: <Root />,
    index: true,
  },
  {
    elem: <Overview />,
    path: '/site-overview/:slug',
  },
]

export default routerData
