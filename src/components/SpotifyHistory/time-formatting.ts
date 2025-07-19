const units = [
    { label: 'y', seconds: 31536000 },
    { label: 'm', seconds: 2592000 },
    { label: 'w', seconds: 604800 },
    { label: 'd', seconds: 86400 },
    { label: 'h', seconds: 3600 },
    { label: 'm', seconds: 60 },
    { label: 's', seconds: 1 }
];

// 2025-07-19T19:53:46.328Z

export const timeAgo = (date: Date | number) => {
    const time = Math.floor(
        (new Date().valueOf() - new Date(date).valueOf()) / 1000
    );
    const { interval, unit } = calculateTimeDifference(time);
    return `${interval}${unit}`;
};

const calculateTimeDifference = (time: number) => {
    for (let { label, seconds } of units) {
        const interval = Math.floor(time / seconds);
        if (interval >= 1) {
            return {
                interval: interval,
                unit: label
            };
        }
    }
    return {
        interval: 0,
        unit: ''
    };
};




