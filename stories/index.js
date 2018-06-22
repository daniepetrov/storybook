import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from './components/Button';
import Logo from './components/Logo';
import Phone from './components/Phone';
import Navbar from './components/Navbar';
import YouTube from './components/YoutubeVideo/YouTube';
import YoutubeVideo from './components/YoutubeVideo';

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
storiesOf('YouTube', module)
    .add('YouTube', () => (
        <div>
            <YouTube videoId={'FhMghsqunys'}/>
        </div>
    ));

storiesOf('VideoYoutube', module)
    .add('VideoYoutube', () => (
        <YoutubeVideo
            videoId={'FhMghsqunys'}
        />
    ));