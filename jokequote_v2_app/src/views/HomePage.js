import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../redux/modules/counter'
import styles from './HomePage.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class HomePage extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className='container'>
          <div className={styles['homepage']}>
            <div className={styles['titleofhomepage']}>
              <h3>Wellcome to JokeQuote, happy everyday and never feel sad</h3>
              <h5>If you sad, remember has many don't have tooth</h5>
            </div>
            <div className={styles['joke_content_homepage']}>
              <h4>
                Title
              </h4>
              <h5>
                Content Content Content Content Content Content Content Content Content Content Content Content
                Content Content Content Content Content Content Content Content Content Content Content Content
                Content Content Content Content Content Content Content Content Content Content Content Content
                Content Content Content Content Content Content Content Content Content Content Content Content
                Content Content Content Content Content Content Content Content Content Content Content Content
                Content Content Content Content Content Content Content Content Content Content Content Content
              </h5>
            </div>
            <div className={styles['buttonarea']}>
              <button className='btn btn-primary'
                      onClick={() => this.props.increment(1)}>
                Increment
              </button>
              <button className='btn btn-success'
                      onClick={this.props.doubleAsync}>
                Double (Async)
              </button>
            </div>
            <hr />
            <Link to='/view'>Go To Home View</Link>
          </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomePage)
