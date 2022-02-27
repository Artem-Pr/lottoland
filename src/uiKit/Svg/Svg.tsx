import React from 'react';

type Props = {
    iconName: string | null;
    className: string;
};

export const Svg = ({iconName, className}: Props) => {
    const svgClass = className ? `icon-default ${className}` : 'icon-default';
    const icon = iconName ? `icon-${iconName}` : '';
    const name = iconName ? `#icon-${iconName}` : '';

    return (
        <svg className={svgClass} aria-hidden="true">
            <use className={`icon-use ${icon}`} xlinkHref={name} href={name}>
                {' '}
            </use>
        </svg>
    );
};
