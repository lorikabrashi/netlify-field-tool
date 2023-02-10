import Root from '../pages/Root'
import SingleSite from '../pages/SingleSite'

const routerData = [
  {
    elem: <Root />,
    index: true,
  },
  {
    elem: <SingleSite />,
    path: '/site/:slug',
  },
]

export default routerData
