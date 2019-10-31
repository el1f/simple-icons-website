import { TextField, Typography } from '@material-ui/core';
import IconCard from 'components/IconCard';
import React, { useState } from 'react';
import SimpleIcons from 'simple-icons';
import { Field } from 'styles/Fields';
import { Wrapper } from 'styles/Layout';

import { Grid, HomeContainer, Sidebar } from './styles';

const Home = () => {
    const [query, setQuery] = useState('');
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
                <div>
                    <Typography variant="h1">{`${icons.length} Free SVG icons for popular brands`}</Typography>
                    <Grid>
                        {icons
                            .slice(0, 50)
                            .filter(
                                ({ title }) =>
                                    title.toLowerCase().indexOf(query.toLowerCase()) > -1,
                            )
                            .map(
                                ({ slug, title, svg, hex }) =>
                                    slug && (
                                        <IconCard key={slug} name={title} icon={svg} color={hex} />
                                    ),
                            )}
                    </Grid>
                </div>
            </HomeContainer>
        </Wrapper>
    );
};

export default Home;
