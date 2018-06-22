import React from 'react';
import styled, {keyframes} from 'styled-components';
import YouTube from './YouTube/index';

// styles

const Root = styled.div`
  position: relative;
`;

const Video = styled.div`
    position: relative;
    height: 0;
    padding-bottom: 56.2%;
    overflow: hidden;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
    }
`;

const Pic = styled.div`
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    img {
        width: 100%;
        height: auto
    }
`;

const Heading = styled.div`
    text-align:left;
`;

const fade = keyframes`
     0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

const IconPlay = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 51px;
    width: 51px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    transition: transform 0.4s;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0z' fill='%23${props => props.iconColor && ~props.iconColor.indexOf('#') ? props.iconColor.slice(1) : '2a7cfd'}'/%3e%3cpath d='M16.91 11.25a.89.89 0 0 1 0 1.47l-6.82 4.49a.66.66 0 0 1-.34.12.74.74 0 0 1-.38-.12 1 1 0 0 1-.37-.74v-9a.89.89 0 0 1 .34-.74.6.6 0 0 1 .72 0z' fill='%23ffffff'/%3e%3c/svg%3e");

    &:hover,
    &:focus,
    &:active {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0z' fill='%23333333'/%3e%3cpath d='M16.91 11.25a.89.89 0 0 1 0 1.47l-6.82 4.49a.66.66 0 0 1-.34.12.74.74 0 0 1-.38-.12 1 1 0 0 1-.37-.74v-9a.89.89 0 0 1 .34-.74.6.6 0 0 1 .72 0z' fill='%23ffffff'/%3e%3c/svg%3e");
    }
`;

const IconPlayLoading = IconPlay.extend`
    transform: translate(-50%, -50%) scale(1.3);
    transition: transform 0.4s;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 815 815'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%23ffffff%7d%3c/style%3e%3c/defs%3e%3cpath d='M0 407C0 182 182 0 407 0s408 182 408 407-183 408-408 408S0 632 0 407z'/%3e%3cpath class='cls-1' d='M548 249v317a23.69 23.69 0 0 1-24 24h-58a24.33 24.33 0 0 1-24-24V249a23.69 23.69 0 0 1 24-24h58c14 0 24 10 24 24zM373 249v317a24.33 24.33 0 0 1-24 24h-59a24.33 24.33 0 0 1-24-24V249a23.69 23.69 0 0 1 24-24h59a23.69 23.69 0 0 1 24 24z'/%3e%3c/svg%3e");
    animation: ${fade} 0.4s;
    opacity: 0;
`;


class YoutubeVideo extends React.Component {

    state = {
        isPlaying: false,
        target: null
    };


    handleVideoMount = () => {
        this.setState({
            isPlaying: true
        });
    };

    playYoutubeVideo = (e) => {
      e.target.playVideo();
    };

    render() {

        const videoImg = this.props.videoImg || `https://i.ytimg.com/vi/${this.props.videoId}/sddefault.jpg`;

        return (
            <Root>
                <Video>
                    <Pic>
                        <img src={videoImg} alt=""/>
                        {this.state.isPlaying ?
                            <IconPlayLoading onClick={this.handleVideoMount}/> :
                            <IconPlay iconColor={this.props.iconColor} onClick={this.handleVideoMount}/>}
                    </Pic>
                    {this.state.isPlaying && (
                        <YouTube videoId={this.props.videoId} autoPlay={1} />
                    )}
                </Video>
                {this.props.videoTitle && <Heading>{this.props.videoTitle}</Heading>}
            </Root>
        )
    }
}

export default YoutubeVideo;