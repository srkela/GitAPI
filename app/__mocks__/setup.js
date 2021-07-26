import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native-gesture-handler/jestSetup';

configure({adapter: new Adapter()});
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
