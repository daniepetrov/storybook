import React from 'react';
import PropTypes from 'prop-types';

let isApiScriptLoaded;

class YoutubeVideo extends React.Component {

    anchor = React.createRef();

    onPlayerReady = (e) => this.props.onReady && this.props.onReady(e);
    onPlayerStateChange = (e) => this.props.onStateChange && this.props.onStateChange(e);
    onPlayerPlaybackQualityChange = (e) => this.props.onPlaybackQualityChange && this.props.onPlaybackQualityChange(e);
    onPlayerPlaybackRateChange = (e) => this.props.onPlaybackRateChange && this.props.onPlaybackRateChange(e);
    onPlayerApiChange = (e) => this.props.onApiChange && this.props.onApiChange(e);
    onPlayerError = (e) => this.props.onError && this.props.onError(e);

    componentDidMount() {

        if (!isApiScriptLoaded) {
            isApiScriptLoaded = new Promise((resolve, reject) => {
                const apiScripTag = document.createElement('script');
                apiScripTag.src = 'https://www.youtube.com/iframe_api';

                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(apiScripTag, firstScriptTag);

                apiScripTag.onload = () => {
                    window.onYouTubeIframeAPIReady = () => resolve(window.YT)
                };

                apiScripTag.onerror = () => {
                    reject();
                }
            }
            )
        }

        isApiScriptLoaded.then((YT) => {
            this.player = new YT.Player(this.anchor.current, {
                width: this.props.width || 640,
                height: this.props.height || 360,
                videoId: this.props.videoId,
                playerVars: {
                    autoplay: this.props.autoPlay || 0,
                    cc_load_policy: this.ccLoadPolicy || null,
                    color: this.props.color || null,
                    controls: this.props.controls || null,
                    disablekb: this.props.disableKb || null,
                    enablejsapi: this.props.disableJsApi || null,
                    end: this.props.end || null,
                    fs: this.props.fs || null,
                    hl: this.props.hl || null,
                    iv_load_policy: this.props.loadPolicy || 3,
                    list: this.props.list || null,
                    listType: this.props.listType || null,
                    loop: this.props.loop || 1,
                    modestbranding: this.props.modestBranding || null,
                    origin: this.props.origin || null,
                    playlist: this.props.videoId,
                    playsinline: this.props.playsInline || null,
                    rel: this.props.rel || 0,
                    showinfo: this.props.showinfo || 0,
                    start: this.props.start || null

                },
                events: {
                    onStateChange: this.onPlayerStateChange,
                    onReady: this.onPlayerReady,
                    onPlaybackQualityChange: this.onPlayerPlaybackQualityChange,
                    onPlaybackRateChange: this.onPlayerPlaybackRateChange,
                    onApiChange: this.onPlayerApiChange,
                    onError: this.onPlayerError
                }
            })
        }).catch(() => {
            console.error('Что-то пошло не так, видео не доступно!');
        });
    };

    render() {
        return (
            <div>
                <div ref={this.anchor}></div>
            </div>
        )
    }
}

YoutubeVideo.propTypes = {
    onReady: PropTypes.func,
    onStateChange: PropTypes.func,
    onPlaybackQualityChange: PropTypes.func,
    onPlaybackRateChange: PropTypes.func,
    onApiChange: PropTypes.func,
    onError: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    videoId: PropTypes.string.isRequired,
    autoplay: PropTypes.number,
    cc_load_policy: PropTypes.number,
    color: PropTypes.string,
    controls: PropTypes.number,
    disablekb: PropTypes.number,
    enablejsapi: PropTypes.number,
    end: PropTypes.number,
    fs: PropTypes.number,
    hl: PropTypes.string,
    iv_load_policy: PropTypes.number,
    list: PropTypes.string,
    listType: PropTypes.string,
    loop: PropTypes.number,
    modestbranding: PropTypes.number,
    origin: PropTypes.string,
    playlist: PropTypes.string,
    playsinline: PropTypes.number,
    rel: PropTypes.number,
    showinfo: PropTypes.number,
    start: PropTypes.number,
}

export default YoutubeVideo;