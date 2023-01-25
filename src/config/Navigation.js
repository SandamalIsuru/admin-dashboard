import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export const SIDEBAR_NAVIGATIONS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <DashboardOutlinedIcon style={{fontSize: '16px'}}/>
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    path: '/portfolio',
    icon: <DonutSmallOutlinedIcon style={{fontSize: '16px'}}/>,
    child: [
      {
      key: 'portfolio 1',
      label: 'Portfolio 1',
      path: '/portfolio',
      icon: <DonutSmallOutlinedIcon style={{fontSize: '16px'}}/>,
    }
  ]
  },
  {
    key: 'marketplace',
    label: 'Marketplace',
    path: '/marketplace',
    icon: <ShoppingCartOutlinedIcon style={{fontSize: '16px'}} />
  },
  {
    key: 'documentation',
    label: 'Documentation',
    path: '/documentation',
    icon: <DescriptionOutlinedIcon style={{fontSize: '16px'}}/>
  }
]
