import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../redux/modules/counter'
import styles from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  render () {
    return (
        <div className='container'>
          <div className='row'>
            <div className={styles['homepage']}>
              <div className='col-md-9'>
                <h1>Welcome to Joke Quote</h1>
                <h2>
                  Sample Counter:&nbsp;
                  <span className={styles['counter--green']}>{this.props.counter}</span>
                </h2>
                <button className='btn btn-default'
                        onClick={() => this.props.increment(1)}>
                  Increment
                </button>
                <button className='btn btn-default'
                        onClick={this.props.doubleAsync}>
                  Double (Async)
                </button>
                <hr />
                <Link to='/about'>Go To About View</Link>
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

export default connect(mapStateToProps, counterActions)(HomeView)
