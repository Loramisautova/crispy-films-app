import React from 'react';

import { HoverMenu } from '../HoverMenu';

export const HeaderMenu: React.FC = () => (
    <>
        <HoverMenu
            id="movies-menu"
            title="Movies"
            items={[
                {
                    title: 'Popular',
                },
                {
                    title: 'Now playing',
                },
                {
                    title: 'Upcoming',
                },
                {
                    title: 'Top rated',
                },
            ]}
        />
        <HoverMenu
            id="tv-shows-menu"
            title="TV Shows"
            items={[
                {
                    title: 'Popular',
                },
                {
                    title: 'Airing today',
                },
                {
                    title: 'On TV',
                },
                {
                    title: 'Top rated',
                },
            ]}
        />
        <HoverMenu
            id="people-menu"
            title="People"
            items={[
                {
                    title: 'Popular people',
                },
            ]}
        />
    </>
);
