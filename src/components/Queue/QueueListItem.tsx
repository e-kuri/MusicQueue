import React from 'react';

interface QueueListItemProps {
    url: string
} 

const QueueListItem = (props: QueueListItemProps) => {
    const {
        url
    } = props;

    return(
        <div>
            {url}
        </div>
    );
};

export default QueueListItem;