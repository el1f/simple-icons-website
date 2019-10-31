import IconCard from 'components/IconCard';
import React from 'react';
import SimpleIcons from 'simple-icons';
import { Wrapper } from 'styles/Layout';

import { Grid, HomeContainer, Sidebar } from './styles';

const Home = () => {
    const Google = SimpleIcons.get('google');

    return (
        <Wrapper>
            <HomeContainer>
                <Sidebar>Side</Sidebar>
                <Grid>
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                    <IconCard name={Google.title} icon={Google.svg} color={Google.hex} />
                </Grid>
            </HomeContainer>
        </Wrapper>
    );
};

export default Home;
