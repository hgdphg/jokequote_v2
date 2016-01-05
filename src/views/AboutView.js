import { Link } from 'react-router'
import styles from './HomeView.scss'

export class AboutView extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className={styles['homepage']}>
            <div className='col-md-9'>
              <h1>This is the about view!</h1>
              <hr />
              <Link to='/'>Back To Home View</Link>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='well sidebar-nav'>
              <ul className = 'nav nav-list'>
                <li className='nav-header'>Sidebar</li>
                <li><Link to='/'>HomePage</Link></li>
                <li><Link to='/view'>HomeView</Link></li>
                <li><Link to='/about'>About</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutView
