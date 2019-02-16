import React from 'react';
import QueueListItem from './QueueListItem';

interface QueueListProps {
    urls: string[]
}

const getQueueItems = (urls: string[]) => 
    urls.map(it => <QueueListItem url={it}/>)


const QueueList = (props: QueueListProps) => {
    const {
        urls
    } = props;
    return { getQueueItems(urls) };
}

export default QueueList;