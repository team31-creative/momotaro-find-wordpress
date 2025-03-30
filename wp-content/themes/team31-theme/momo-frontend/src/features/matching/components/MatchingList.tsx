/** @jsxImportSource @emotion/react */
import React, {useMemo} from "react";
import { css } from "@emotion/react";

import MJTypography from "../../../components/MJTypography";
import MJAvatar from "../../../components/MJAvatar";

interface EventListProps {
    dataList: unknown[];
    onLink: (name: string) => void;
}

const MatchingList: React.FC<EventListProps> = ({ dataList,onLink }) => {
    // const items = new Array(10).fill(null);  // 10回繰り返すための配列

    const defaultValue = useMemo(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            lists: (dataList as any[]) || [],
        }
    }, [dataList]);

    return (
        <ul css={underParentStyle}>
            {defaultValue.lists.map((data) => (
                <li css={listItemStyle} key={data.id} onClick={() => onLink(data.name)} data-link={data.link}>
                    <div css={itemContainerStyle(false)}>
                        <div css={dateStyle}>
                            <MJAvatar size="M" src={data?.icon} />
                        </div>
                        <div css={titleCss}>
                            <MJTypography css={eventNameStyle} bold={true}>{data?.name}</MJTypography>
                            <MJTypography css={eventDetailsStyle}>{data?.description}</MJTypography>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

const underParentStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
`;

const listItemStyle = css`
display: flex;
flex-direction: row;
border-color: #ccc;
min-width: 330px;
width: 90%;
height: 90px;
margin: 0.5rem auto;
`;

const titleCss = css`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const itemContainerStyle = (withEffect: boolean) => css`
    ${withEffect ? `
        transition: all 0.3s;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        ease-in-out: transform 0.3s;
        &:hover {
            transform: translateY(-0.25rem);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    ` : `
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
`}
cursor: pointer;
background-color: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(10px);
border-radius: 0.375rem;
display: flex;
flex: 1;
align-items: center;
padding: 1rem;
`;

const dateStyle = css`
height: 57px;
margin-top: 0;
line-height: tight;
text-align: center;
font-weight: bold;
color: black;
`;

const eventNameStyle = css`
font-weight: medium;
color: black;
transition: color 0.5s;
&:hover {
    color: #f00;
}
`;

const eventDetailsStyle = css`
font-size: 0.875rem;
color: #999;
`;

export default MatchingList;