import * as React from 'react';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Editor from '@monaco-editor/react';

const defaultValue = {
    version: '2.2.0',
    platform: {
        name: 'electron',
        autoStart: true,
        hardwareAcceleration: true,
    },
    status: {
        debug: false,
        done: true,
    },
    constants: {
        address: {
            assets: 'https://devt7g9tfxj67.cloudfront.net',
            billing: 'https://api.fusion.usign.io/pairing/$$hashCode$$/billing',
            config: 'https://api.fusion.usign.io/pairing/$$hashCode$$/config',
            heartbeat: 'https://api.fusion.usign.io/pairing/$$hashCode$$/heartbeat',
            publisher: 'https://api.fusion.usign.io/publish/$$publishId$$/result?hashcode=$$hashCode$$',
        },
        polling: {
            config: 300000,
            heartbeat: 120000,
            publisher: 600000,
            billing: 300000,
            location: 300000,
            configTimeout: 150000,
            heartbeatTimeout: 60000,
            heartbeatCounterLessFrequently: 30,
            billingTimeout: 150000,
            billingTimeRange: [
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 0,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 1,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 2,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 3,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 4,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 5,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 6,
                },
            ],
            publisherTimeout: 300000,
            publisherTimeRange: [
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 0,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 1,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 2,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 3,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 4,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 5,
                },
                {
                    start: '00:00',
                    end: '23:59',
                    dayOfWeek: 6,
                },
            ],
            cacheDownloadPolling: 600000,
            cacheCleanupPolling: 3600000,
            triggerDebounce: 1000,
        },
    },
    assetsManager: {
        enable: true,
        storage: 'internal',
        location: '',
        simultaneousDownloads: 3,
        maxBandwidth: 0,
        downloadTimeRange: [
            {
                start: '00:00',
                end: '23:59',
                dayOfWeek: 0,
            },
            {
                start: '00:00',
                end: '23:59',
                dayOfWeek: 1,
            },
            {
                start: '00:00',
                end: '23:59',
                dayOfWeek: 2,
            },
            {
                start: '00:00',
                end: '23:59',
                dayOfWeek: 3,
            },
            {
                start: '00:00',
                end: '23:59',
                dayOfWeek: 4,
            },
            {
                start: '00:00',
                end: '23:59',
                dayOfWeek: 5,
            },
            {
                start: '00:00',
                end: '23:59',
                dayOfWeek: 6,
            },
        ],
        connectionTypeAllowed: ['wifi', 'ethernet', 'cellular', 'unknown'],
        allowedMediaTypes: ['audio', 'image', 'other', 'video', 'url'],
        maximumAllowedSize: 0,
        minimumFreeSpace: 314572800,
    },
    webServer: {
        enable: true,
        address: '127.0.0.1',
        port: 8888,
        ssl: {
            enable: false,
            embedded: false,
        },
        staticsAssets: [],
        tokens: ['teste'],
        cors: {
            enable: true,
            allowedOrigins: ['*'],
        },
    },
    webSocket: {
        enable: false,
        path: '',
        tokens: [],
    },
    windowManager: [
        {
            id: 'main',
            title: 'Totem Cotia',
            background: 'green',
            manualMode: {
                enable: true,
                location: {
                    type: 'proportional',
                    startX: 0.8,
                    startY: 0,
                    endX: 1,
                    endY: 0.2,
                },
                clicksMaxInterval: 1000,
                numberOfClicks: 5,
            },
            frameRate: 60,
            frame: {
                border: false,
                resizable: true,
            },
            alwaysOnTop: true,
            screenOrientation: 'auto',
            screenType: {
                type: 'sized',
                top: 0,
                left: 0,
                width: 720,
                height: 1280,
            },
            forcedViewRotation: 0,
            layoutManager: [
                {
                    id: '1',
                    name: 'Banner Superior',
                    noShow: false,
                    kioskMode: false,
                    decoration: {
                        zIndex: 0,
                        background: '#000000',
                    },
                    size: {
                        type: 'proportional',
                        top: 0,
                        left: 0,
                        bottom: 0.7395,
                        right: 0,
                    },
                    transition: {
                        url: 1000,
                        audio: 1000,
                        video: 1000,
                        image: 1000,
                        effect: 'linear',
                        delay: 300,
                    },
                    zoom: {
                        image: 'stretch',
                        video: 'stretch',
                    },
                    content: {
                        contentType: 'publisher',
                        id: '62f4f4af3377ae0014683bd6',
                    },
                    eventTrigger: [],
                },
                {
                    id: '2',
                    name: 'Frame Principal',
                    noShow: false,
                    kioskMode: true,
                    decoration: {
                        zIndex: 0,
                        background: '#000000',
                    },
                    size: {
                        type: 'proportional',
                        top: 0.276,
                        left: 0,
                        bottom: 0.3489,
                        right: 0,
                    },
                    transition: {
                        url: 1000,
                        audio: 1000,
                        video: 1000,
                        image: 1000,
                        effect: 'linear',
                        delay: 300,
                    },
                    zoom: {
                        image: 'stretch',
                        video: 'stretch',
                    },
                    content: {
                        contentType: 'publisher',
                        id: '63233791c35357001415d795',
                    },
                    eventTrigger: [],
                },
                {
                    id: '3',
                    name: 'Banner Principal',
                    noShow: false,
                    kioskMode: false,
                    decoration: {
                        zIndex: 0,
                        background: '#000000',
                    },
                    size: {
                        type: 'proportional',
                        top: 0.6354,
                        left: 0,
                        bottom: 0.2979,
                        right: 0,
                    },
                    transition: {
                        url: 1000,
                        audio: 1000,
                        video: 1000,
                        image: 1000,
                        effect: 'linear',
                        delay: 300,
                    },
                    zoom: {
                        image: 'stretch',
                        video: 'stretch',
                    },
                    content: {
                        contentType: 'publisher',
                        id: '632337abed07360014d5b4c2',
                    },
                    eventTrigger: [],
                },
                {
                    id: '4',
                    name: 'Banner Inferior',
                    noShow: false,
                    kioskMode: false,
                    decoration: {
                        zIndex: 0,
                        background: '#000000',
                    },
                    size: {
                        type: 'proportional',
                        top: 0.7395,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    },
                    transition: {
                        url: 1000,
                        audio: 1000,
                        video: 1000,
                        image: 1000,
                        effect: 'linear',
                        delay: 300,
                    },
                    zoom: {
                        image: 'stretch',
                        video: 'stretch',
                    },
                    content: {
                        contentType: 'publisher',
                        id: '632337c57a1381001313afea',
                    },
                    eventTrigger: [],
                },
                {
                    id: '5',
                    name: 'Trigger 01',
                    noShow: true,
                    kioskMode: false,
                    decoration: {
                        zIndex: 0,
                        background: '#000000',
                    },
                    size: {
                        type: 'proportional',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    },
                    transition: {
                        url: 1000,
                        audio: 1000,
                        video: 1000,
                        image: 1000,
                        effect: 'linear',
                        delay: 300,
                    },
                    zoom: {
                        video: 'stretch',
                        image: 'stretch',
                    },
                    content: {
                        contentType: 'publisher',
                        id: '6328eb20f4e4fd0015576a69',
                    },
                    eventTrigger: [],
                },
            ],
        },
    ],
    carouselManager: {
        playOnlyAfterLoad: false,
        emptyCarousel: 1000,
    },
    proofOfPlayManager: {
        maxBillingRecords: 50,
    },
    triggers: [],
    meta: {},
    tags: [],
    geo: {
        isEnable: false,
        latitude: 0,
        longitude: 0,
    },
};

export default function EditorMonaco() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ p: 1 }}>
                <Stack>
                    <Editor
                        theme="vs-dark"
                        line={1}
                        height="600px"
                        defaultValue={JSON.stringify(defaultValue, null, 4)}
                        width="900px"
                        language="json"
                        options={{
                            minimap: {
                                enabled: false,
                            },
                        }}
                    />
                </Stack>
            </Box>
        </React.Fragment>
    );
}
