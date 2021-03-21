import { connect } from 'react-redux';
import { StoreState } from '../../../redux/reducers/store';
import App from '../App';

const mapStateTpProps = (state: StoreState) => {
 return state
}

const AppContainer = connect(mapStateTpProps)(App)

export default AppContainer;
