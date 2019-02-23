import React from 'react';
import QueueListItem from './QueueListItem';

interface QueueListProps {
    urls: string[]
}

const getQueueItems = (urls: string[]) => 
    urls.map( (it, indx) => <QueueListItem 
        url={it}
        key={indx}/>)


const QueueList = (props: QueueListProps) => {
    const {
        urls
    } = props;
    console.log(urls);
    return getQueueItems(urls);
}

export default QueueList;