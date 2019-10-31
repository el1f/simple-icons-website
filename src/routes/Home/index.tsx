import { Typography } from '@material-ui/core';
import IconCard from 'components/IconCard';
import React from 'react';
import SimpleIcons from 'simple-icons';
import { Wrapper } from 'styles/Layout';

import { Grid, HomeContainer, Sidebar } from './styles';

const Home = () => {
    const icons = Object.values(SimpleIcons);
    return (
        <Wrapper>
            <HomeContainer>
                <Sidebar>Side</Sidebar>
                <div>
                    <Typography variant="h1">{`${icons.length} Free SVG icons for popular brands`}</Typography>
                    <Grid>
                        {icons.map(
                            ({ slug, title, svg, hex }) =>
                                slug && <IconCard key={slug} name={title} icon={svg} color={hex} />,
                        )}
                    </Grid>
                </div>
            </HomeContainer>
        </Wrapper>
    );
};

export default Home;
