import React from 'react';

let isApiScriptLoaded;

class YouTube extends React.Component {

    componentDidMount() {

        if (!isApiScriptLoaded) {
            isApiScriptLoaded = new Promise((resolve) => {
                    const tag = document.createElement('script');
                    tag.src = 'https://www.youtube.com/iframe_api';
                    const firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    window.onYouTubeIframeAPIReady = () => resolve(window.YT)
                }
            )
        }

        isApiScriptLoaded.then((YT) => {
            this.player = new YT.Player(this.playerAnchor, {
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
        });
    };

    onPlayerReady = (e) => {
        if (typeof this.props.onReady === 'function') {
            this.props.onReady(e)
        }
    };

    onPlayerStateChange = (e) => {
        if (typeof this.props.onStateChange === 'function') {
            this.props.onStateChange(e)
        }
    };

    onPlayerPlaybackQualityChange = (e) => {
        if (typeof this.props.onPlaybackQualityChange === 'function') {
            this.props.onPlaybackQualityChange(e)
        }
    };

    onPlayerPlaybackRateChange = (e) => {
        if (typeof this.props.onPlaybackRateChange === 'function') {
            this.props.onPlaybackRateChange(e)
        }
    };

    onPlayerApiChange = (e) => {
        if (typeof this.props.onApiChange === 'function') {
            this.props.onApiChange(e)
        }
    };

    onPlayerError = (e) => {
        if (typeof this.props.onError === 'function') {
            this.props.onError(e)
        }
    };

    render() {
        return (
            <div ref={(anchor) => {this.playerAnchor = anchor}}></div>
        )
    }
}

export default YouTube;