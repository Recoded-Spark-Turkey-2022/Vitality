import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import renderer from 'react-test-renderer';
import Booking from '../Booking';
import {store} from "../../../app/store"


test('Booking component renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store} >
    <BrowserRouter>
        <Booking />
    </BrowserRouter>
</Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});