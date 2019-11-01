import IconCard from 'components/IconCard';
import React from 'react';
import { SimpleIcon } from 'simple-icons';

import { Grid } from './styles';

type IconCardGridProps = {
    icons?: SimpleIcon[];
    compress?: boolean;
    onIconClick: (icon: SimpleIcon) => void;
};

const IconCardGrid: React.FC<IconCardGridProps> = ({
    icons,
    compress,
    onIconClick,
}: IconCardGridProps) => {
    return (
        <Grid compress={compress}>
            {icons &&
                icons.map(icon => {
                    const { slug, title, svg, hex } = icon;
                    return (
                        slug && (
                            <IconCard
                                key={slug}
                                name={title}
                                icon={svg}
                                color={hex}
                                onClick={() => onIconClick(icon)}
                            />
                        )
                    );
                })}
        </Grid>
    );
};

export default IconCardGrid;
