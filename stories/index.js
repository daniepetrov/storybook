import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from './components/Button';
import Logo from './components/Logo';
import Phone from './components/Phone';
import Navbar from './components/Navbar';
import YoutubeVideo from './components/YoutubeVideo';
import YoutubeVideoWrapper from './components/YoutubeVideoWrapper';

storiesOf('Button', module)
    .add('Landing button', () => (
        <Button onClick={action('clicked')}>Заказать</Button>
    ));

storiesOf('Logo', module)
    .add('Logo', () => (
        <Logo/>
    ));

storiesOf('Phone', module)
    .add('Phone', () => (
        <Phone/>
    ));

storiesOf('Navbar', module)
    .add('Navbar', () => (
        <Navbar/>
    ))
    .add('NavbarFixed', () => (
        <Navbar fixedOnScroll/>
    ));
storiesOf('YoutubeVideo', module)
    .add('YoutubeVideo', () => (
        <YoutubeVideo videoId={'FhMghsqunys'}/>
    ));

storiesOf('YoutubeVideoWrapper', module)
    .add('YoutubeVideoWrapper', () => (
        <YoutubeVideoWrapper
            videoId={'FhMghsqunys'}
        />
    ));