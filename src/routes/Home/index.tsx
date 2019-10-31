import { TextField, Typography } from '@material-ui/core';
import IconCard from 'components/IconCard';
import IconExplorer from 'components/IconExplorer';
import React, { useState } from 'react';
import SimpleIcons, { SimpleIcon } from 'simple-icons';
import { Field } from 'styles/Fields';
import { Wrapper } from 'styles/Layout';

import { Grid, HomeContainer, IconBrowser, Sidebar } from './styles';

const Home = () => {
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
                        <Grid compress={Boolean(activeIcon)}>
                            {icons
                                .filter(
                                    ({ title }) =>
                                        title.toLowerCase().indexOf(query.toLowerCase()) > -1,
                                )
                                .map(icon => {
                                    const { slug, title, svg, hex } = icon;
                                    return (
                                        slug && (
                                            <IconCard
                                                key={slug}
                                                name={title}
                                                icon={svg}
                                                color={hex}
                                                onClick={() => setActiveIcon(icon)}
                                            />
                                        )
                                    );
                                })}
                        </Grid>
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
