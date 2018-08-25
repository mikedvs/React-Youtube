import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    // {video }same as: const video = props.video;

    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <div className="media-object">
                        <img src={imageUrl} />
                    </div>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;