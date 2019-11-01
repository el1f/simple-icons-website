import { TextField, Typography } from '@material-ui/core';
// import IconCardGrid from 'components/IconCardGrid';
import IconExplorer from 'components/IconExplorer';
import React, { Suspense, useState } from 'react';
import SimpleIcons, { SimpleIcon } from 'simple-icons';
import { Wrapper } from 'styles/Layout';

import { HomeContainer, IconBrowser, Sidebar } from './styles';

const Home = () => {
    const IconCardGrid = React.lazy(() => import('components/IconCardGrid'));

    const [query, setQuery] = useState('');
    const [activeIcon, setActiveIcon] = useState<null | SimpleIcon>(null);
    const icons = Object.values(SimpleIcons);

    return (
        <Wrapper>
            <HomeContainer>
                <Sidebar>
                    <TextField
                        label="Search for"
                        variant="filled"
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        fullWidth
                    />
                </Sidebar>
                <IconBrowser>
                    <div>
                        <Typography variant="h1">{`${icons.length} Free SVG icons for popular brands.`}</Typography>
                        <Suspense fallback={<p>Loading icons</p>}>
                            <IconCardGrid
                                icons={icons.filter(
                                    ({ title }) =>
                                        title.toLowerCase().indexOf(query.toLowerCase()) > -1,
                                )}
                                onIconClick={setActiveIcon}
                                compress={Boolean(activeIcon)}
                            />
                        </Suspense>
                    </div>
                    {activeIcon && (
                        <IconExplorer
                            name={activeIcon.title}
                            icon={activeIcon.svg}
                            onClose={() => setActiveIcon(null)}
                        />
                    )}
                </IconBrowser>
            </HomeContainer>
        </Wrapper>
    );
};

export default Home;
